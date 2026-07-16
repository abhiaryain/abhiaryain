import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FadeItem } from "@/components/abhiarya-ui/fade";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ErrorProps = {
  status: number;
  message: string;
};

export function ErrorPage({ status, message }: ErrorProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-4",
        "min-h-[calc(100vh-2rem)] w-full sm:min-h-[calc(100vh-8rem)]",
        "text-center",
      )}
    >
      <FadeItem>
        <h1
          className={cn(
            "font-extrabold text-7xl sm:text-9xl",
            status >= 500 && "text-destructive",
          )}
        >
          {status}
        </h1>
      </FadeItem>
      <FadeItem>
        <p className="mt-2 mb-6 text-lg text-muted-foreground">{message}</p>
      </FadeItem>
      <FadeItem>
        <Button
          className={cn(
            "bg-accent hover:bg-accent/80",
            "text-accent-foreground",
          )}
          aria-label="go-to-home"
        >
          <Link href="/" className="flex justify-center items-center gap-1">
            Go Home <ChevronRight />
          </Link>
        </Button>
      </FadeItem>
    </div>
  );
}
