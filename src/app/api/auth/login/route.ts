import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

// Login user
export async function POST(req: NextRequest) {
    const body = await req.json()
    const { email, password } = body
    if (!email || !password) {
        return NextResponse.json({ error: 'Missing email or password' }, { status: 400 })
    }
    
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
        }

        // Optionally, you can return a token or session info here
        return NextResponse.json({ success: true, user })
    } catch (err) {
        return NextResponse.json({ error: 'Login failed', details: err }, { status: 500 })
    }
}