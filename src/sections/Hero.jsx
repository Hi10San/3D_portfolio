import { useEffect, useState } from "react";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../components/Loader";

// Lazy load Spline (important for performance)
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    // small delay for smoother load
    setTimeout(() => setLoadSpline(true), 300);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const scene = isMobile
    ? "https://prod.spline.design/Tkyjnb47HT09zBeQ/scene.splinecode"
    : "https://prod.spline.design/4qkyCaJdjrewNVBZ/scene.splinecode";

  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden">
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={<Loader />}>
          {loadSpline && <Spline scene={scene} />}
        </Suspense>
      </figure>
    </section>
  );
};

export default Hero;