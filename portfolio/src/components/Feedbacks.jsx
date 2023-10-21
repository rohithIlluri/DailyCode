import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-gradient-to-br from-[#1d1836] to-[#232631] p-10 rounded-3xl xs:w-[320px] w-full'
    style={{
      background: "var(--secondary-gradient)",
      color: "var(--tertiary-color)",
      opacity: 0.7, // Adjust the opacity for translucency
    }} >
    <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-tertiary-gradient tracking-wider text-[18px]'>{testimonial}</p>
    </div>
    <div className='mt-7 flex justify between items-center gap-1'>
      <div className='flex-1 flex flex-col'>
        <p className='text-tertiary-gradient font-medium text-[16px]'>
          <span className='blue-text-gradient'>@</span> {name}
        </p>
        <p className='mt-1 text-secondary text-[12px]'>
          {designation} of {company}
        </p>
      </div>
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className='w-10 h-10 rounded-full object-cover'
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-gradient-to-br from-var(--primary-gradient) to-var(--secondary-gradient)`}>
      <div className={`bg-gradient-to-br from-var(--primary-gradient) to-var(--secondary-gradient) rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-gradient-tertiary`}>What others say</p>
          <h2 className={`${styles.sectionHeadText} text-gradient-tertiary`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
