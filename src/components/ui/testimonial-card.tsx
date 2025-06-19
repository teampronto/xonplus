
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export interface TestimonialAuthor {
  name: string;
  handle?: string;
  avatar: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
}

export function TestimonialCard({
  author,
  text,
  href,
}: TestimonialCardProps) {
  return (
    <div className="group relative w-[350px] flex-shrink-0 overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md mx-2">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-12 w-12 overflow-hidden rounded-full bg-muted">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback 
              className={cn(
                "text-xl font-semibold",
                "bg-primary text-white"
              )}
            >
              {author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <p className="text-sm font-medium">{author.name}</p>
            {author.handle && (
              <p className="text-xs text-muted-foreground">{author.handle}</p>
            )}
          </div>
        </div>
        
        {/* 5 Star Rating */}
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="h-4 w-4 fill-yellow-400 text-yellow-400" 
            />
          ))}
        </div>
        
        <p className="text-sm/6 text-muted-foreground text-left">"{text}"</p>
      </div>
      
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        >
          <span className="sr-only">View profile</span>
        </a>
      )}
    </div>
  );
}
