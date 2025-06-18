import VantaBackground from './VantaBackground';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden">
      <VantaBackground>
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 h-full bg-background/30 dark:bg-background/50 backdrop-blur-sm w-full">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl font-headline">
            Jigisha Singh
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/90 sm:text-xl md:text-2xl font-body">
            Curious Coder & Creative Thinker.
            <br className="hidden sm:block" />
            Turning caffeine into code and ideas into impact.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#about">
                Discover More <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </VantaBackground>
    </section>
  );
}
