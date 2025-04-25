import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          ML Navigator
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/supervised-learning">Supervised Learning</Link>
          <Link href="/unsupervised-learning">Unsupervised Learning</Link>
          <Link href="/reinforcement-learning">Reinforcement Learning</Link>
          <Link href="/glossary">Glossary</Link>
        </div>
      </div>
    </nav>
  );
};
