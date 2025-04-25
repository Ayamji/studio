import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container mx-auto py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to ML Navigator
        </h1>
        <p className="text-lg text-center text-muted-foreground">
          Your guide to understanding Machine Learning.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <LearningModuleCard
          title="Supervised Learning"
          description="Learn from labeled data."
          href="/supervised-learning"
          icon="📈"
        />
        <LearningModuleCard
          title="Unsupervised Learning"
          description="Discover patterns in unlabeled data."
          href="/unsupervised-learning"
          icon="🧩"
        />
        <LearningModuleCard
          title="Reinforcement Learning"
          description="Learn through environment interaction."
          href="/reinforcement-learning"
          icon="🤖"
        />
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Visualizing Machine Learning
        </h2>
        <MLDiagram />
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Explore Further</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Glossary</CardTitle>
              <CardDescription>
                Understand common machine learning terms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/glossary">Visit Glossary</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

const LearningModuleCard = ({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {icon} {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link href={href}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const MLDiagram = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-lg font-semibold mr-2">Machine Learning</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      <div className="flex mt-4">
        <Card className="w-64 mr-4">
          <CardHeader>
            <CardTitle>Supervised Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Learning from labeled data.</p>
          </CardContent>
        </Card>
        <Card className="w-64 mr-4">
          <CardHeader>
            <CardTitle>Unsupervised Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Discovering patterns in unlabeled data.</p>
          </CardContent>
        </Card>
        <Card className="w-64">
          <CardHeader>
            <CardTitle>Reinforcement Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Learning through interaction and rewards.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
