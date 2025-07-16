import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

// POST /api/doctor
export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, surname, email, password } = body

  if (!name || !surname || !email || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const doctor = await prisma.doctor.create({
      data: {
        name,
        surname,
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json({ success: true, doctor })
  } catch (err) {
    return NextResponse.json({ error: 'User creation failed', details: err }, { status: 500 })
  }
}

// GET /api/doctor?id=123
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (id) {
    const doctor = await prisma.doctor.findUnique({
      where: { doctorId: Number(id) },
    })

    if (!doctor) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(doctor)
  } else {
    const users = await prisma.doctor.findMany()
    return NextResponse.json(users)
  }
}

// PUT /api/doctor?id=123
export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 })

  const body = await req.json()
  const { name, surname, email, password } = body

  try {
    const updateData: any = {}
    if (name) updateData.name = name
    if (surname) updateData.surname = surname
    if (email) updateData.email = email
    if (password) updateData.password = await bcrypt.hash(password, 10)

    const doctor = await prisma.doctor.update({
      where: { doctorId: Number(id) },
      data: updateData,
    })

    return NextResponse.json({ success: true, doctor })
  } catch (err) {
    return NextResponse.json({ error: 'Update failed', details: err }, { status: 500 })
  }
}

// DELETE /api/doctor?id=123
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 })

  try {
    await prisma.doctor.delete({
      where: { doctorId: Number(id) },
    })

    return NextResponse.json({ success: true, message: 'User deleted' })
  } catch (err) {
    return NextResponse.json({ error: 'Delete failed', details: err }, { status: 500 })
  }
}
