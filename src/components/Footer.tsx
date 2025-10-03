import { type FC } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TelegramIcon } from "./TelegramIcon";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-gray-500 mt-20">
      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-blue-700 mb-4">About Me</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            I’m Tommy — a Software Engineering student and developer who thrives
            in crafting dark, minimal, and modern digital experiences that blend
            clean design with functionality.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold text-blue-700 mb-4">Explore</h2>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-blue-700 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-blue-700 transition-colors">About</a></li>
            <li><a href="/projects" className="hover:text-blue-700 transition-colors">Projects</a></li>
            <li><a href="/contact" className="hover:text-blue-700 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Socials & Contact */}
        <div>
          <h2 className="text-lg font-semibold text-blue-700 mb-4">Connect</h2>
          <div className="flex gap-6 mb-4 text-xl text-gray-600">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
            >
              <TelegramIcon />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
            >
              <FaFacebook />
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            Email:{" "}
            <a href="mailto:your@email.com" className="hover:text-blue-700">
              Tomasmelesse413@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900 mt-12 py-6 text-center text-gray-700 text-xs tracking-wide">
        © {new Date().getFullYear()} Tomas Melesse - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
