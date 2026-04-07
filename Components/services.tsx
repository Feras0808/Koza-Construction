import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"

export default function Services() {

  const services = [
    {
      title: "Residential Construction",
      image: "/card.png",
    },
    {
      title: "Commercial Buildings",
      image: "/card3.png",
    },
    {
      title: "Industrial Construction",
      image: "/card2.png",
    },
    {
      title: "Project Management",
      image: "/card4.png",
    },
  ]

  return (
    <section id="services" className="py-24 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-14">
        Our <span className="text-orange-500">Services</span>
      </h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {services.map((service) => (
          <Card
            key={service.title}
            className="group overflow-hidden rounded-xl border hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <CardHeader>
              <CardTitle className="text-lg group-hover:text-orange-500 transition">
                {service.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground">
              High-quality construction delivered with professionalism and
              attention to detail.
            </CardContent>

          </Card>
        ))}
      </div>
    </section>
  )
}