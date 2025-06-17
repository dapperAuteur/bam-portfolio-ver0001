// app/projects/page.tsx
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    // Ensure the outer div uses page background and page text colors
    <div className="container mx-auto px-4 py-12 bg-page-background text-page-text">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">My Projects</h1>
      <p className="text-lg text-center text-page-text mb-12">
        This section showcases my work in AI, Cybersecurity, and interactive web development, demonstrating my technical versatility and problem-solving skills.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder Project Card 1 */}
        {/* Apply new card background and text colors */}
        <div className="bg-card-background rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-card-border">
          <h3 className="text-2xl font-semibold text-card-text">Project Alpha (Placeholder)</h3>
          <p className="text-secondaryText mt-2 line-clamp-3">A brief description of Project Alpha, highlighting its AI integration and innovative approach to data visualization.</p> {/* Updated description text */}
          <div className="mt-4 flex flex-wrap gap-2">
        {/* Consider changing text-primary to text-primary-dark for better contrast on bg-primary-light */}
        <span className="inline-block bg-primary-light text-primary-dark text-xs font-medium px-3 py-1 rounded-full">AI</span>
            <span className="inline-block bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">Web Dev</span>
        <span className="inline-block bg-secondaryText text-page-background text-xs font-medium px-3 py-1 rounded-full">Data Viz</span> {/* Ensure contrast for secondaryText as background */}
          </div>
          <Link href="#" className="mt-6 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Learn More &rarr;
          </Link>
        </div>

        {/* ... (Apply similar updates to other cards and other pages) ... */}
      </div>
    </div>
  );
}