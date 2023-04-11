import React from 'react';
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { style } from "../style";

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ title, icon, i }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className='w-full p-[1px] rounded-[20px] shadow-card red-white-gradient'
        variants={fadeIn("right", "spring", 0.5 * i, 0.75)}
      >
        <div
          className="flex flex-col justify-evenly items-center bg-tertiary rounded-[20px] min-h-[250px] py-5 px-12"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain bg-none"
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )}


const About = () => {
  return (

    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>Intro</p>
        <h2 className={style.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className='text-secondary text-[17px] leading-[30px] mt-4 max-w-3xl '
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a full-stack developer with experience in Javascript & Typescript, I believe that the best way to learn is by doing.  Together, we'll create some amazing web experiences and push the boundaries of what's possible with JavaScript. So let's grab a cup of coffee and get coding!
      </motion.p>

      <div className='flex flex-wrap gap-10 mt-20'>
        {services.map((service, i) => (
          <ServiceCard
            key={service.title}
            i={i}
            {...service}
          />
        ))}
      </div>

    </>

  )
}

export default SectionWrapper(About, "about");
