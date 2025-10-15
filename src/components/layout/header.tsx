import Link from "next/link";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
        <Layers className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold text-foreground">EvolveNow Digital</span>
      </Link>
      <nav className="ml-auto">
        <Button variant="outline" asChild>
          <Link href="#">
            Contáctanos
          </Link>
        </Button>
      </nav>
    </header>
  );
}
