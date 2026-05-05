import Card from "../components/Card.jsx";
import { useRef } from "react";
import { Globe } from "../components/Globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import { Frameworks } from "../components/Frameworks.jsx";
import { motion, useInView } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

function AnimatedGrid({ children, variants, delay = 0, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const About = () => {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing bg-black">
      <motion.h2
        className="text-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        About Me
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <AnimatedGrid variants={fadeLeft} delay={0} className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt=""
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, i'm Hiten</p>
            <p className="subtext">
              I'm a developer focused on building practical and user-friendly web systems. I combine
              problem-solving with modern UI design to create clean, efficient digital experiences.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </AnimatedGrid>

        {/* Grid 2 */}
        <AnimatedGrid variants={fadeUp} delay={0.1} className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text 5xl text-gray-500">CODE IS CRAFT</p>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="JAVA" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="React" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "20%" }} text="JavaScript" containerRef={grid2Container} />
            <Card style={{ rotate: "-60deg", top: "50%", left: "70%" }} text="TailWind" containerRef={grid2Container} />
            <Card style={{ rotate: "-20deg", top: "80%", left: "10%" }} text="Node.js" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "90%", left: "50%" }} image="assets/logos/csharp-pink.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "80%", left: "25%" }} image="assets/logos/dotnet-pink.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/blazor-pink.png" containerRef={grid2Container} />
          </div>
        </AnimatedGrid>

        {/* Grid 3 */}
        <AnimatedGrid variants={fadeRight} delay={0.1} className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I'm based in mars and open to remote work worldwide</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </AnimatedGrid>

        {/* Grid 4 */}
        <AnimatedGrid variants={scaleIn} delay={0.15} className="grid-black-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Do you want to start a project together?</p>
            <CopyEmailButton />
          </div>
        </AnimatedGrid>

        {/* Grid 5 */}
        <AnimatedGrid variants={fadeUp} delay={0.2} className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a varienty of languages, frameworks, and tools that allow me to build robust and scalable
              applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </AnimatedGrid>
      </div>
    </section>
  );
};

export default About;