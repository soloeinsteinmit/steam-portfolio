import Image from "next/image";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./gallery.module.scss";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  caption: string;
  year: string;
}

export const GalleryItem = ({ src, alt, caption, year }: Props) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Reveal>
      <div className={styles.galleryItem}>
        {!imageError ? (
          <>
            <Image
              src={src}
              alt={alt}
              width={600}
              height={400}
              className={styles.image}
              loading="lazy"
              onError={() => setImageError(true)}
            />
            <div className={styles.overlay}>
              <p className={styles.captionText}>{caption}</p>
              <span className={styles.year}>{year}</span>
            </div>
          </>
        ) : (
          <div className={styles.imagePlaceholder}>
            <span>📸</span>
            <p>Image coming soon</p>
            <div className={styles.placeholderCaption}>
              <p>{caption}</p>
              <span>{year}</span>
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
};

