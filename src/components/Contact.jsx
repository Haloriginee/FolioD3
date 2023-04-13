import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';
import { style } from "../style";
import { slideIn } from '../utils/motion';
import { ShieldCanvas } from './canvas';
// template_r7eggng
//service_yjz6k3k

//9YD-6U6lpyR96I1Dn
const Contact = () => {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState(
    {
      name: '',
      email: '',
      message: ''
    }
  );

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.send(
      'service_yjz6k3k',
      'template_r7eggng',
      {
        from_name: form.name,
        to_name: "Kévin",
        from_email: form.email,
        to_email: "herezy2006@gmail.com",
        message: form.message
      },
      "9YD-6U6lpyR96I1Dn"
    )
      .then(() => {
        setLoading(false);
        alert(" Thank You. I will get back to you Asap :) ");

        setForm({
          name: '',
          email: '',
          message: ''
        });

      }, (error) => {
        setLoading(false);
        alert("Something went wrong. Please try again later");
        console.log(error.text);
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex flex-col-reverse overflow-hidden gap-10'>
      <motion.div
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <p className={style.sectionSubText}>
          Get in touch
        </p>
        <h3 className={style.sectionHeadText}>
          Contact.
        </h3>

        <form
          ref={formRef}
          className="flex flex-col gap-8 mt-12"
          onSubmit={handleSubmit}
        >
          <label
            className="flex flex-col"
          >
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type="text"
              name="name"
              className="bg-tertiary border-none outlined-none px-6 py-4 font-medium text-white placeholder:text-secondary rounded-lg"
              value={form.name}
              placeholder="Name"
              onChange={handleChange}
            />
          </label>
          <label
            className="flex flex-col"
          >
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type="email"
              name="email"
              className="bg-tertiary border-none outlined-none px-6 py-4 font-medium text-white placeholder:text-secondary rounded-lg"
              value={form.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </label>
          <label
            className="flex flex-col"
          >
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              name="message"
              rows="7"
              className="bg-tertiary border-none outlined-none px-6 py-4 font-medium text-white placeholder:text-secondary rounded-lg"
              value={form.message}
              placeholder="Message"
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary text-white font-bold rounded-xl shadow-md shadow-primary py-3 px-8 outlined-none w-fit"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>
      </motion.div>

      <motion.div
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <ShieldCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, 'contact');
