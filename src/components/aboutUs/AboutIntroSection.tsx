import React from "react";
import planets from "../../assets/globals.svg";

const AboutIntroSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-32 px-6 md:px-20">
      <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-start">

        {/* LEFT COLUMN */}
        <div className="max-w-xl">
          <h2
            className="text-5xl md:text-6xl font-light text-white mb-6 tracking-widest leading-tight"
            style={{ fontFamily: "'Exo 2', 'Rajdhani', sans-serif" }}
          >
            ABOUT US
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            SEDS SLIIT is the official space exploration student organization at Sri
            Lanka Institute of Technology, and a recognized chapter of Students for
            the Exploration and Development of Space. Founded in 2019 by a student
            team led by Saditha Dissanayaka and Ravindu Piyapema, the chapter
            promotes space exploration through projects, events, research, and
            outreach.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex justify-center md:justify-start">
          <img
            src={planets}
            alt="planet stack"
            className="w-[280px] md:w-[420px] object-contain md:-ml-20 md:mt-6 drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutIntroSection;