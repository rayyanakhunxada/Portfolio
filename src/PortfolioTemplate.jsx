import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, ChevronDown } from 'lucide-react';

export const PORTFOLIO_DATA = {
  
  personal: {
    name: "Muhammad Rayyan",
    role: "Frontend Web Developer",
    bio: "I build exceptional and accessible digital experiences for the web. Passionate about React, modern UI, and writing clean, scalable code.",
    location: "Charsadda, Pakistan",
    email: "riyanakhonzada22@gmail.com",
    avatar: "/profile.jpeg" 
  },

  social: {
    github: "https://github.com/rayyanakhunxada",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com" // Add your URL or leave it if you don't use it
  },

  skills: [
    "React", "JavaScript", "HTML5", "CSS", "Tailwind CSS", 
    "Git", "GitHub", "Responsive Design", "UI/UX"
  ],

  projects: [
    {
      title: "MoviesVersee",
      description: "A fully responsive, MoviesVerse homepage interface built entirely with React and Tailwind CSS using API.",
      image: "hero.png",
      tech: ["React", "TailwindCSS", "API", "Lucide Icons"],
      link: "https://movie-verse-zeta-silk.vercel.app/"
    },
    {
      title: "WeatherSPhere",
      description: "A WeatherSPhere homepage interface built entirely with React and CSS Modules using API.",
      image: "weather.png",
      tech: ["React", "Context API", "CSS Modules"],
      link: "https://weather-forecast-cyv3.vercel.app/"
    },
    {
      title: "Luxe Fashion Store",
      description: "A Luxe Premium Fashion Store homepage interface built entirely with React and CSS Modules using API.",
      image: "luxe.avif",
      tech: ["React", "Context API", "CSS Modules"],
      link: "https://e-commerce-website-o5x1.vercel.app/"
    }
    // Add more projects by copying the block above!
  ],

  experience: [
    {
      role: "Frontend Web Developer",
      company: "Freelance",
      period: "2025 - Present",
      description: "Designing and building modern web applications. Focusing on intuitive user interfaces and performant React architectures."
    }
  ]
};

// The Animated Background Blobs 
const BackgroundEffects = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <div className="absolute top-10 -left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
    <div className="absolute top-40 -right-10 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: "4s" }}></div>
  </div>
);

// The Top Section (Hero Banner) with your Name and Photo
const HeroSection = ({ personal, social }) => {
  // This constructs a special link that tells the browser to open Gmail
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`;

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[75vh]">
      
      {/* Text side: Greeting, bio, and buttons */}
      <div className="space-y-6 flex-1 text-center md:text-left z-10">
        <h2 className="text-cyan-400 font-mono text-lg tracking-wide transform translate-y-2 translate-x-1">Hi, My Name is</h2>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-md">
          {personal.name}.
        </h1>
        <h2 className="text-4xl md:text-6xl font-black text-slate-400 tracking-tight drop-shadow-sm">
          I'm a {personal.role}.
        </h2>
        <p className="text-lg text-slate-400 max-w-xl leading-relaxed mx-auto md:mx-0">
          {personal.bio}
        </p>
        
        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-8">
          
          {/* Email Button */}
          <a 
            href={gmailComposeLink} 
            target="_blank" 
            rel="noreferrer" 
            className="px-8 py-4 bg-transparent border border-cyan-400 text-cyan-400 font-mono hover:bg-cyan-400/10 rounded-lg transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1"
          >
            <Mail size={20} /> Get In Touch
          </a>

          {/* Social Icons (GitHub, LinkedIn) */}
          <div className="flex items-center gap-6 px-4">
            <a href={social.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-transform p-2 bg-slate-900/50 rounded-full border border-slate-800 hover:border-slate-500 shadow-xl">
              <Github size={24} />
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-transform p-2 bg-slate-900/50 rounded-full border border-slate-800 hover:border-slate-500 shadow-xl">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Profile Image side */}
      <div className="relative group z-10 mt-10 md:mt-0">
        <div className="absolute -inset-2 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
          <img src={personal.avatar} alt={personal.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
        </div>
      </div>

      {/* Little bouncing arrow at the bottom of the screen */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

//  The Experience List and the Skills Grid
const ExperienceAndSkills = ({ experience, skills }) => (
  <section className="grid lg:grid-cols-5 gap-16 items-start">
    
    {/* Left Column: Work Experience Timeline */}
    <div className="lg:col-span-3 space-y-10">
      <div className="flex items-center gap-3">
        <Briefcase className="text-cyan-400" size={32} />
        <h3 className="text-3xl md:text-4xl font-black text-white">Experience</h3>
        <div className="h-px bg-slate-800 flex-1 ml-4 hidden sm:block"></div>
      </div>
      
      <div className="relative border-l border-slate-700/50 ml-4 space-y-12">
        {experience.map((job, idx) => (
          <div key={idx} className="relative pl-8 group">
            {/* The little circle on the timeline */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-slate-950 bg-slate-600 group-hover:bg-cyan-500 group-hover:scale-125 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
            
            <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors drop-shadow-sm">{job.role}</h4>
            <p className="text-cyan-400/80 font-mono text-sm mt-1 mb-4 flex items-center">
              <span className="font-semibold text-slate-300 mr-2">{job.company}</span> • <span className="ml-2">{job.period}</span>
            </p>
            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{job.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Column: Skills Badges */}
    <div className="lg:col-span-2 space-y-10">
      <div className="flex items-center gap-3">
        <Code className="text-purple-400" size={32} />
        <h3 className="text-3xl md:text-4xl font-black text-white">Skills</h3>
        <div className="h-px bg-slate-800 flex-1 ml-4 hidden sm:block"></div>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <span 
            key={idx} 
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/50 text-slate-300 hover:text-white hover:-translate-y-1 font-mono text-sm shadow-xl rounded-xl transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

// The Grid of Your Best Projects
const ProjectsGallery = ({ projects }) => (
  <section className="space-y-10">
    <div className="flex items-center gap-3">
      <h3 className="text-3xl md:text-4xl font-black text-white">Featured Projects</h3>
      <div className="h-px bg-slate-800 flex-1 ml-4 hidden sm:block"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project, idx) => (
        <a 
          key={idx} 
          href={project.link} 
          className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
        >
          {/* Project Image */}
          <div className="h-56 overflow-hidden relative">
            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-slate-900 to-transparent z-10"></div>
          </div>
          
          {/* Project Details */}
          <div className="p-8 flex-1 flex flex-col relative z-20 bg-slate-900 -mt-6 transform transition-transform border-t border-slate-800/50 rounded-t-3xl shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h4>
              <ExternalLink size={20} className="text-slate-500 group-hover:text-cyan-400 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              {project.description}
            </p>
            
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-900 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

// The Footer / Bottom Contact Area
const Footer = ({ email }) => (
  <footer className="text-center pt-20 pb-10 border-t border-slate-800/50 space-y-6">
    <h2 className="text-white text-2xl font-bold">What's Next?</h2>
    <p className="text-slate-400 max-w-lg mx-auto">
      Ready to collaborate or have an exciting project in mind? My inbox is always open.
    </p>
    <div className="pt-6">
       <a 
         href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} 
         target="_blank" 
         rel="noreferrer" 
         className="px-10 py-5 bg-cyan-500 text-slate-950 font-black rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] inline-block"
       >
         Say Hello
       </a>
    </div>
    <p className="text-slate-600 font-mono text-sm pt-20">
      Built with <span className="text-cyan-500/50">React</span> & <span className="text-purple-500/50">Tailwind</span>
    </p>
  </footer>
);

export default function PortfolioTemplate() {
  // Grab all our data from the top object
  const { personal, social, skills, projects, experience } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      <BackgroundEffects />

      {/* Main Content Container wrapping everything */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        
        {/* Assemble the puzzle pieces! */}
        <HeroSection personal={personal} social={social} />
        
        <div className="space-y-32 mt-32">
          <ExperienceAndSkills experience={experience} skills={skills} />
          <ProjectsGallery projects={projects} />
          <Footer email={personal.email} />
        </div>

      </div>
    </div>
  );
}
