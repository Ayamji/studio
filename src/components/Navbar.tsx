import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-secondary text-foreground py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          ML Navigator
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/supervised-learning" className="hover:text-primary">Supervised Learning</Link>
          <Link href="/unsupervised-learning" className="hover:text-primary">Unsupervised Learning</Link>
          <Link href="/reinforcement-learning" className="hover:text-primary">Reinforcement Learning</Link>
          <Link href="/glossary" className="hover:text-primary">Glossary</Link>
        </div>
      </div>
    </nav>
  );
};
