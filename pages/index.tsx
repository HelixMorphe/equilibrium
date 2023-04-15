import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="max-w-[1400px] m-auto">
        <Navbar />
      </div>
      <div className="max-w-5xl m-auto mt-4">
        <Hero />
      </div>
    </div>
  );
}
