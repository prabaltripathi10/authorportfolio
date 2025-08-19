// import { Button } from "@/components/ui/button";
// import { Mail, Twitter, Instagram, BookOpen } from "lucide-react";
// import authorPhoto from "@/assets/author-photo.jpg";

// export function AuthorHero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_0%,transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--accent))_0%,transparent_50%)]" />
//       </div>

//       <div className="container mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
//           {/* Content */}
//           <div className="space-y-8 text-center lg:text-left">
//             <div className="space-y-4">
//               <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
//                 Sarah
//                 <span className="block text-gradient">Mitchell</span>
//               </h1>
//               <p className="text-xl md:text-2xl text-muted-foreground font-light">
//                 Award-winning novelist crafting stories that illuminate the human experience
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <Button variant="hero" size="lg" className="group" >
//                 <BookOpen className="w-5 h-5 mr-2 transition-smooth group-hover:rotate-12" />
//                 Latest Release
//               </Button>
//               <Button variant="outline" size="lg" className="group">
//                 <Mail className="w-5 h-5 mr-2 transition-smooth group-hover:scale-110" />
//                 Get in Touch
//               </Button>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-6 justify-center lg:justify-start pt-4">
//               <a
//                 href="#"
//                 className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
//                 aria-label="Twitter"
//               >
//                 <Twitter className="w-6 h-6" />
//               </a>
//               <a
//                 href="#"
//                 className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-6 h-6" />
//               </a>
//             </div>
//           </div>

//           {/* Author Photo */}
//           <div className="relative">
//             <div className="relative mx-auto lg:mx-0 w-80 h-80 md:w-96 md:h-96">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl transform scale-110" />
//               <img
//                 src={authorPhoto}
//                 alt="Sarah Mitchell, Author"
//                 className="relative w-full h-full object-cover rounded-full shadow-elegant border-4 border-background"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// ...existing code...
import { Button } from "@/components/ui/button";
import { Mail, Twitter, Instagram, BookOpen } from "lucide-react";
import authorPhoto from "@/assets/author-photo.jpg";

export function AuthorHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: focus top of page if id not found
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--accent))_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                Sarah
                <span className="block text-gradient">Mitchell</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Award-winning novelist crafting stories that illuminate the human experience
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                className="group cursor-pointer"
                onClick={() => scrollTo("books")}
                aria-label="Go to latest release"
              >
                <BookOpen className="w-5 h-5 mr-2 transition-smooth group-hover:rotate-12" />
                Latest Release
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group cursor-pointer"
                onClick={() => scrollTo("contact")}
                aria-label="Get in touch"
              >
                <Mail className="w-5 h-5 mr-2 transition-smooth group-hover:scale-110" />
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start pt-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Author Photo */}
          <div className="relative">
            <div className="relative mx-auto lg:mx-0 w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl transform scale-110" />
              <img
                src={authorPhoto}
                alt="Sarah Mitchell, Author"
                className="relative w-full h-full object-cover rounded-full shadow-elegant border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ...existing