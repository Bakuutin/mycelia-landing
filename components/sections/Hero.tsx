"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center text-white bg-black px-5 py-10">

        <div className="max-w-4xl">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
                <h1 className="text-5xl font-extrabold mb-4 tracking-tight cursor-help">
                  🍄 Mycelia
                </h1>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black border border-gray-200 shadow-lg">
              The IPA pronunciation of "Mycelia" is <code className="font-mono bg-gray-100 px-1 rounded whitespace-nowrap">{'/maɪˈsiːliə/'}</code>
            </TooltipContent>
          </Tooltip>
    </TooltipProvider>
        <p className="text-2xl mb-8 font-light opacity-95">
          Your Privacy-First AI Memory
        </p>
        <p className="text-xl mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto">
          Capture ideas, thoughts, and conversations in <strong>voice, screenshots, or text</strong>.<br />
          Ask anything later — <em>"What did I say about X last May?"</em> Mycelia tells you, in your own words.
        </p>
        <div className="mb-12 text-lg opacity-90 flex gap-8 justify-center flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏠</span>
            <span className="font-medium">Local-first</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔓</span>
            <span className="font-medium">Open-source</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📦</span>
            <span className="font-medium">Modular</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛠</span>
            <span className="font-medium">Hackable</span>
          </div>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white hover:text-black"
            asChild
          >
            <a href="https://t.me/+Wb-z1oo30283YWEy" target="_blank" rel="noopener noreferrer">Chat with us on Telegram</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white"
            asChild
          >
            <a href="#problems">Read more</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
