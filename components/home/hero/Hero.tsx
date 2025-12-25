import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/jc.jpg";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m Solo Shun<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m an <span>AI/ML Engineer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              I design and deploy intelligent systems that push the boundaries of what&apos;s possible. 
              From building autonomous AI agents that rank in top global benchmarks to developing 
              scalable ML pipelines for real-world applications. Let&apos;s build the future together!
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="Solomon Eshun (Solo Shun) | AI/ML Engineer"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
