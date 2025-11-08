'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, GraduationCap, ArrowRight, Download } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">EK</span>
              </div>
              <div className="text-xl font-semibold text-slate-900">
                Ethan Knorring
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section.toLowerCase()
                      ? 'text-red-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {section}
                </button>
              ))}
              <a
                href="mailto:eknorring@wpi.edu"
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium mb-6">
                Available for Opportunities
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Full-Stack Developer & CS Student
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                I build accessible, high-performance web applications with modern technologies. 
                Currently pursuing Computer Science at WPI with hands-on experience in Next.js, TypeScript, and full-stack development.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:eknorring@wpi.edu"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Mail size={18} />
                  Contact Me
                </a>
                <a
                  href="https://github.com/EKnorring14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Github size={18} />
                  View GitHub
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-2xl text-white">
                <GraduationCap className="mb-4" size={32} />
                <div className="text-3xl font-bold mb-2">May 2026</div>
                <div className="text-red-100">Expected Graduation</div>
                <div className="text-sm text-red-200 mt-1">Worcester Polytechnic Institute</div>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-2xl text-white">
                <Code className="mb-4" size={32} />
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-red-100">Languages</div>
                <div className="text-sm text-red-200 mt-1">TypeScript, Java, Python & More</div>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-2xl text-white">
                <Briefcase className="mb-4" size={32} />
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-red-100">Internships</div>
                <div className="text-sm text-red-200 mt-1">Domestic & International</div>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Github size={28} />
                  <Linkedin size={28} />
                </div>
                <div className="text-sm text-red-100 mb-3">Connect with me</div>
                <div className="flex flex-col gap-2">
                  <a href="https://github.com/EKnorring14" target="_blank" rel="noopener noreferrer" className="text-sm text-red-200 hover:text-white transition-colors">
                    GitHub →
                  </a>
                  <a href="https://www.linkedin.com/in/ethan-knorring-327a9224b/" target="_blank" rel="noopener noreferrer" className="text-sm text-red-200 hover:text-white transition-colors">
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proficient in modern web technologies and frameworks with a focus on performance and accessibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Code className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'JavaScript', 'Java', 'C/C++', 'Python', 'R', 'SQL', 'HTML/CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'FastAPI', 'GraphQL', 'Apollo Client', 'Git', 'BeautifulSoup'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {['Algorithms', 'Data Structures', 'OOP', 'REST APIs', 'WCAG', 'Agile'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-lg text-slate-600">
              Building real-world solutions with cutting-edge technologies
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Global Partners */}
            <div className="relative pl-8 border-l-2 border-red-600">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-red-600 rounded-full"></div>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Software Engineering Intern</h3>
                    <p className="text-red-600 font-semibold text-lg mb-2">Global Partners</p>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                      <span>📍 Dedham, MA</span>
                      <span>•</span>
                      <span>📅 June 2024 – August 2025</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Designed <strong>PropFuel Insights</strong>, a full-stack market simulator with Next.js/TypeScript frontend and FastAPI backend supporting proprietary fuel brand rollout strategy</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Built AI-powered sentiment analysis system with interactive Recharts dashboards for location-based competitive analysis</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Automated system provisioning via Windows Batch scripting and Active Directory; presented to senior leadership in Agile sprints</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Accessible Limitless Living */}
            <div className="relative pl-8 border-l-2 border-red-600">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-red-600 rounded-full"></div>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Website Developer</h3>
                    <p className="text-red-600 font-semibold text-lg mb-2">Accessible Limitless Living</p>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-600 items-center">
                      <span>📍 Thessaloniki, Greece</span>
                      <span>•</span>
                      <span>📅 March – May 2025</span>
                      <span>•</span>
                      <a 
                        href="https://all.org.gr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 inline-flex items-center gap-1 font-medium"
                      >
                        View Site <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Co-led 7-week international nonprofit web development project using Next.js, TypeScript, and Headless WordPress via GraphQL</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Achieved <strong>WCAG 2.1 AAA compliance</strong> with adjustable fonts, dyslexia mode, text-to-speech, and focus tools</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">Engineered scalable architecture with reusable components and optimized SEO/performance for accessibility and search visibility</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Practical applications showcasing technical skills and problem-solving abilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Academic Assignment Optimizer */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-red-300 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Code className="text-red-600" size={24} />
                </div>
                <a
                  href="https://student-solver-tool.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-red-600 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                Academic Assignment Optimizer
              </h3>
              <p className="text-sm text-red-600 font-medium mb-3">Algorithm & UI Lead</p>
              <p className="text-slate-600 mb-6">
                Assignment system used by WPI to automate TA/PLA/GLA assignments using backtracking search and constraint satisfaction with guided debugging and interactive UI.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">Algorithms</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">Constraint Satisfaction</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">Database Design</span>
              </div>
            </div>

            {/* All.org.gr Project */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-red-300 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-red-600" size={24} />
                </div>
                <a
                  href="https://all.org.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-red-600 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                Accessible Limitless Living Website
              </h3>
              <p className="text-sm text-red-600 font-medium mb-3">International Nonprofit Project</p>
              <p className="text-slate-600 mb-6">
                WCAG 2.1 AAA compliant nonprofit website with Next.js, TypeScript, and Headless WordPress featuring advanced accessibility tools including dyslexia mode and text-to-speech.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">Next.js</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">GraphQL</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">WCAG AAA</span>
              </div>
            </div>

            {/* Security Tools */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-red-300 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Briefcase className="text-red-600" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                Security & Automation Tools
              </h3>
              <p className="text-sm text-red-600 font-medium mb-3">Educational Security Suite</p>
              <p className="text-slate-600 mb-6">
                Educational keylogger demonstrating input capture techniques, password analyzer evaluating entropy and vulnerabilities, and web scraper for automated data extraction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">Java</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">Python</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">BeautifulSoup</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">Security</span>
              </div>
            </div>

            {/* Red Sox Trivia */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-red-300 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Code className="text-red-600" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                Red Sox Archive Trivia Game
              </h3>
              <p className="text-sm text-red-600 font-medium mb-3">Interactive Web Application</p>
              <p className="text-slate-600 mb-6">
                Interactive browser-based trivia game using vanilla JavaScript with real-time validation and roster challenge mode featuring historical Red Sox data.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">JavaScript</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">Game Development</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">DOM Manipulation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm actively seeking new opportunities and exciting projects. Whether you have a question, 
            want to discuss a potential collaboration, or just want to connect, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:eknorring@wpi.edu"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Me an Email
            </a>
            <a
              href="https://github.com/EKnorring14"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Github size={20} />
              View My Work
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>eknorring@wpi.edu</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <span>📍 Worcester, MA</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <span>📞 (508) 768-7318</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-6">Expected Graduation: May 2026</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EK</span>
              </div>
              <span className="text-slate-400 text-sm">© 2025 Ethan Knorring</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/EKnorring14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ethan-knorring-327a9224b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:eknorring@wpi.edu"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}