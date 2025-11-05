'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              EK
            </div>
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
              Ethan Knorring
            </h1>
            <p className="text-xl sm:text-2xl text-purple-300 mb-4">
              Computer Science Student & Full-Stack Developer
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Building accessible, high-performance web applications with modern technologies.
              Specializing in Next.js, TypeScript, and full-stack development.
            </p>
            
            {/* Contact Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/EKnorring14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/ethan-knorring"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:eknorring@wpi.edu"
                className="text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-purple-500/20">
                <GraduationCap className="mx-auto mb-2 text-purple-400" size={32} />
                <div className="text-2xl font-bold text-white">2026</div>
                <div className="text-gray-400">BS Computer Science</div>
                <div className="text-sm text-gray-500">WPI</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-purple-500/20">
                <Code className="mx-auto mb-2 text-purple-400" size={32} />
                <div className="text-2xl font-bold text-white">8+</div>
                <div className="text-gray-400">Technologies</div>
                <div className="text-sm text-gray-500">Languages & Frameworks</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-purple-500/20">
                <Briefcase className="mx-auto mb-2 text-purple-400" size={32} />
                <div className="text-2xl font-bold text-white">Multiple</div>
                <div className="text-gray-400">Internships</div>
                <div className="text-sm text-gray-500">Global & Domestic</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('experience')}
            className="text-purple-400 hover:text-purple-300 transition-colors animate-bounce"
            aria-label="Scroll to experience section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'JavaScript', 'Java', 'C/C++', 'Python', 'R', 'SQL', 'HTML/CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'FastAPI', 'GraphQL', 'Apollo Client', 'Git', 'BeautifulSoup'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {['Algorithms', 'Data Structures', 'OOP', 'REST APIs', 'WCAG', 'Agile'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Work Experience</h2>
          
          <div className="space-y-8">
            {/* Global Partners */}
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Intern</h3>
                  <p className="text-purple-400">Global Partners</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0">
                  <p>Dedham, MA</p>
                  <p>June 2024 – August 2025</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">▹</span>
                  <span>Designed PropFuel Insights, a full-stack market simulator with Next.js/TypeScript frontend and FastAPI backend supporting proprietary fuel brand rollout strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">▹</span>
                  <span>Built AI-powered sentiment analysis system with interactive Recharts dashboards for location-based competitive analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">▹</span>
                  <span>Automated system provisioning via Windows Batch scripting and Active Directory; presented to senior leadership in Agile sprints</span>
                </li>
              </ul>
            </div>

            {/* Accessible Limitless Living */}
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Website Developer</h3>
                  <p className="text-purple-400">Accessible Limitless Living</p>
                  <a 
                    href="https://all.org.gr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-purple-400 inline-flex items-center gap-1"
                  >
                    all.org.gr <ExternalLink size={14} />
                  </a>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0">
                  <p>Thessaloniki, Greece</p>
                  <p>March – May 2025</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">▹</span>
                  <span>Co-led 7-week international nonprofit web development project using Next.js, TypeScript, and Headless WordPress via GraphQL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">▹</span>
                  <span>Achieved WCAG 2.1 AAA compliance with adjustable fonts, dyslexia mode, text-to-speech, and focus tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">▹</span>
                  <span>Engineered scalable architecture with reusable components and optimized SEO/performance for accessibility and search visibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Academic Assignment Optimizer */}
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all group">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Academic Assignment Optimizer & Validator
              </h3>
              <p className="text-gray-400 mb-4 text-sm">Algorithm & UI Lead</p>
              <p className="text-gray-300 mb-4">
                Assignment system used by WPI to automate TA/PLA/GLA assignments using backtracking search and constraint satisfaction with guided debugging and interactive UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">Algorithms</span>
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">Constraint Satisfaction</span>
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">Database Design</span>
              </div>
              <a
                href="https://student-solver-tool.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>

            {/* Security Tools */}
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all group">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Security & Automation Tools
              </h3>
              <p className="text-gray-300 mb-4">
                Educational keylogger demonstrating input capture techniques, password analyzer evaluating entropy/vulnerabilities, and web scraper for automated data extraction.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">Java</span>
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">Python</span>
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">BeautifulSoup</span>
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">Security</span>
              </div>
            </div>

            {/* Red Sox Trivia */}
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all group">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Red Sox Archive Trivia Game
              </h3>
              <p className="text-gray-300 mb-4">
                Interactive browser-based trivia game using vanilla JavaScript with real-time validation and roster challenge mode.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">JavaScript</span>
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">Game Development</span>
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">DOM Manipulation</span>
              </div>
            </div>

            {/* All.org.gr Project */}
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all group">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Accessible Limitless Living Website
              </h3>
              <p className="text-gray-300 mb-4">
                WCAG 2.1 AAA compliant nonprofit website with Next.js, TypeScript, and Headless WordPress featuring advanced accessibility tools.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">GraphQL</span>
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">WCAG AAA</span>
              </div>
              <a
                href="https://all.org.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                View Live Site <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:eknorring@wpi.edu"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="https://github.com/EKnorring14"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-purple-500 hover:bg-purple-500/10 text-purple-400 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>
          
          <div className="mt-12 text-gray-400">
            <p className="mb-2">Worcester, MA | (508) 768-7318</p>
            <p className="text-sm">Expected Graduation: May 2026</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 bg-slate-900/80">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-2">Designed & Built by Ethan Knorring</p>
          <p className="text-sm">© 2025 Ethan Knorring. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}