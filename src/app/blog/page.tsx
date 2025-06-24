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
          <Link href="/blog/endocannabinoid-system-curriculum-infographic"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              Endocannabinoid System: More than the Runner&apos;s High
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            Learn how to activate your endocannabinoid system.
          </p>
          <Link href="/blog/endocannabinoid-system-curriculum-infographic" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>
        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/centenarian-athletes-an-interactive-infographic"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              Ageless Wonders: Discover the incredible stories of centenarian athletes who defy the limits of age.
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            Ever wondered what it takes to challenge father time?
          </p>
          <Link href="/blog/centenarian-athletes-an-interactive-infographic" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>
        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/lester-wright-sr-the-man-who-outran-time"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              Lester Wright Sr.: The Man Who Outran Time
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            Lester Wright Sr. is the current title holder of world&apos;s fastest centenarian. Checkout his amazing story.
          </p>
          <Link href="/blog/lester-wright-sr-the-man-who-outran-time" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>
        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/skeptics-guide-to-statistics"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              The Skeptic&apos;s Guide to Statistics: How Data Can Be Misused & What to Look For
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            Misinformation isn&apos;t always about fake data. Often, it&apos;s about presenting real data in a misleading way. Here are the most common traps.
          </p>
          <Link href="/blog/skeptics-guide-to-statistics" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>
        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/making-sense-of-statistics"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              Making Sense of Statistics: A Guide to Understanding & Explaining Data
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            Statistics help us describe data and draw inferences. These are the building blocks.
          </p>
          <Link href="/blog/making-sense-of-statistics" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>
        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/scientific-study-infographic"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              Scientific Study Infographic: An Interactive Guide to Reading & Communicating Science
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            The design of a study determines the strength of its conclusions. Understanding the type is the first step to critical appraisal.
          </p>
          <Link href="/blog/scientific-study-infographic" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>
        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/journey-into-african-spiritual-traditions"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              Unveiling the Myriad Worlds: An Infographic Journey into African Spiritual Traditions
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            They didn&apos;t just survive; they adapted and evolved, blending with other faiths and giving rise to new religions.
          </p>
          <Link href="/blog/journey-into-african-spiritual-traditions" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>
        
        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/sleep-for-active-folk"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              Sleep for Active Folk: Heard something about sleep you&apos;re not sure is true? Type it below and let our AI assistant provide a science-backed insight.
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            Sleep habits are a powerful predictor of your healthspan. Research reveals a clear &quot;U-shaped&quot; curve for all-cause mortality, highlighting a critical sweet spot.
          </p>
          <Link href="/blog/sleep-for-active-folk" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>

        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/sacred-act-of-burning-hair"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              The Sacred Act of Burning Hair: An interactive infographic tracing a profound spiritual practice from its African origins to its enduring presence in the diaspora.
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            Explore & Compare Beliefs: Select a tradition to compare its hair disposal methods and the beliefs behind them. Then, ask our AI assistant for more details.
          </p>
          <Link href="/blog/sacred-act-of-burning-hair" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>
        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/enduring-power-of-hoodoo"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              The Enduring Power of Hoodoo: A spiritual tradition of resistance, resilience, and empowerment.
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            Hoodoo, also known as Rootwork or Conjure, is an African-American spiritual tradition focused on personal empowerment and achieving tangible results in everyday life. It is a system of folk magic, not an organized religion.
          </p>
          <Link href="/blog/enduring-power-of-hoodoo" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>
        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/interactive-indiana-corvid-species-analysis"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              Interactive Indiana Corvid Species Analysis: Comparative Mass Analysis
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            An AI-Enhanced Infographic for Indiana Species
          </p>
          <Link href="/blog/interactive-indiana-corvid-species-analysis" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>
        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/indiana-corvid-species-analysis"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              Indiana Corvid Species Analysis: Comparative Mass Analysis
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            Species Deep Dive enhanced with dynamic visualizations and AI-driven insights from the Gemini API.
          </p>
          <Link href="/blog/indiana-corvid-species-analysis" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
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
        <article className="bg-card-background rounded-xl shadow-lg p-6 border border-card-border">
          <Link href="/blog/nss-natural-short-sleep-ai"> {/* Link to the new page */}
            <h2 className="text-2xl font-semibold text-card-text hover:text-primary transition-colors duration-200">
              The Natural Short Sleeper (NSS): The Genetics of Efficient Sleep
            </h2>
          </Link>
          <p className="text-secondaryText text-sm mt-1">June 17, 2025 | Categories: <span className="inline-block bg-primary-light text-primary text-xs font-medium px-2 py-0.5 rounded-full">Health Tech</span> <span className="inline-block bg-accent text-white text-xs font-medium px-2 py-0.5 rounded-full">AI</span> <span className="inline-block bg-secondaryText text-white text-xs font-medium px-2 py-0.5 rounded-full">Infographic</span></p>
          <p className="text-card-text mt-4">
            A small but significant segment of the population, known as **Natural Short Sleepers (NSS)**, thrive on 4-6.5 hours of sleep per night without ill effects. This unique trait points to a highly efficient biological system for sleep restoration.
          </p>
          <Link href="/blog/nss-natural-short-sleep-ai" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200">
              Read More &rarr;
          </Link>
        </article>
      </div>
    </div>
  );
}