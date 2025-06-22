import { FaGithub, FaLinkedin, FaEnvelope, FaTiktok, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-page-background text-page-text">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Get in Touch</h1>
      <div className="max-w-2xl mx-auto text-lg text-page-text text-center space-y-6">
        <p className='text-page-text'>
          I&apos;m always open to discussing new opportunities, collaborations, or simply connecting with fellow developers. Feel free to reach out through any of the channels below:
        </p>
        <div className="flex justify-center space-x-8 mt-8">
          <Link href="mailto:a@awews.com" className="flex flex-col items-center text-primary hover:text-primary-dark transition-colors duration-200">
              <FaEnvelope size={40} />
              <span className="mt-2 text-base">Email</span>
          </Link>
          <Link href="https://l.awews.com/brand-am-linkedin" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-primary hover:text-primary-dark transition-colors duration-200">
              <FaLinkedin size={40} />
              <span className="mt-2 text-base">LinkedIn</span>
          </Link>
          <Link href="https://i.til.show/dapperauteur-github" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-primary hover:text-primary-dark transition-colors duration-200">
              <FaGithub size={40} />
              <span className="mt-2 text-base">GitHub</span>
          </Link>
          <Link href="https://i.til.show/tilshow-tiktok" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-primary hover:text-primary-dark transition-colors duration-200">
              <FaTiktok size={40} />
              <span className="mt-2 text-base">TikTok</span>
          </Link>
          <Link href="https://i.brandanthonymcdonald.com/bam-youtube" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-primary hover:text-primary-dark transition-colors duration-200">
              <FaYoutube size={40} />
              <span className="mt-2 text-base">YouTube</span>
          </Link>
        </div>
        <p className="mt-8 text-page-text">
          Looking forward to connecting!
        </p>
      </div>
    </div>
  );
}