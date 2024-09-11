import Directory from "@/components/Directory.server";
import Hero from "@/components/Hero.server";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Directory />
    </main>
  );
}
