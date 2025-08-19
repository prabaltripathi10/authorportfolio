import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface BookCardProps {
  title: string;
  description: string;
  image: string;
  status: "latest" | "upcoming";
  releaseDate?: string;
  amazonLink?: string;
  goodreadsLink?: string;
  flipkartLink?: string;
}

export function BookCard({
  title,
  description,
  image,
  status,
  releaseDate,
  amazonLink,
  goodreadsLink,
  flipkartLink,
}: BookCardProps) {
  return (
    <div className="group max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Book Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg shadow-book transition-smooth group-hover:shadow-glow">
            <img
              src={image}
              alt={`${title} book cover`}
              className="w-full max-w-sm mx-auto transform transition-smooth group-hover:scale-105"
            />
          </div>
          {status === "upcoming" && (
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
              Coming Soon
            </div>
          )}
        </div>

        {/* Book Details */}
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">
              {title}
            </h2>
            {releaseDate && (
              <p className="text-muted-foreground font-medium mb-4">
                {status === "upcoming" ? "Expected Release: " : "Released: "}
                {releaseDate}
              </p>
            )}
            <p className="text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>

          {/* Purchase Buttons */}
          <div className="flex flex-wrap gap-3">
            {amazonLink && (
              <Button
                variant="purchase"
                asChild
                className="group/btn"
              >
                <a href={amazonLink} target="_blank" rel="noopener noreferrer">
                  <span>Amazon</span>
                  <ExternalLink className="w-4 h-4 ml-2 transition-smooth group-hover/btn:translate-x-1" />
                </a>
              </Button>
            )}
            
            {goodreadsLink && (
              <Button
                variant="outline"
                asChild
                className="group/btn"
              >
                <a href={goodreadsLink} target="_blank" rel="noopener noreferrer">
                  <span>Goodreads</span>
                  <ExternalLink className="w-4 h-4 ml-2 transition-smooth group-hover/btn:translate-x-1" />
                </a>
              </Button>
            )}
            
            {flipkartLink && (
              <Button
                variant="secondary"
                asChild
                className="group/btn"
              >
                <a href={flipkartLink} target="_blank" rel="noopener noreferrer">
                  <span>Flipkart</span>
                  <ExternalLink className="w-4 h-4 ml-2 transition-smooth group-hover/btn:translate-x-1" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}