import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        /* Added 'group' class to trigger child animations on hover */
        className="group flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0 cursor-pointer transition-all duration-300"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        onClick={() => setIsHidden(true)} // Makes the whole row clickable for better UX
      >
        <div>
          <p className="text-2xl font-bold font-montserrat tracking-tight text-white transition-colors duration-300">
            {title}
          </p>
          
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-2">
            {tags.map((tag) => (
              <span 
                key={tag.id} 
                className="text-sm font-montserrat text-neutral-400 group-hover:text-aqua transition-colors duration-300"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <button onClick={() =>setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer text-neutral-400 group-hover:text-white transition-all duration-300"
        >
          <span className="text-sm uppercase tracking-widest font-montserrat">Read More</span>
          <img 
            src="assets/arrow-right.svg" 
            className="w-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
            alt="arrow"
          />
        </button>
      </div>

      {/* Modern thin divider */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700/40 to-transparent h-[1px] w-full" />

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;