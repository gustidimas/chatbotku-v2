// components/Navbar.tsx
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Fitur", href: "/fitur" },
    { name: "Harga", href: "/harga" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <header className="w-full max-w-5xl mx-auto px-4 md:px-8 py-4 md:py-6 border-b border-border">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold font-serif">
          Logo
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:text-primary ${
                pathname === item.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => (window.location.href = "/signin")}
            className="text-sm"
          >
            Masuk
          </Button>
          <Button
            size="sm"
            onClick={() => (window.location.href = "/signup")}
            className="text-sm"
          >
            Daftar
          </Button>
        </nav>

        <button
          className="md:hidden text-muted-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-base transition-colors hover:text-primary ${
                pathname === item.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Button
              variant="outline"
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = "/signin";
              }}
              className="w-full"
            >
              Masuk
            </Button>
            <Button
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = "/signup";
              }}
              className="w-full"
            >
              Daftar
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
