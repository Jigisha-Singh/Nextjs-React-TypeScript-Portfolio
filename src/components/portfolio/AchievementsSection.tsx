import Container from './Container';
import SectionTitle from './SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, Brain, Bot } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="h-6 w-6 text-yellow-500" />,
    title: 'Debate Champion',
    description: 'Winner in Inter-School Debate Competition.',
    emoji: '🏆',
  },
  {
    icon: <Users className="h-6 w-6 text-green-500" />,
    title: 'Sports Star',
    description: 'Finalist in Annual Sports Meet.',
    emoji: '🏃‍♀️',
  },
  {
    icon: <Brain className="h-6 w-6 text-blue-500" />,
    title: 'Data Structures Pro',
    description: 'Ranked in the Top 5% in Data Structures & Algorithms coursework.',
    emoji: '💻',
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
