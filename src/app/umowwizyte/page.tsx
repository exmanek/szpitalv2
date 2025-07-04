'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UmowWizyte() {
  const router = useRouter();

  const [form, setForm] = useState({
    date: '',
    doctor: '',
    department: '',
    status: 'pending',
  });

  const [error, setError] = useState('');

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Walidacja - sprawdź czy wszystkie pola są uzupełnione
    if (!form.date || !form.doctor || !form.department) {
      setError('Proszę uzupełnić wszystkie pola.');
      return;
    }

    const newAppointment = { ...form };

    const existing = localStorage.getItem('appointments');
    const appointments = existing ? JSON.parse(existing) : [];

    appointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    router.push('/panelpacjent');
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Umów wizytę</h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        {error && <p className="text-red-500 font-semibold">{error}</p>}

        <div>
          <label className="block text-sm">Data i godzina</label>
          <input
            type="datetime-local"
            value={form.date}
            onChange={(e) => handleChange('date', e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm">Lekarz</label>
          <input
            type="text"
            value={form.doctor}
            onChange={(e) => handleChange('doctor', e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Np. dr Jan Kowalski"
          />
        </div>

        <div>
          <label className="block text-sm">Oddział</label>
          <input
            type="text"
            value={form.department}
            onChange={(e) => handleChange('department', e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Np. Kardiologia"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Zarejestruj wizytę
        </button>
      </div>
    </div>
  );
}
