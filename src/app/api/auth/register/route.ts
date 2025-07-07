import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

// CREATE — POST /api/auth/register
export async function POST(req: NextRequest) {
    const body = await req.json()
    const { name, surname, email, password} = body

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const user = await prisma.user.create({
            data: {
                name,
                surname,
                email,
                password: hashedPassword,
                role: 'PATIENT', //Zakladanie konta przez pacjenta ez
            },
        })

        return NextResponse.json({ success: true, user })
    } catch (err) {
        return NextResponse.json({ error: 'User registration failed', details: err }, { status: 500 })
    }
}

