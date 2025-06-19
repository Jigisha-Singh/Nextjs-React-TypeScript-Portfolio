import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Coffee, MessageSquareHeart, Lightbulb } from 'lucide-react';

const personalityTraits = [
  { icon: <MessageSquareHeart className="h-5 w-5 text-accent-foreground" />, label: "Polite & Kind" },
  { icon: <Sparkles className="h-5 w-5 text-accent-foreground" />, label: "Intelligent & Curious" },
  { icon: <Lightbulb className="h-5 w-5 text-accent-foreground" />, label: "Bold When It Counts" },
  { icon: <Coffee className="h-5 w-5 text-accent-foreground" />, label: "Hardworking" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <Container>
        <SectionTitle subtitle="Introduction">Who’s this cool nerd?</SectionTitle>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16 items-center">
          <div className="lg:col-span-2 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Hey there! I'm Jigisha, an 18-year-old Computer Science & Engineering student with a 
              burning passion for transforming data into compelling stories and abstract ideas into 
              tangible realities. My journey in tech is fueled by a fascination with Machine Learning, 
              Data Science, and the endless possibilities of Web Development.
            </p>
            <p>
              When I'm not wrestling with algorithms or architecting innovative web solutions, you might 
              find me exploring new technological frontiers, diving deep into complex problem-solving, or 
              (perhaps surprisingly!) holding my own in a spirited debate. I approach life and work with 
              politeness and an insatiable curiosity, balanced with a dash of boldness when the moment calls for it.
            </p>
            <p>
              Currently pursuing my B.E. at AMC Engineering College, I'm always eager to learn, grow, and 
              contribute to meaningful projects.
            </p>
          </div>
          <Card className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="p-0">
              <Image
                src="/Jigisha Singh.jpg"
                alt="Jigisha Singh"
                width={400}
                height={400}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
                data-ai-hint="woman portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardHeader>
            <CardContent className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
              <CardTitle className="text-2xl font-bold text-white">Jigisha Singh</CardTitle>
              <p className="text-sm text-gray-200">CSE Student (Data Science)</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12">
            <h3 className="text-xl font-semibold text-center text-foreground mb-6">A Little More About My Personality:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {personalityTraits.map((trait) => (
                <div key={trait.label} className="flex flex-col items-center p-4 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
                  <div className="p-3 rounded-full bg-accent mb-3">
                    {trait.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground/90 text-center">{trait.label}</span>
                </div>
              ))}
            </div>
          </div>
      </Container>
    </section>
  );
}
