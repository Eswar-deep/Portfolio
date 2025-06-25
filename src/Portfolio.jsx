// src/Portfolio.jsx
import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Helmet } from "react-helmet";

export default function Portfolio() {
  const [expandedExperience, setExpandedExperience] = useState(null);

  // Helper for tag colors
  const tagColors = [
    'bg-[#f3e8ff] text-[#4b2995]', // soft purple
    'bg-[#e0f2fe] text-[#0e7490]', // soft blue
    'bg-[#fef9c3] text-[#a16207]', // soft yellow
    'bg-[#e0ffe0] text-[#166534]', // soft green
  ];

  const projects = [
    {
      title: "Job Alert Bot",
      description: "A Telegram bot that scrapes and notifies of real-time job postings using custom filters, scheduled with GitHub Actions. It includes NoSQL caching to prevent duplicate alerts.",
      github: "https://github.com/Eswar-deep/job-alert",
      technologies: ["Python", "Playwright", "Telegram API", "NoSQL"],
    },
    {
      title: "Integbot – AI-Powered Chatbot",
      description: "Won Zluri's Gen-AI Hackathon against 50+ teams by developing an AI chatbot with multi-system integration capabilities.",
      github: "https://github.com/Eswar-deep/integbot",
      technologies: ["Python", "ChromaDB", "Langchain", "JavaScript"]
    },
    {
      title: "Order Finder – Serverless Real-Time Tracking System",
      description: "Enabled 100+ concurrent users to track real-time order statuses by migrating to a serverless architecture with AWS Lambda, DynamoDB, and API Gateway.",
      github: "https://github.com/Eswar-deep/order_finder",
      technologies: ["Golang", "AWS Lambda", "DynamoDB", "API Gateway"]
    },
    {
      title: "Concurrent Threads Simulation",
      description: "Developed a multi-threaded simulation handling 50+ threads with mutexes and semaphores for synchronization and deadlock prevention. Designed a priority queue for student request management, optimizing resource allocation and reducing wait times.",
      github: "https://github.com/Eswar-deep/Concurrent-Threads",
      technologies: ["C", "Linux", "pthreads"]
    }
  ];

  return (
    <div className="bg-background text-text font-sans min-h-screen px-6">
      <Helmet>
        <title>Eswardeep Pujala - Portfolio</title>
        <link rel="icon" href="/favicon-16x16.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
        <style>
          {`
            html { scroll-behavior: smooth; }
            h1, h2, h3, h4, h5, h6, nav, .navbar-text {
              font-family: 'Inter', system-ui, sans-serif;
            }
            .photo-container {
              position: relative;
              display: inline-block;
            }
          `}
        </style>
      </Helmet>

      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 sticky top-0 z-10 bg-background border-b border-gray-200">
        <a href="#" className="text-text font-bold text-xl hover:text-accent transition navbar-text">
          Eswardeep Pujala
        </a>
        <div className="flex gap-6">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-accent transition navbar-text"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center">
          <div className="photo-container">
            <img
              src="/photo.jpg"
              alt="Eswardeep Pujala"
              className="w-48 h-48 object-cover rounded-full border-2 border-accent/20 bg-gray-100"
            />
          </div>
          <div className="mt-4 flex gap-6 text-accent">
            <a href="mailto:eswardeeppujala@gmail.com" target="_blank" rel="noopener noreferrer">
              <EnvelopeIcon className="w-6 h-6 hover:text-accent" />
            </a>
            <a href="https://linkedin.com/in/p-eswar-deep" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 hover:text-accent fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.02 8h5v16h-5V8zm7.98 0h4.78v2.3h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.36c0-1.76-.03-4.02-2.45-4.02-2.46 0-2.84 1.91-2.84 3.89V24h-5V8z"/>
              </svg>
            </a>
            <a href="https://github.com/Eswar-deep" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 hover:text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="public/Eswardeep_Pujala_resume.pdf" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 hover:text-accent fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 11h8v1H8v-1zm0 2h8v1H8v-1zm0 2h8v1H8v-1z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-text mb-4">
             <span className="text-accent">Hi, I'm Eswardeep Pujala!</span>
          </h1>
          <p className="text-lg mb-4 text-text">
            I'm a Master's student at the University of Texas at Dallas, majoring in Computer Science with a focus on Machine Learning. I completed my B.E. (Hons.) in Electronics and Communication Engineering from BITS Pilani, Goa.
          </p>
          <p className="text-lg mb-4 text-text">
            I'm passionate about building tech that solves everyday problems—starting small, then scaling it to help others. From full-stack development to cloud-native backend systems, I enjoy turning ideas into high-impact, data-driven products. I like working at the intersection of software engineering, automation, and real-world utility.
          </p>
          <p className="text-lg mb-4 text-text">
            Outside of tech, I'm a sports enthusiast who loves playing all kinds of sports. I'm also a street-food explorer and a movie buff always open to great recommendations.
          </p>
        </div>
      </section>
      <section id="experience" className="max-w-5xl mx-auto py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-8 text-text tracking-wider uppercase">
          Experience
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-[#64ffda]"></div>
          {[
            {
              title: "Full-stack Engineering Intern",
              company: "Zluri",
              date: "Jul 2023 – Dec 2023",
              description: "Optimized database queries, caching strategies, and backend structures, improving overall backend performance by 30% and reducing API response times by 2 seconds under heavy load. Developed a data pipeline to migrate data from MongoDB to PostgreSQL using cron jobs, ensuring 100% data consistency and improved scalability. Collaborated with cross-functional teams in an Agile environment.",
              technologies: ["Express.js", "React.js", "Node.js", "PostgreSQL", "MongoDB", "JavaScript", "REST APIs", "Docker", "SQL"]
            },
            {
              title: "Software Development Intern",
              company: "Yashodha Hospital",
              date: "Jun 2022 – Aug 2022",
              description: "Developed a cross-platform mobile app to monitor doctor hand hygiene compliance. Implemented automated alerts for hospitals when compliance scores drop below thresholds.",
              technologies: ["React Native", "JavaScript", "RESTful APIs", "Firebase"]
            }
          ].map((job, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

              {/* Date - Left side on desktop, top on mobile */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} mb-4 md:mb-0`}>
                <div className="ml-12 md:ml-0">
                  <span className="text-[#64ffda] font-bold text-lg">{job.date}</span>
                </div>
              </div>

              {/* Content - Right side on desktop, below date on mobile */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="ml-12 md:ml-0">
                  <div className="bg-background p-6 rounded-lg">
                    <h3 className="text-xl text-text font-bold mb-1">{job.title}</h3>
                    <p className="text-[#64ffda] font-semibold mb-3">{job.company}</p>
                    <p className="text-text mb-4 leading-relaxed">
                      {job.description.length > 150 && expandedExperience !== index
                        ? `${job.description.substring(0, 150)}...`
                        : job.description}
                    </p>
                    {job.description.length > 150 && (
                      <button
                        onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                        className="text-accent font-semibold hover:underline mb-4"
                      >
                        {expandedExperience === index ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`text-xs px-3 py-1 rounded-full font-semibold mr-2 mb-2 ${tagColors[techIndex % tagColors.length]}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section with Hover Effect */}
      <section id="projects" className="max-w-5xl mx-auto py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-text tracking-wider uppercase">
          Projects
        </h2>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg border border-gray-200/50 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl text-text font-bold">
                  {project.title}
                </h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
              <p className="text-text/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`text-xs px-2 py-1 rounded font-semibold mr-2 mb-2 ${tagColors[techIndex % tagColors.length]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-text tracking-wider uppercase">
          Let's get in touch! 👀
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <a
              href="mailto:eswardeeppujala@gmail.com"
              className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors duration-300 text-center"
            >
              Say Hello
            </a>
            <a
              href="https://linkedin.com/in/p-eswar-deep"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-colors duration-300 text-center"
            >
              Connect on LinkedIn
            </a>
          </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-200 mt-12">
        <p className="text-gray-400 text-sm">
          Made with <span className="text-accent">♥</span> by Eswardeep Pujala
        </p>
      </footer>
    </div>
  );
}