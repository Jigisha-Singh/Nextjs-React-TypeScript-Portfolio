import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'ConvoCraft AI',
    description: 'A friendly neighborhood chatbot designed to assist users with information and engage in natural conversations. Built with Python and NLP techniques.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'chatbot interface',
    tags: ['Python', 'NLP', 'AI'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'BudgetBuddy',
    description: 'An intuitive expense tracker application that helps users manage their finances effectively. Features include tracking, categorization, and visual reports.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'finance dashboard',
    tags: ['JavaScript', 'React', 'Node.js'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Insightify',
    description: 'A data visualization dashboard for exploring public health trends. Leverages various charting libraries to present complex data in an accessible format.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data graph analytics',
    tags: ['Data Science', 'Python', 'Plotly'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'This Portfolio!',
    description: "The very digital canvas you're exploring now! Built with Next.js, Tailwind CSS, and a sprinkle of fun animations to showcase my work.",
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'website design code',
    tags: ['Next.js', 'Tailwind CSS', 'Vanta.js'],
    liveLink: '#', // Link to itself or disable
    githubLink: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <Container>
        <SectionTitle subtitle="My Creations">Featured Projects</SectionTitle>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="group flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm text-foreground/80 leading-relaxed">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end space-x-3">
                {project.githubLink !== '#' && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
                {project.liveLink !== '#' && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
