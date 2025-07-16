import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    const body = await req.json();
    const { doctorId, userId, date} = body;

    
    
    if (!doctorId || !userId || !date) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    
    const appointmentExists = await prisma.appointment.findFirst({
        where: {
            doctorId,
            date,
        },
    });
    
    if(appointmentExists) {
        return NextResponse.json({ error: 'Appointment already exists' }, { status: 400  });
    }
    
    const allowedMinutes = [0, 15, 30, 45];
    const appointmentDate = new Date(date);
    const minutes = appointmentDate.getMinutes();
    const seconds = appointmentDate.getSeconds();
    
    if (!allowedMinutes.includes(minutes) || seconds !== 0) {
        return NextResponse.json({ error: 'Appointment time must be on the hour or quarter hour' }, { status: 400 });
    }
    const appointment = await prisma.appointment.create({
        data: {
            doctorId,
            userId,
            date,
        }
    });
    return NextResponse.json({ success: true, appointment });
    
};


export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
        const appointment = await prisma.appointment.findUnique({
            where: { id: Number(id) },
        });

        if (!appointment) {
            return NextResponse.json({ error: 'Appointment not found' }, { status: 404 });
        }

        return NextResponse.json(appointment);
    } else {
        const appointments = await prisma.appointment.findMany();
        return NextResponse.json(appointments);
    }
}