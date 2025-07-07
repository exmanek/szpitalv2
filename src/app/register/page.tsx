'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const userData = { name, surname, email, password };

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (res.ok) {
        setRegistered(true);
        setTimeout(() => router.push('/login'), 1500);
      } else {
        setError(data.error || 'Coś poszło nie tak');
      }
    } catch {
      setError('Błąd połączenia z serwerem');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Rejestracja pacjenta</h1>

        {registered ? (
          <p className="text-green-600 text-center">Rejestracja zakończona sukcesem! Przekierowanie...</p>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Imię</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Nazwisko</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Telefon (opcjonalnie)</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Hasło</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Zarejestruj się
            </button>
          </form>
        )}

        <p className="text-sm text-center mt-4 text-gray-600">
          Masz już konto?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Zaloguj się
          </a>
        </p>
      </div>
    </div>
  );
}
