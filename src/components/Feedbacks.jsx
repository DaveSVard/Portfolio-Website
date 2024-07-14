import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import clsx from "clsx";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 sm:p-10 rounded-3xl w-full"
  >
    <p className="test-white font-black text-5xl">"</p>
    <div className="mt-1">
      <p className="tracking-wider text-white text-base sm:text-lg">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-base font-medium text-white">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-xs">
            {designation} of {company}
          </p>
        </div>
        <img src={image} alt={`feedback-by-${name}`} className="w-10 h-10 object-cover rounded-full"/>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-2xl">
      <div
        className={clsx(
          "rounded-2xl bg-tertiary min-h-[300px]",
          styles.padding
        )}
      >
        <motion.div variants={textVariant()}>
          <p className={clsx(styles.sectionSubText)}>What others say</p>
          <h2 className={clsx(styles.sectionHeadText)}>Testimonials.</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
