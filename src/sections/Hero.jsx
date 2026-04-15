import Spline from '@splinetool/react-spline';
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  return (
    <section className="min-h-screen overflow-hidden">
      
      {/* isolate Spline */}
      <div style={{ width: "100vw", height: "100vh" }}>
        <Suspense fallback={<Loader />}>
          <Spline scene="https://prod.spline.design/4qkyCaJdjrewNVBZ/scene.splinecode" />
        </Suspense>
      </div>

    </section>
  );
};

export default Hero;