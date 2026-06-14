"use client"

import { useState } from "react"
import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"
import { Button } from "@/Components/ui/button"

export default function Contact() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    setLoading(true)

    const formData = new FormData(form)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        form.reset()
        alert("Message sent successfully!")
        return
      }

      alert("Failed to send message")
    } catch (error) {
      console.error("Contact form error:", error)
      alert("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />

        <Textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  )
}