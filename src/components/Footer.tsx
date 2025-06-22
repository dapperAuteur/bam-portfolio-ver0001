import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-DEFAULT text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {currentYear} BAM DevRel Portfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://i.til.show/dapperauteur-github" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-200">
              <FaGithub size={24} />
          </Link>
          <Link href="https://l.awews.com/brand-am-linkedin" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-200">
              <FaLinkedin size={24} />
          </Link>
          <Link href="https://i.til.show/tilshow-tiktok" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-200">
              <FaTiktok size={24} />
          </Link>
          <Link href="https://i.brandanthonymcdonald.com/bam-youtube" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-200">
              <FaYoutube size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}