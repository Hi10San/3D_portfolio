import Spline from "@splinetool/react-spline";
import Loader from "../components/Loader";
import { Suspense, useEffect, useState } from "react";

const Hero = () => {
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadSpline(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden">
      <figure className="absolute inset-0 w-screen h-screen">
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