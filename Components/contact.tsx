import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"
import { Button } from "@/Components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <form className="flex flex-col gap-4">

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

        <Button type="submit">
          Send Message
        </Button>

      </form>
    </section>
  )
}