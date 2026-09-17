import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { toast } from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
  
  const [result, setResult] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Please wait...");
    const formData = new FormData(e.target);
    formData.append("access_key", "3b77209c-6584-4e17-b535-5a0e9b1660ba");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // setResult("Form Submitted Successfully");
        toast.success("Thank you for your submission!");
        e.target.reset();
      } else {
        // console.log("Error",data)
        // setResult(data.message || "Something went wrong");
        toast(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="Have questions or want to get in touch? We’d love to hear from you!"
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="text-sm font-medium mb-2">Your Name</p>
          <div className="flex pl-3 rounded-lg gap-2 border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="Person Icon" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 text-sm w-full outline-none focus:outline-none"
              required
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Email Id</p>
          <div className="flex pl-3 rounded-lg gap-2 border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="Email Icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 text-sm w-full outline-none focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="text-sm font-medium mb-2">Message</p>
          <textarea
            name="message"
            placeholder="Enter your message"
            className="p-3 text-sm w-full bg-transparent outline-none focus:outline-none border border-gray-300 dark:border-gray-600 rounded-lg"
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm py-3 px-6 rounded-full hover:scale-103 hover:bg-blue-700 transition-all duration-300 cursor-pointer"
        >
          Submit <img src={assets.arrow_icon} width="14" alt="Arrow Icon" />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
