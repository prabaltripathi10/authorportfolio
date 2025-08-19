import { Award, Users, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              About the Author
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Bio */}
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Sarah Mitchell is an award-winning novelist whose work explores the intricate tapestries 
              of human relationships and the profound moments that define our lives. With a background 
              in psychology and a passion for storytelling, she brings depth and authenticity to every 
              character she creates.
            </p>
            <p>
              Her debut novel garnered critical acclaim and established her as a distinctive voice in 
              contemporary literature. Sarah's writing has been praised for its emotional resonance, 
              lyrical prose, and ability to illuminate the extraordinary within the ordinary.
            </p>
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">
                Award Winner
              </h3>
              <p className="text-muted-foreground">
                Recipient of the Literary Excellence Award 2023
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">
                Bestselling Author
              </h3>
              <p className="text-muted-foreground">
                Over 100,000 copies sold worldwide
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">
                Global Reach
              </h3>
              <p className="text-muted-foreground">
                Published in 12 countries and 8 languages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}