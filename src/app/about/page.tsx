// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-page-background text-page-text">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">About Me & My DevRel Journey</h1>
      <div className="max-w-3xl mx-auto text-lg text-page-text space-y-6">
        <p>
          Hello! I&apos;m passionate about the intersection of technology, education, and community. My journey in tech has led me to explore fascinating areas like **Artificial Intelligence** and **Cybersecurity**, where I love to build innovative solutions that simplify complex problems.
        </p>
        <p>
          As an aspiring Developer Advocate, I thrive on empowering other developers. This means not only building robust applications but also crafting **clear, easy-to-follow guides**, providing **insightful explanations of technical choices**, and fostering vibrant communities where knowledge is shared freely.
        </p>
        <p>
          My experience with building interactive web applications, often featuring AI integration, has honed my ability to translate technical concepts into engaging experiences. I believe in continuous learning, open-source contributions, and the power of well-crafted documentation to amplify the impact of technology.
        </p>
        <h2 className="text-3xl font-bold text-primary mt-8 mb-4">My DevRel Skills:</h2>
        <ul className="list-disc list-inside space-y-2 text-page-text">
          <li>**Technical Writing & Documentation:** Creating comprehensive and accessible documentation (READMEs, API docs, tutorials) that enables developers to quickly understand and utilize tools.</li>
          <li>**Technical Content Creation:** Producing engaging blog posts, articles, and potentially video scripts that explain complex topics and demonstrate practical applications.</li>
          <li>**Community Engagement:** Actively participating in developer communities, answering questions, and contributing to discussions.</li>
          <li>**Problem Solving & Solution Architecture:** Designing and implementing technical solutions that address real-world problems.</li>
          <li>**Cross-functional Collaboration:** Bridging the gap between engineering, product, and marketing teams.</li>
          <li>**Public Speaking & Presentations (Aspiring):** Eager to share knowledge through talks and workshops.</li>
        </ul>
        <p className="mt-6">
          I&apos;m always looking for exciting opportunities to connect with the developer community and contribute to impactful projects.
        </p>
      </div>
    </div>
  );
}