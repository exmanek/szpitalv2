import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Brakuje email lub hasła' }, { status: 400 });
    }

    // Znajdź użytkownika po emailu
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'Użytkownik nie znaleziony' }, { status: 404 });
    }

    if (!user.password) {
      return NextResponse.json({ error: 'Brak hasła dla użytkownika' }, { status: 400 });
    }

    // Porównaj hasła
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Niepoprawne hasło' }, { status: 401 });
    }

    // Zwróć dane użytkownika (bez hasła!)
    return NextResponse.json({
      success: true,
      user: {
        id: user.userId,
        email: user.email,
        name: user.name,
        surname: user.surname,
        phone: user.phone,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Błąd logowania' }, { status: 500 });
  }
}
