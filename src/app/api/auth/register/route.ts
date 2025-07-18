import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

// POST /api/auth/register
export async function POST(req: Request) {
  try {
    const { email, password, name, surname, phone } = await req.json();

    if (!email || !password || !name || !surname) {
      return NextResponse.json({ error: 'Brakuje danych' }, { status: 400 });
    }

    // Sprawdź, czy email już istnieje
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Email już istnieje' }, { status: 400 });
    }

    // Zhashuj hasło
    const hashedPassword = await bcrypt.hash(password, 10);

    // Stwórz nowego użytkownika
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        surname,
        phone,
      },
    });

    return NextResponse.json({ success: true, user: { id: user.userId, email: user.email } });
  } catch (error) {
    return NextResponse.json({ error: 'Coś poszło nie tak' }, { status: 500 });
  }
}
