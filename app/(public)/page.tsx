"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TrendingDown, Link, Wand } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Hemat Biaya",
      description:
        "Tak perlu gaji customer support, chatbot siap melayani pelanggan 24/7 tanpa lelah.",
      icon: <TrendingDown className="h-6 w-6" />,
    },
    {
      title: "Integrasi Instan",
      description:
        "Cukup salin satu baris kode ke website yang sudah kamu miliki, chatbot langsung aktif dalam hitungan menit.",
      icon: <Link className="h-6 w-6" />,
    },
    {
      title: "Tanpa Coding",
      description:
        "Atur pesan, respons, dan alur percakapan lewat antarmuka yang sederhana.",
      icon: <Wand className="h-6 w-6" />,
    },
  ];

  return (
    <div className="w-full">
      <section className="max-w-5xl mx-auto relative grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 pt-16 md:pt-8 overflow-hidden">
        <div className="order-2 md:order-1 w-full h-full flex justify-center relative z-10">
          <div>
            <Image
              src={"/images/iphone.svg"}
              alt="Iphone"
              width={640}
              height={640}
              priority
              className="relative z-10"
            />
          </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col gap-2 justify-center items-center text-center md:justify-center md:items-end md:text-end relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold font-serif">
            Serahkan ke AI
          </h1>
          <p className="text-base md:text-lg">
            Bangun chatbot pintar untuk bisnismu.
          </p>
          <div className="flex flex-row items-center gap-2 mt-4">
            <Button variant={"outline"}>Harga</Button>
            <Button>Pelajari</Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-background z-0"></div>
      </section>

      <section className="w-full flex flex-col justify-center items-center px-4 md:px-8 py-16 md:py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            Fitur yang Membuat Beda
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mt-4">
            Dibangun untuk bisnis modern yang ingin memberikan layanan pelanggan
            terbaik tanpa ribet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl border bg-card"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
