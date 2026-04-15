import { rotate } from "maath/buffer";
import Card from "../components/Card.jsx";
import { useRef } from "react";
import { Globe } from "../components/Globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import { Frameworks } from "../components/Frameworks.jsx";








const About = () => {
    const grid2Container = useRef();
  return (
    <section className="c-space section-spacing bg-black">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img 
                src="assets/coding-pov.png" 
                alt="" 
                className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                />
                <div className="z-10">
                    <p className="headtext">Hi, i'm Hiten</p>
                    <p className="subtext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa inventore aliquam sed temporibus repudiandae fugit?</p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"/>
            </div>
            {/* Grid 2 */}
            <div className="grid-default-color grid-2">
                <div ref = {grid2Container} className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text 5xl text-gray-500">CODE IS CRAFT</p>
                    <Card style = {{ rotate: "75deg" , top: "30%", left: "20%"}} text="GRASP"
                    containerRef = {grid2Container}
                    />
                    <Card style = {{ rotate: "-30deg" , top: "60%", left: "45%"}} text="hfda"
                    containerRef = {grid2Container}
                    />
                    <Card style = {{ rotate: "-45deg" , top: "55%", left: "20%"}} text="tthd"
                    containerRef = {grid2Container}
                    />
                    <Card style = {{ rotate: "-60deg" , top: "50%", left: "70%"}} text="letsgoo"
                    containerRef = {grid2Container}
                    />
                    <Card style = {{ rotate: "-20deg" , top: "80%", left: "10%"}} text="WHA' DA HELL"
                    containerRef = {grid2Container}
                    />
                    <Card style = {{ rotate: "30deg" , top: "90%", left: "50%"}} image = "assets/logos/csharp-pink.png"
                    containerRef = {grid2Container}
                    />
                    <Card style = {{ rotate: "-45deg" , top: "80%", left: "25%"}} image = "assets/logos/dotnet-pink.png"
                    containerRef = {grid2Container}
                    />
                    <Card style = {{ rotate: "-45deg" , top: "5%", left: "10%"}} image = "assets/logos/blazor-pink.png"
                    containerRef = {grid2Container}
                    />
                </div>
            </div>
            {/* Grid 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">I'm based in mars and open to remote work worldwide</p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe />
                </figure>
            </div>
            {/* Grid 4 */}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">
                        Do you want to start a project together?
                    </p>
                    <CopyEmailButton />
                </div>
            </div>
            {/* Grid 5 */}
            <div className="grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headText">Teck Stack</p>
                    <p className="subtext">I specialize in a varienty of languages, frameworks,and tools that allow me to build robust and scalable applications</p>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                    <Frameworks />
                </div>
            </div>
        </div>
    </section>
  );
};

export default About