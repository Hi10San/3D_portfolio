import { mySocials } from "../constants";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.section
      className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-5% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <motion.a
            href={social.href}
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </motion.a>
        ))}
      </div>
      <p>© 2026 Hiten. All rights reserved.</p>
    </motion.section>
  );
};

export default Footer;