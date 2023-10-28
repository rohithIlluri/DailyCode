import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto">
        <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'></div>

          <div>
            <h1
              className={`${styles.heroHeadText}`}
              style={{
                background: "linear-gradient(135deg, #FFD700, #FF5733)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: 0.7,
                transition: "opacity 0.5s",
                position: "relative",
              }}
            >
              Hi, I'm <span className="text-tertiary">Rohith</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2`}
              style={{
                background: "linear-gradient(135deg, #FFD700, #FF5733)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: 0.7,
                transition: "opacity 0.5s, color 0.3s, font-size 0.3s, transform 0.3s",
                animation: "fadeIn 1s",
                fontFamily: "Arial, sans-serif",
                fontSize: "24px",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              I develop user interfaces
              <br className="sm:block hidden" />
              and web applications
            </p>
          </div>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
