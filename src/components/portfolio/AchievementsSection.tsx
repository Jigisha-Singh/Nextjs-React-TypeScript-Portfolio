import Container from './Container';
import SectionTitle from './SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, Brain, Bot } from 'lucide-react';

const achievements = [
  {
    icon: <Brain className="h-6 w-6 text-blue-500" />,
    title: 'Hi, I’m Jigisha – aka Miss Almond Brain',
    description: 'I don’t forget things — literally anything. My friends say I’ve got almond-powered memory… and honestly, they’re not wrong. I remember events down to the timestamps 😄',
    emoji: '🧠',
  },
  {
    icon: <Trophy className="h-6 w-6 text-yellow-500" />,
    title: ' I Speak, Therefore I Win',
    description: 'I’ve stood my ground (and the mic) at inter-command debates — from the Northern Command in 2019 to the Western Command in 2022. Arguing with logic is kinda my superpower.',
    emoji: '🏆',
  },
  {
    icon: <Users className="h-6 w-6 text-green-500" />,
    title: 'Basketball Court Queen',
    description: 'Represented in the Inter Northern Command Basketball Competition, and we didn’t just play — we brought home 2nd place.',
    emoji: '🏀',
  },
  {
    icon: <Bot className="h-6 w-6 text-purple-500" />,
    title: 'Tech Contributor',
    description: 'Key contributions to impactful tech projects like a versatile chatbot and an efficient expense tracker.',
    emoji: '🤖',
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="bg-muted/30 dark:bg-muted/10">
      <Container>
        <SectionTitle subtitle="My Milestones">Achievements & Recognition</SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group flex items-start space-x-4 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0 text-3xl">{achievement.emoji}</div>
              {/* Or use Lucide icon: 
              <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                {achievement.icon}
              </div> 
              */}
              <div>
                <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                <p className="text-sm text-foreground/80">{achievement.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
