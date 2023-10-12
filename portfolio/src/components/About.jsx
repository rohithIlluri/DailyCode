import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Professional Summary</p>
        <h2 className={styles.sectionHeadText}>Rohith Reddy Illuri</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Experienced Graduate committed to maintaining cutting-edge technical skills and up-to-date industry knowledge. I am a Machine learning researcher, Full Stack Developer known for being results-driven with experience in designing, building, and maintaining data processing systems.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
  <ServiceCard key={service.title} index={index} {...service} />
))}

      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
