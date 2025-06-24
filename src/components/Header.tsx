import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-primary-dark text-black p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-primary-light transition-colors duration-200">
            DevRel Portfolio
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/projects" className="hover:text-primary-light transition-colors duration-200 text-lg">
                Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-primary-light transition-colors duration-200 text-lg">
                Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary-light transition-colors duration-200 text-lg">
                About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary-light transition-colors duration-200 text-lg">
                Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}