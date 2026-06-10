import nodemailer from "nodemailer"

export const runtime = "nodejs"

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: "erp.admin@optimizedholding.com.qa",
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)
    return Response.json({ success: false }, { status: 500 })
  }
}