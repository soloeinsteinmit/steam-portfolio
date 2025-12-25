"use client";

/**
 * Gallery Component
 * 
 * TO ADD NEW IMAGES:
 * 1. Place compressed images in /public/gallery/ folder
 * 2. Add a new object to the galleryImages array below
 * 3. The grid will auto-adjust to any number of images!
 * 
 * Image specs:
 * - Recommended: 1200-1600px wide, 4:3 aspect ratio
 * - Compress before uploading (aim for <500KB)
 * - Formats: JPG (photos), PNG (graphics)
 */

import { useState } from "react";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { GalleryItem } from "./GalleryItem";
import { Lightbox } from "./Lightbox";
import styles from "./gallery.module.scss";

export const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev < galleryImages.length - 1 ? prev + 1 : prev
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="section-wrapper" id="gallery">
      <SectionHeader title="Gallery" dir="r" />
      
      <div className={styles.galleryGrid}>
        {galleryImages.map((item, idx) => (
          <GalleryItem key={idx} {...item} onClick={() => openLightbox(idx)} />
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      )}

      {/* Uncomment when you have more images */}
      {/* <div className={styles.viewMore}>
        <a href="/gallery" className={styles.viewMoreLink}>
          View Full Gallery →
        </a>
      </div> */}
    </section>
  );
};

const galleryImages = [
  {
    src: "/gallery/2.jpg",
    alt: "Speaking at Tech & Beyond Expo 2025",
    caption: "Presenting on Software Engineering in the Age of AI at Academic City University",
    year: "2025",
  },
  {
    src: "/gallery/5.jpeg",
    alt: "Global Code Bootcamp Mentoring",
    caption: "Mentoring students in Python and AI integration at University of Cape Coast",
    year: "2025",
  },
  {
    src: "/gallery/3.jpg",
    alt: "Ghana Data Science Summit 2025",
    caption: "Presenting on Software Engineering in the Age of AI at Academic City University",
    year: "2025",
  },
  {
    src: "/gallery/ds3.jpeg",
    alt: "DS-I Africa",
    caption: "At DS-I Africa Consortium Meeting 2025",
    year: "2025",
  },
  {
    src: "/gallery/ds1.jpg",
    alt: "DS-I Africa",
    caption: "At DS-I Africa Consortium Meeting 2025",
    year: "2025",
  },
  {
    src: "/gallery/ds2.jpg",
    alt: "DS-I Africa",
    caption: "At DS-I Africa Consortium Meeting 2025",
    year: "2025",
  },
  {
    src: "/gallery/ds4.jpeg",
    alt: "DS-I Africa",
    caption: "At DS-I Africa Consortium Meeting 2025",
    year: "2025",
  },
  {
    src: "/gallery/4.jpeg",
    alt: "Global Code Bootcamp Mentoring",
    caption: "Mentoring students in Python and AI integration at University of Cape Coast",
    year: "2025",
  },
  {
    src: "/gallery/ind1.jpg",
    alt: "IndabaX Ghana",
    caption: "LoRA fine-tuning workshop at IndabaX Ghana, Ashesi University",
    year: "2025",
  },
  {
    src: "/gallery/ind2.jpg",
    alt: "IndabaX Ghana",
    caption: "LoRA fine-tuning workshop at IndabaX Ghana, Ashesi University",
    year: "2025",
  },
  {
    src: "/gallery/ind3.jpg",
    alt: "IndabaX Ghana",
    caption: "LoRA fine-tuning workshop at IndabaX Ghana, Ashesi University",
    year: "2025",
  },
  {
    src: "/gallery/rob1.jpg",
    alt: "Robotics and IoT TransforME Project",
    caption: "Best Participant Award for exceptional performance and innovation in Robotics and IoT",
    year: "2023",
  },
  {
    src: "/gallery/rob2.jpg",
    alt: "Robotics and IoT TransforME Project",
    caption: "Best Participant Award for exceptional performance and innovation in Robotics and IoT",
    year: "2023",
  },
  {
    src: "/gallery/rob3.jpeg",
    alt: "Robotics and IoT TransforME Project",
    caption: "Showcasing the award-winning project at the Robotics and IoT TransforME exhibition",
    year: "2023",
  },
  {
    src: "/gallery/rob4.jpeg",
    alt: "Robotics and IoT TransforME Project",
    caption: "Showcasing the award-winning project at the Robotics and IoT TransforME exhibition",
    year: "2023",
  },
  {
    src: "/gallery/glb1.jpg",
    alt: "GlobalCode Certificate Ceremony",
    caption: "Receiving the certificate for the GlobalCode 3-week Programming Camp (Raspberry Pi & Python)",
    year: "2024",
  },
  {
    src: "/gallery/glb2.jpg",
    alt: "ActiveTrack Project Presentation",
    caption: "Presenting ActiveTrack at the GlobalCode Project Display: An AI-driven fitness tracker integrating IoT, LSTM models, and open-source LLMs",
    year: "2024",
  },
];

