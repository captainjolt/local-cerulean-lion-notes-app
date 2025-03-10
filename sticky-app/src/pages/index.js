import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="z-10 items-center justify-between font-mono text-sm lg:flex">
        <Nav />
        <Hero />

      </div>
    </main>
  );
}
