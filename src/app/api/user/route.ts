import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

// CREATE — POST /api/admin/user
export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, surname, email, password, role } = body

  if (!['DOCTOR', 'PATIENT'].includes(role)) {
    return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = await prisma.user.create({
      data: {
        name,
        surname,
        email,
        password: hashedPassword,
        role,
      },
    })

    if (role === 'DOCTOR') {
      await prisma.doctorProfile.create({ data: { userId: user.id } })
    } else if (role === 'PATIENT') {
      await prisma.patientProfile.create({ data: { userId: user.id } })
    }

    return NextResponse.json({ success: true, user })
  } catch (err) {
    return NextResponse.json({ error: 'User creation failed', details: err }, { status: 500 })
  }
}

// READ — GET /api/admin/user?id=123
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (id) {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: {
        Doctor: true,
        Patient: true,
      },
    })

    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    return NextResponse.json(user)
  } else {
    const users = await prisma.user.findMany({
      include: {
        Doctor: true,
        Patient: true,
      },
    })

    return NextResponse.json(users)
  }
}


// UPDATE — PUT /api/admin/user?id=123
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

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: updateData,
    })

    return NextResponse.json({ success: true, user })
  } catch (err) {
    return NextResponse.json({ error: 'Update failed', details: err }, { status: 500 })
  }
}

// DELETE — DELETE /api/admin/user?id=123
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 })

  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    })

    return NextResponse.json({ success: true, message: 'User deleted' })
  } catch (err) {
    return NextResponse.json({ error: 'Delete failed', details: err }, { status: 500 })
  }
}
