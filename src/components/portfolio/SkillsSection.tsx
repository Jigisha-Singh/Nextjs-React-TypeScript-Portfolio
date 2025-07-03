import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { CodeXmlIcon, BrainCircuitIcon, BarChart3Icon, GlobeIcon, LightbulbIcon, DatabaseIcon } from 'lucide-react';

const skills = [
  {
    icon: <CodeXmlIcon className="h-10 w-10 text-primary" />,
    name: 'Python',
    caption: 'Fluent in Python, from data wrangling to model building.',
  },
  {
    icon: <CodeXmlIcon className="h-10 w-10 text-primary" />,
    name: 'JavaScript',
    caption: 'Bringing interactivity and sleekness to the web.',
  },
  {
    icon: <BrainCircuitIcon className="h-10 w-10 text-primary" />,
    name: 'Machine Learning',
    caption: 'Training models to learn, predict, and occasionally surprise.',
  },
  {
    icon: <BarChart3Icon className="h-10 w-10 text-primary" />,
    name: 'Data Science',
    caption: 'Extracting insights and stories from complex datasets.',
  },
  {
    icon: <GlobeIcon className="h-10 w-10 text-primary" />,
    name: 'Web Development (HTML, CSS)',
    caption: 'Crafting responsive and user-friendly digital experiences.',
  },
  {
    icon: <LightbulbIcon className="h-10 w-10 text-primary" />,
    name: 'Firebase',
    caption: 'Learning abd Building real-time applications with Firebase.',
  },
  {
    icon: <LightbulbIcon className="h-10 w-10 text-primary" />,
    name: 'GitHub',
    caption: 'Version control and collaboration made easy with GitHub.',
  },
  {
    icon: <LightbulbIcon className="h-10 w-10 text-primary" />,
    name: 'VS Code',
    caption: 'My go-to IDE for coding adventures.',
  },
  {
    icon: <LightbulbIcon className="h-10 w-10 text-primary" />,
    name: 'SQL',
    caption: 'Querying databases with precision and efficiency.',
  },
  {
    icon: <LightbulbIcon className="h-10 w-10 text-primary" />,
    name: 'Problem Solving',
    caption: 'Thriving on challenges and architecting elegant solutions.',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/30 dark:bg-muted/10">
      <Container>
        <SectionTitle subtitle="My Toolbox">Skills & Technologies</SectionTitle>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.name} className="group flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {skill.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80 leading-relaxed">{skill.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
