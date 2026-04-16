import { useEffect, useState, Suspense } from "react";
import Loader from "../components/Loader";

// 👇 Lazy import
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    // 👇 Delay loading (you can tweak timing)
    const timer = setTimeout(() => {
      setLoadSpline(true);
    }, 1000); // load after 1 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden">
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        {loadSpline ? (
          <Suspense fallback={<Loader />}>
            <Spline scene="https://prod.spline.design/4qkyCaJdjrewNVBZ/scene.splinecode" />
          </Suspense>
        ) : (
          <Loader />
        )}
      </figure>
    </section>
  );
};

export default Hero;