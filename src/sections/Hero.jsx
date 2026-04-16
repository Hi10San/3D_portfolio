import { useEffect, useState, Suspense } from "react";
import Spline from "@splinetool/react-spline";
import Loader from "../components/Loader";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    // Delay loading for smoother performance
    const timer = setTimeout(() => {
      setLoadSpline(true);
    }, 300);

    return () => {
      window.removeEventListener("resize", checkDevice);
      clearTimeout(timer);
    };
  }, []);

  const desktopScene =
    "https://prod.spline.design/4qkyCaJdjrewNVBZ/scene.splinecode";

  const mobileScene =
    "https://prod.spline.design/Tkyjnb47HT09zBeQ/scene.splinecode"; 

  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden">
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={<Loader />}>
          {loadSpline &&
            (isMobile ? (
              <Spline scene={mobileScene} />
            ) : (
              <Spline scene={desktopScene} />
            ))}
        </Suspense>
      </figure>
    </section>
  );
};

export default Hero;