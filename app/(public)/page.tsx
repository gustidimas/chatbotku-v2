"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="w-full h-full">
        <section className="max-w-5xl mx-auto relative grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 pt-16 md:pt-8 overflow-hidden">
          <div className="order-2 md:order-1 w-full h-full flex justify-center relative z-10">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px 0px 0px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src={"/images/iphone.svg"}
                alt="Iphone"
                width={640}
                height={640}
                priority
                className="relative z-10"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="order-1 md:order-2 flex flex-col gap-2 justify-center items-center text-center md:justify-center md:items-end md:text-end relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-serif">Serahkan ke AI</h1>
            <p className="text-base md:text-lg">
              Bangun chatbot pintar untuk bisnismu.
            </p>
            <div className="flex flex-row items-center gap-2">
              <Button variant={"outline"}>Harga</Button>
              <Button>Pelajari</Button>
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-background z-0"></div>
        </section>
        <section className="min-h-[480px] grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 py-16 md:py-8 bg-primary text-secondary"></section>
      </div>
    </>
  );
}
