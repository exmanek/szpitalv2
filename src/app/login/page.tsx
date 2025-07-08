'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@components/navbar';
import { div } from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Jeśli chcesz zapamiętać sesję klienta, tu możesz np. użyć cookie
        router.push('/panelpacjent');
      } else {
        setError(data.error || 'Błąd logowania');
      }
    } catch (err) {
      setError('Wystąpił błąd podczas logowania.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
    <nav className="bg-white shadow-sm py-4">
      <Navbar />
    </nav>
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
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Logowanie...' : 'Zaloguj się'}
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Nie masz konta?{' '}
        <a href="/register" className="text-blue-600 hover:underline">
          Zarejestruj się
        </a>
      </p>
    </div>
    </div>
  );
}
