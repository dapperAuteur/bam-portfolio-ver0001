import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-page-background text-page-text">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">My Blog & Articles</h1>
      <p className="text-lg text-center text-page-text mb-12">
        Here you&apos;ll find tutorials, technical deep dives, and reflections on my projects and technology, especially focusing on AI, Cybersecurity, and developer best practices.
      </p>

      <div className="mt-12 space-y-8">
        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/diaphragmatic-breathing"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              The Power of Breath: Diaphragmatic Breathing Infographic
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            An interactive guide exploring the mechanics and benefits of diaphragmatic breathing, enhanced with dynamic visualizations and AI-driven insights from the Gemini API.
          </p>
          <Link href="/blog/diaphragmatic-breathing" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>

        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/diaphragmatic-breathing-ai"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              The Power of Breath: Diaphragmatic Breathing Infographic (with AI Features)
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            An interactive guide exploring the mechanics and benefits of diaphragmatic breathing, enhanced with dynamic visualizations and AI-driven insights from the Gemini API.
          </p>
          <Link href="/blog/diaphragmatic-breathing-ai" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>
      </div>
    </div>
  );
}