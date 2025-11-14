"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-serif">Logo</h3>
            <p className="text-sm text-muted-foreground mt-3 max-w-md">
              Bangun chatbot pintar untuk bisnismu—tanpa coding, tanpa biaya
              support, langsung jalan.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Produk</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/fitur"
                  className="hover:text-primary transition-colors"
                >
                  Fitur
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Informasi</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-primary transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Chatbot. Dibuat untuk bisnis yang ingin
          maju tanpa ribet.
        </div>
      </div>
    </footer>
  );
}
