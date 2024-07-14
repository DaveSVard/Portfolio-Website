import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import clsx from "clsx";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl w-full"
    >
      <div className="min-h-[450px]">
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient rounded-full flex justify-center items-center cursor-pointer w-10 h-10"
            >
              <img
                src={github}
                alt={github}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-2xl">{name}</h3>
          <p className="text-secondary text-sm mt-2">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <p key={tag.name} className={clsx("text-sm", tag.color, tag.name)}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={clsx(styles.sectionSubText)}>My work</p>
        <h2 className={clsx(styles.sectionHeadText)}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-7"
        >
          Following projects show cases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories ad live demox in it. It reflects my ability
          to solve complex problems, work with different rechnologies, and
          manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
