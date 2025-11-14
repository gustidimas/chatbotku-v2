"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* <header className="w-full max-w-5xl mx-auto px-4 md:px-8 py-2 md:py-4 text-xs border-b border-secondary">
          <nav className="flex flex-row justify-between items-center">
            <ul>
              <Link href={"/"}>Logo</Link>
            </ul>
            <ul>
              <Button
                size={"sm"}
                variant={"outline"}
                asChild
              >
                <Link href={"/"}>Back</Link>
              </Button>
            </ul>
          </nav>
        </header> */}
        <main className="grow flex flex-col justify-center items-center">
          {children}
        </main>
      </div>
    </>
  );
}
