import { motion } from "framer-motion";
import { style } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        className={`${style.padding}, mx-auto relative max-w-7xl z-0`}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component/>
      </motion.section>
    )
  }

export default SectionWrapper
