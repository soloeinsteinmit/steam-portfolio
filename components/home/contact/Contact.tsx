import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have an exciting AI/ML project or research collaboration in mind? Let&apos;s connect! 
            Shoot me an email or find me on{" "}
            <Link
              href="https://www.linkedin.com/in/solomon-eshun-788568317"
              target="_blank"
              rel="nofollow"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link href="https://github.com/soloeinsteinmit" target="_blank" rel="nofollow">
              GitHub
            </Link>{" "}
            if that&apos;s more your speed. I&apos;m always excited to discuss cutting-edge AI, 
            collaborate on research, or explore new opportunities! 🚀
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:solomoneshun373@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>Send Email</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
