import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-DEFAULT text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {currentYear} BAM DevRel Portfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://github.com/dapperAuteur" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-200">
              <FaGithub size={24} />
          </Link>
          <Link href="http://www.linkedin.com/in/brandanthonymcdonald" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-200">
              <FaLinkedin size={24} />
          </Link>
          <Link href="https://www.tiktok.com/@thetodayilearnedshow" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-200">
              <FaTiktok size={24} />
          </Link>
          <Link href="https://www.youtube.com/user/StrategicOptimizer" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-200">
              <FaYoutube size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}