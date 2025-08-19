import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  source: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Emily Rodriguez",
    role: "Book Blogger",
    content: "Sarah Mitchell's storytelling is absolutely captivating. 'The Midnight Garden' kept me turning pages well into the night. Her ability to weave mystery with emotion is unmatched.",
    rating: 5,
    source: "Goodreads"
  },
  {
    name: "Michael Chen",
    role: "Literary Critic",
    content: "A masterpiece of contemporary fiction. Mitchell's prose is both elegant and accessible, creating characters that feel like old friends by the story's end.",
    rating: 5,
    source: "BookReview Weekly"
  },
  {
    name: "Sarah Thompson",
    role: "Avid Reader",
    content: "I couldn't put this book down! The atmosphere Sarah creates is so vivid, I felt like I was walking through Thornfield Manor myself. Can't wait for her next release!",
    rating: 5,
    source: "Amazon"
  },
  {
    name: "Dr. James Wilson",
    role: "English Professor",
    content: "Mitchell demonstrates a rare talent for combining literary depth with compelling storytelling. Her work deserves recognition among the finest contemporary authors.",
    rating: 5,
    source: "Literary Journal"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            What Readers Are Saying
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 shadow-elegant hover:shadow-glow transition-smooth"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-foreground mb-4 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <cite className="font-medium text-primary not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  via {testimonial.source}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Join thousands of satisfied readers
          </p>
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-accent text-accent"
              />
            ))}
            <span className="ml-2 text-primary font-semibold">4.9/5 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;