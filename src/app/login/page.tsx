'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem('registeredUser') || '{}'
    );

    if (email === savedUser.email && password === savedUser.password) {
      router.push('/panelpacjent'); // Przekierowanie do panelu pacjenta
    } else {
      setError('Nieprawidłowy e-mail lub hasło.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Logowanie</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Zaloguj się
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Nie masz konta?{' '}
        <a href="/register" className="text-blue-600 hover:underline">
          Zarejestruj się
        </a>
      </p>
    </div>
  );
}
