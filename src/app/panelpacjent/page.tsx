'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Appointment {
  date: string;
  doctor: string;
  department: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export default function PanelPacjent() {
  const [patient, setPatient] = useState({
    name: '',
    email: '',
    phone: '',
    patientId: '',
    password: '',
  });

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('registeredUser');
    if (storedUser) {
      setPatient(JSON.parse(storedUser));
    }

    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    setPatient((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('registeredUser', JSON.stringify(patient));
    setIsEditing(false);
  };

  const handleCancelAppointment = (index: number) => {
    const confirmed = window.confirm('Czy na pewno chcesz odwołać tę wizytę?');
    if (!confirmed) return;

    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Panel pacjenta</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Dane pacjenta</h2>

        {isEditing ? (
          <div className="space-y-2">
            {/* edytowalne pola */}
            {['name', 'email', 'phone', 'password'].map((field) => (
              <div key={field}>
                <label className="block text-sm capitalize">
                  {field === 'name' ? 'Imię i nazwisko' : field}
                </label>
                <input
                  type={field === 'email' ? 'email' : field === 'password' ? 'password' : 'text'}
                  value={patient[field as keyof typeof patient]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            <p><strong>Imię i nazwisko:</strong> {patient.name}</p>
            <p><strong>E-mail:</strong> {patient.email}</p>
            <p><strong>Telefon:</strong> {patient.phone}</p>
            <p><strong>ID pacjenta:</strong> {patient.patientId || 'PL-0000-000'} </p>
          </>
        )}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Nadchodzące wizyty</h2>
        {appointments.length === 0 ? (
          <p>Brak zaplanowanych wizyt.</p>
        ) : (
          <ul className="space-y-4">
            {appointments.map((appt, index) => (
              <li key={index} className="border border-gray-200 rounded p-4 flex justify-between items-start gap-4">
                <div>
                  <p><strong>Data:</strong> {appt.date}</p>
                  <p><strong>Lekarz:</strong> {appt.doctor}</p>
                  <p><strong>Oddział:</strong> {appt.department}</p>
                  <p>
                    <strong>Status:</strong>{' '}
                    <span
                      className={
                        appt.status === 'confirmed'
                          ? 'text-green-600 font-semibold'
                          : appt.status === 'pending'
                          ? 'text-yellow-600 font-semibold'
                          : 'text-red-600 font-semibold'
                      }
                    >
                      {appt.status === 'confirmed'
                        ? 'Potwierdzona'
                        : appt.status === 'pending'
                        ? 'Oczekująca'
                        : 'Anulowana'}
                    </span>
                  </p>
                </div>

                {appt.status === 'pending' && (
                  <button
                    onClick={() => handleCancelAppointment(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Odwołaj
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8 flex gap-4">
        <Link href="/umowwizyte">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Umów wizytę
          </button>
        </Link>

        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Zapisz zmiany
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Edytuj profil
          </button>
        )}
      </div>
    </div>
  );
}
