import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Calendar, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.3), rgba(5, 150, 105, 0.3)), url('/elegant-wedding-venue-with-soft-natural-lighting.jpg')`,
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <div className="flex justify-center mb-6">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-balance">Sarah & Michael</h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">
            Together with our families, we invite you to celebrate our wedding
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>June 15th, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Garden Pavilion, Napa Valley</span>
            </div>
          </div>
          <Link href="/rsvp">
            <Button size="lg" className="text-xl px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              RSVP Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Details Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Join Us for Our Special Day</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed text-balance">
            We can't wait to celebrate this momentous occasion with our closest family and friends. Your presence would
            make our day even more meaningful and memorable.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Ceremony</h3>
              <p className="text-muted-foreground mb-2">4:00 PM</p>
              <p className="text-muted-foreground">Garden Pavilion</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Reception</h3>
              <p className="text-muted-foreground mb-2">6:00 PM</p>
              <p className="text-muted-foreground">Vineyard Terrace</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            For questions, please contact us at{" "}
            <a href="mailto:sarah.michael.wedding@email.com" className="text-primary hover:underline">
              sarah.michael.wedding@email.com
            </a>
          </p>
          <p className="text-sm text-muted-foreground">We can't wait to celebrate with you!</p>
        </div>
      </footer>
    </div>
  )
}
