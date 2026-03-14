import { NextResponse } from "next/server"
import nodemailer from "nodemailer" 

export async function POST(req: Request) {

  const data = await req.formData()

  const nombre = data.get("nombre")
  const telefono = data.get("telefono")
  const email = data.get("email")
  const mensaje = data.get("mensaje")

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "jyleventos.com.co",
      pass: "TU_PASSWORD"
    }
  })

  await transporter.sendMail({
    from: `"Formulario Web" <contacto@jyleventos.com.co>`,
    to: "contacto@jyleventos.com.co",
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

}