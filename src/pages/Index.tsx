import Navbar from "@/components/Navbar";
import { AuthorHero } from "@/components/AuthorHero";
import { AboutSection } from "@/components/AboutSection";
import { BookCard } from "@/components/BookCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import latestBookCover from "@/assets/latest-book.jpg";
import upcomingBookCover from "@/assets/upcoming-book.jpg";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <AuthorHero />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Books Section */}
      <section id="books" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Latest Release
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <BookCard
            title="The Midnight Garden"
            description="A haunting tale of love, loss, and redemption set in a mysterious Victorian estate. Follow Elena as she uncovers family secrets hidden within the walls of Thornfield Manor, where the past refuses to stay buried and every shadow holds a story."
            image={latestBookCover}
            status="latest"
            releaseDate="March 2024"
            amazonLink="https://www.amazon.com/dp/example"
            goodreadsLink="https://www.goodreads.com/book/show/example"
            flipkartLink="https://www.flipkart.com/example"
          />
        </div>
      </section>

      {/* Upcoming Release */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Upcoming Release
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <BookCard
            title="Whispers of Tomorrow"
            description="Sarah's highly anticipated second novel explores the complexities of time, memory, and the choices that define us. In a world where past and future collide, Maya must navigate the delicate balance between what was and what could be."
            image={upcomingBookCover}
            status="upcoming"
            releaseDate="October 2024"
            amazonLink="https://www.amazon.com/dp/pre-order-example"
            goodreadsLink="https://www.goodreads.com/book/show/upcoming-example"
            flipkartLink="https://www.flipkart.com/pre-order-example"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Stay Connected
            </h2>
            <p className="text-lg opacity-90">
              Be the first to know about new releases, book events, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-primary bg-primary-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/90 transition-smooth">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 text-center">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground">
            © 2024 Sarah Mitchell. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;