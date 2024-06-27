import { motion } from "framer-motion"; // Import Framer Motion

export default function HeroHome() {
  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4, duration: 0.5 },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } },
  };

  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero content */}
      <div className="pb-6 pt-10 md:pt-20">
        {/* Section header */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <motion.div
            className="mb-4 border-y border-t-0 border-slate-300/80"
            variants={headerVariants}
          ></motion.div>
          <motion.h1
            className="mb-4 cursor-default select-none bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl"
            variants={titleVariants}
          >
            주식이 어려운 당신을 위해, <br className="hidden lg:inline" />
            <span className="mt-2 block text-6xl sm:text-7xl md:text-9xl">
              주토피아
            </span>
          </motion.h1>
          <motion.div
            className="mx-auto max-w-lg sm:max-w-2xl md:max-w-3xl"
            variants={paragraphVariants}
          >
            <motion.p
              className="mb-8 cursor-default select-none text-base text-gray-600 sm:text-lg md:text-xl"
              variants={paragraphVariants}
            >
              주식을 처음 시작하시는 분들을 위한 교육 플랫폼
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
