import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

function Contact() {
  return (
    <motion.div
      className='h-full mx-2 md:ml-[150px] md:mx-auto max-w-[1366px] flex flex-col-reverse md:flex-row items-center gap-[50px] mt-40 bg-gray-100'
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="flex-1">
        <form className="flex flex-col gap-[30px] w-full mx-2 md:w-[90%] md:mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="p-[10px] border border-gray-500 bg-transparent rounded-md text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-[10px] border border-gray-500 bg-transparent rounded-md text-white"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="p-[10px] border border-gray-500 bg-transparent rounded-md text-white"
          />
          <input
            type="text"
            placeholder="Business Type"
            className="p-[10px] border border-gray-500 bg-transparent rounded-md text-white"
          />
          <input
            type="text"
            placeholder="Business Location"
            className="p-[10px] border border-gray-500 bg-transparent rounded-md text-white"
          />
          <textarea
            placeholder="Message"
            className="p-[10px] border border-gray-500 bg-transparent rounded-md text-white h-[100px]"
          />
          <button
            type="submit"
            className="p-[15px_30px] bg-[#ea7807] text-white rounded-md cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
      
      <motion.div className="flex-1 flex flex-col gap-[20px] w-full mx-2 md:order-1" variants={variants}>
        <motion.h1 className="text-[30px] leading-[40px] text-left md:text-[60px] md:leading-[70px]" variants={variants}> {/* Adjusted sizes */}
          Let's build a great website together
        </motion.h1>
        
      </motion.div>
    </motion.div>
  );
}

export default Contact;
