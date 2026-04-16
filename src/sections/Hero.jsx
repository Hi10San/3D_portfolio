import Spline from '@splinetool/react-spline';
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden">
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={<Loader />}>
          <Spline scene="https://prod.spline.design/4qkyCaJdjrewNVBZ/scene.splinecode" />
        </Suspense>
      </figure>
    </section>
  );
};

export default Hero;