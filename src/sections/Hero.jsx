import Spline from '@splinetool/react-spline';
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  return (
    <section className="min-h-screen min-w-screen overflow-hidden">
      <Suspense fallback={<Loader />}>
        <Spline scene="https://prod.spline.design/4qkyCaJdjrewNVBZ/scene.splinecode" 
          style={{ width: "100vw", height: "100vh" }}
        />
      </Suspense>
    </section>
  );
};

export default Hero;