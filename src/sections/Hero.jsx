import { useEffect, useState, Suspense } from "react";
<<<<<<< HEAD
import Spline from "@splinetool/react-spline";
=======
>>>>>>> fix-lazyload
import Loader from "../components/Loader";

// 👇 Lazy import
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
<<<<<<< HEAD
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

=======
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    // 👇 Delay loading (you can tweak timing)
    const timer = setTimeout(() => {
      setLoadSpline(true);
    }, 1000); // load after 1 sec

    return () => clearTimeout(timer);
  }, []);

>>>>>>> fix-lazyload
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden">
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
<<<<<<< HEAD
        <Suspense fallback={<Loader />}>
          {loadSpline &&
            (isMobile ? (
              <Spline scene={mobileScene} />
            ) : (
              <Spline scene={desktopScene} />
            ))}
        </Suspense>
=======
        {loadSpline ? (
          <Suspense fallback={<Loader />}>
            <Spline scene="https://prod.spline.design/4qkyCaJdjrewNVBZ/scene.splinecode" />
          </Suspense>
        ) : (
          <Loader />
        )}
>>>>>>> fix-lazyload
      </figure>
    </section>
  );
};

export default Hero;