import nodemailer from "nodemailer"

export const runtime = "nodejs"

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Koza Construction Website" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: "erp.admin@optimizedholding.com.qa",
      subject: `New Contact Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error("EMAIL ERROR:", error)

    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    )
  }
}