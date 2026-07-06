import { useState, useRef } from "react";
import { myProjects } from "../constants";
import Project from "../components/Project";
import { motion, useMotionValue, useSpring, useInView } from "motion/react";

function AnimatedProject({ project, index, setPreview }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-8% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Project key={project.id} {...project} setPreview={setPreview} />
    </motion.div>
  );
}

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section id="projects" onMouseMove={handleMouseMove} className="relative c-space section-spacing">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold font-montserrat tracking-tight text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        My Selected Projects
      </motion.h2>

      <motion.div
        className="bg-gradient-to-r from-transparent via-neutral-600/40 to-transparent mt-12 h-[1px] w-full"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
      />

      {myProjects.map((project, index) => (
        <AnimatedProject key={project.id} project={project} index={index} setPreview={setPreview} />
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;