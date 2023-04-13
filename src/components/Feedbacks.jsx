import { motion } from "framer-motion";
import { style } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { nofriends } from "../constants";

const FeedbackCard = ({ nofriend, name, designation, image, company, i }) => (
  <motion.div
    className="bg-black-200 w-full xs:w-[320px] p-10 rounded-3xl "
    variants={fadeIn("", "spring", i * 0.5, 0.75 )}
  >
    <p className="text-white text-[48px] font-black">"</p>

    <div className="mt-1">
      <p className="text-white text-[18px tracking-wider]">{nofriend}</p>
      <div className="flex justify-between items-center gap-1 mt-7">
        <div className="flex flex-col flex-1">
          <p className="text-white text-[16px] font-medium">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-secondary text-[12px] mt-1">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feeback-by-${name}`}
          className="w-10 h-10 object-cover rounded-full"
        />

      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="bg-black-100 rounded-[20px] mt-12">
      <div className={`bg-tertiary min-h-[300px] rounded-2xl ${style.padding}`}>
        <motion.div variants={textVariant()}>
          <p className={style.sectionSubText}>
            What others say
          </p>
          <h2 className={style.sectionHeadText}>
            Avengers Assemble !!
          </h2>
        </motion.div>
      </div>

      <div className={`flex flex-wrap pb-14 ${style.paddingX} -mt-20 gap-7`}>
        {nofriends.map((nofriend, i) => (
          <FeedbackCard
            key={nofriend.name}
            i={i}
            {...nofriend}
          />
        ))}

      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks, "");
