"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className="paddings relative z-10">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flexCenter flex-col"
    >
      <TypingText title="| About McDonald&#39;s" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">McDonald&#39;s</span> is your
        trusted destination for delicious food and exceptional service. Since
        our founding, we&#39;ve been committed to serving quality meals that bring
        joy to families everywhere. From our iconic Big Mac to crispy golden
        fries, every item on our menu is prepared with care and the freshest
        ingredients. Experience the&nbsp;
        <span className="font-extrabold text-white">
          taste of happiness
        </span>
        &nbsp;with every bite. Whether you&#39;re grabbing a quick meal or
        enjoying with loved ones, McDonald&#39;s is where flavor meets convenience.
        Let&#39;s&nbsp;
        <span className="font-extrabold text-white">taste</span> the magic of
        McDonald&#39;s by exploring our menu below
      </motion.p>
      <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
        <Link href="#explore">
          <Image
            src="/arrow-down.svg"
            width={18}
            height={28}
            alt="arrow down"
            className="object-contain mt-[28px]"
          />
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
