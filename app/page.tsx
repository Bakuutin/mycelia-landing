import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import Values from "@/components/sections/Values";
import Team from "@/components/sections/Team";
import Footer from "@/components/sections/Footer";
import GitHubCorner from "@/components/GitHubCorner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <GitHubCorner />
      <Hero />
      <Problems />
      <Features />
      <UseCases />
      <Footer />
    </main>
  );
}
