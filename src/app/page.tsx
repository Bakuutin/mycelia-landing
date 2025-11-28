import Hero from "@/components/sections/Hero";
import Demo from "@/components/sections/Demo";
import Problems from "@/components/sections/Problems";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import Footer from "@/components/sections/Footer";
import GitHubCorner from "@/components/GitHubCorner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <GitHubCorner />
      <Hero />
      <Demo />
      <Problems />
      <Features />
      <UseCases />
      <Footer />
    </main>
  );
}
