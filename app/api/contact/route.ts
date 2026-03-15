import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {

  try {

    const data = await req.formData()

    const nombre = data.get("nombre")
    const telefono = data.get("telefono")
    const email = data.get("email")
    const mensaje = data.get("mensaje")

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nueva cotización desde la web",
      text: `
Nombre: ${nombre}
Teléfono: ${telefono}
Email: ${email}

Mensaje:
${mensaje}
`
    })

    return NextResponse.json({ success: true })

  } catch (error) {

    console.error("EMAIL ERROR:", error)

    return NextResponse.json(
      { success: false },
      { status: 500 }
    )

  }

}