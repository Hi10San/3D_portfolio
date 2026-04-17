import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const Spline = lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-screen overflow-hidden">
      <Suspense fallback={<Loader />}>
        <Spline
          scene="https://prod.spline.design/4qkyCaJdjrewNVBZ/scene.splinecode"
          style={{ width: "100vw", height: "100vh" }}
        />
      </Suspense>
    </section>
  );
};

export default Hero;