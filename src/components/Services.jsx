import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services data

const services = [
  {
    name: "React JS",
    description:
      "React is an open source Javascript library designed to create user interfaces to make it easy to develop single page applications.",
    link: (
      <a href="https://legacy.reactjs.org/" target="_blank">
        Learn more
      </a>
    ),
  },
  {
    name: "Node JS",
    description:
      "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.",
    link: (
      <a href="https://nodejs.org/en/docs" target="_blank">
        Learn more
      </a>
    ),
  },
  {
    name: "PostgreSQL",
    description:
      "PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability.",
    link: (
      <a href="https://www.postgresql.org/" target="_blank">
        Learn more
      </a>
    ),
  },
  {
    name: "MongoDB",
    description:
      "The developer data platform that provides the services and tools necessary to build distributed applications fast, at the performance and scale users demand.",
    link: (
      <a href="https://www.mongodb.com/" target="_blank">
        Learn more
      </a>
    ),
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            //className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0" // <-revisar imagen
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm Freelance Front-end and Back-end Developer
            </h3>
            <a href="https://github.com/sammy2892" target="_blank">
              <button className="btn btn-sm">Visit my GitHub</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-8 flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="leading-tight font-secondary">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a className="text-gradient text-sm">{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
