import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-page-background text-page-text">
      <h1 className="text-5xl font-bold text-center text-primary mb-4">Welcome to the BAM DevRel Portfolio</h1>
      <p className="mt-4 text-xl text-center text-page-text">Building bridges between technology and people, with a focus on AI & Cybersecurity.</p>
      <div className="mt-8">
        <Link href="/projects" className="inline-block bg-accent text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300">
            Explore My Projects
        </Link>
      </div>
    </main>
  );
}