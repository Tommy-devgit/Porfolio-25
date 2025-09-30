// src/components/Navbar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Twitter,
  X,
} from "lucide-react";
import { TelegramIcon } from "./TelegramIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="w-[90%] max-w-6xl bg-black border border-gray-900 rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">Tommy</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-400 font-medium">
          <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
        </ul>

        {/* Socials (Desktop) */}
        <div className="hidden md:flex gap-4 text-gray-500">
          <a href="https://github.com/Tommy-devgit" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/tomasmelesse/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:tomasmelesse413@gmail.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Mail size={20} /></a>
          <a href="https://www.instagram.com/tomas__melesse/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Instagram size={20} /></a>
          <a href="https://x.com/tomas_melesse" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
          <a href="https://t.me/shumpulp" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><TelegramIcon size={20} /></a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-blue-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 w-[90%] max-w-6xl bg-black border border-gray-900 rounded-xl px-6 py-6 flex flex-col gap-6 shadow-lg md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-blue-600 transition-colors">About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-blue-600 transition-colors">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-blue-600 transition-colors">Contact</Link>
          
          {/* Socials (Mobile) */}
          <div className="flex gap-5 pt-2 text-gray-500">
            <a href="https://github.com/Tommy-devgit" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/tomasmelesse/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:tomasmelesse413@gmail.com" className="hover:text-blue-600 transition-colors"><Mail size={20} /></a>
            <a href="https://www.instagram.com/tomas__melesse/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Instagram size={20} /></a>
            <a href="https://x.com/tomas_melesse" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
            <a href="https://t.me/shumpulp" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><TelegramIcon size={20} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
