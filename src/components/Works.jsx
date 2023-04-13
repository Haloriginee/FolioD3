import React from 'react';
import Tilt from 'react-tilt';
import { github, arrow } from "../assets";
import { style } from '../style';
import { projects } from "../constants";
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const ProCard = ({ name, description, image, tags, link, source_code, i }) => {
  return (

    <motion.div
      variants={fadeIn("up", "spring", i * 0.5, 0.75)}
    >
      <Tilt
        className="bg-tertiary rounded-2xl p-5 sm:w-[360px] w-full"
        options={{
          max: 45,
          scale: 1.05,
          speed: 450,
        }}
      >
        <div className='relative h-[240px] w-full'>
          <img
            src={image}
            alt={name}
            className="rounded-2xl object-cover h-full w-full"
          />
          <div className='absolute flex justify-end m-3 inset-0 card-hover'>
            <div
              className=" flex justify-center items-center rounded-full cursor-pointer black-gradient w-10 h-10 "
              onClick={() => window.open(source_code, "_blank")}
            >
              <img src={github} alt="github" className=" object-contain w-1/2 h-1/2" />
            </div>
            <div
              className=" flex justify-center items-center rounded-full cursor-pointer black-gradient w-10 h-10 "
              onClick={() => window.open(link, "_blank")}
            >
              <img src={arrow} alt="arrow" className=" object-contain w-1/2 h-1/2" />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white text-[24px] font-bold'>
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {description}
          </p>
        </div>

        <div className='flex flex-wrap gap-2 mt-4'>
          {tags.map((tag) => (
            <p
              className={`${tag.color} text-[14px]`}
              key={tag.name}
            >
              #{tag.name}
            </p>
          ))}
        </div>


      </Tilt>
    </motion.div>

  )
}

const Works = () => {
  return (

    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>
          Here are some of my Works
        </p>
        <h2 className={style.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      <div className='flex w-full'>
        <motion.p
          className="text-secondary text-[17px] mt-3 max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.2, 1)}
        >
          Are you ready to witness a JavaScript extravaganza? Behold, my latest project showcasing my mad JS skills! It's like a circus of code - I've got functions flying through the air, loops jumping through hoops, and variables doing daring feats of memory manipulation. The audience will be on the edge of their seats as they watch my code come to life, creating dynamic web pages and interactive user experiences. So step right up and marvel at the spectacle of my JavaScript skills project!
        </motion.p>
      </div>

      <div className='flex flex-wrap mt-20 gap-7'>
        {projects.map((project, i) => (
          <ProCard
            key={`project-${i}`}
            {...project}
            i={i}
          />
        ))}
      </div>

    </>

  )
}

export default SectionWrapper(Works, "");
