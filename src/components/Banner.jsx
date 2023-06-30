import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Picture from "../assets/Sammy-new.png.png";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gapx12"
        >
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] "
            >
              SAMMY <span>ROSA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ one: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-sequndary font-semibold leading-[1]"
            >
              <span className="text-white mr-4">
                I am a Developer <br />
                full Stack:
              </span>
              <TypeAnimation
                sequence={[
                  "React JS",
                  2000,
                  "Node JS",
                  2000,
                  "PostgresSQL",
                  2000,
                  "MongoDB",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ one: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm a Fullstack Developer. I can handle HTML, CSS, Javascript,
              React and Node JS for the backend. I am a hardworking person who
              seeks to apply all his knowledge and continue learning about
              programming. I have 8 years of experience as Senior Technical
              Support..
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ one: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg ">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ one: false, amount: 0.7 }}
              className="flex text-[35px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/sammy2892" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sammy-rosa-a230b0224/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Picture} alt="images sammy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
