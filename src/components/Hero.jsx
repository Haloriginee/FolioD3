import { motion } from "framer-motion";
import { Model3DCanvas } from "./canvas";
import { style } from "../style";


const Hero = () => {
  return (

    <section className="relative w-full h-screen mx-auto">
      <div className={`${style.paddingX} absolute flex flex-row items-start gap-5 top-[120px] inset-0 max-w-7xl mx-auto`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#470907]"/>
          <div className="w-1 sm:h-80 h-40 red-gradient"/>
        </div>

        <div>
          <h1 className={`${style.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#470907]">Kévin</span>
          </h1>
          <p className={`${style.heroSubText} text-white-100 mt-2`}>
            I'm a full-stack developer, 3D artist <br className="sm:block hidden"/>
            and a professional Slacker.
          </p>
        </div>
      </div>

        <Model3DCanvas />

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="flex justify-center items-start p-2 border-secondary border-4 w-[35px] h-[64px] rounded-3xl">
              <motion.div
                className="w-3 h-3 bg-secondary mb-1 rounded-full"
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5, repeat: Infinity,
                  repeatType: "loop"
                }}

              />
            </div>
          </a>
        </div>

    </section>

  )
}

export default Hero
