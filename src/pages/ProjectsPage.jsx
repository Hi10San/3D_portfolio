import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatedFolder } from "../components/ui/3d-folder";
import { projectCategories } from "../constants";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../sections/Navbar";

const AnimatedCounter = ({ value, duration = 1200, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end) || end === 0) return;
    
    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};

const ProjectsPage = () => {
  const totalCategories = projectCategories.length;
  const totalProjects = projectCategories.reduce((acc, cat) => acc + cat.projects.length, 0);

  return (
    <div className="min-h-screen bg-[#000000] text-foreground font-syne relative overflow-hidden">
      <Navbar />

      {/* Decorative Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Page Content */}
      <div className="max-w-7xl mx-auto pt-32 pb-32 px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Sticky Title & Description */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-montserrat leading-none">
                Selected Work
              </h1>
              <p className="text-neutral-400 text-base md:text-lg font-montserrat leading-relaxed">
                Explore my work organized by category. Hover over folders to interact and preview projects, and click to view full details.
              </p>
              
              {/* Info Stats */}
              <div className="pt-6 border-t border-white/5 flex gap-8">
                <div>
                  <p className="text-3xl font-extrabold text-white font-montserrat">
                    <AnimatedCounter value={totalCategories} />
                  </p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-montserrat">Categories</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white font-montserrat">
                    <AnimatedCounter value={totalProjects} />
                  </p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-montserrat">Total Projects</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Grid of Folders */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 justify-items-center">
              {projectCategories.map((folder, index) => (
                <motion.div
                  key={folder.title}
                  className="w-full"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <AnimatedFolder
                    title={folder.title}
                    projects={folder.projects}
                    className="w-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
