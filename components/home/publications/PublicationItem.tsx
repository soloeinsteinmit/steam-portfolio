import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import styles from "./publications.module.scss";

interface Props {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link: string;
  doi?: string;
  arxiv?: string;
  collaboration?: string;
  description: string;
}

export const PublicationItem = ({
  title,
  authors,
  journal,
  year,
  link,
  doi,
  arxiv,
  collaboration,
  description,
}: Props) => {
  return (
    <div className={styles.publication}>
      <div className={styles.heading}>
        <div>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.meta}>
            <span className={styles.authors}>{authors}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.journal}>{journal}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.year}>{year}</span>
          </div>
          {collaboration && (
            <div className={styles.collaboration}>
              <span>🤝 {collaboration}</span>
            </div>
          )}
        </div>
        {link && link !== "#" && (
          <Link href={link} target="_blank" rel="nofollow">
            <AiOutlineLink size="2.4rem" className={styles.linkIcon} />
          </Link>
        )}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.identifiers}>
        {doi && (
          <span className="chip">
            DOI: {doi}
          </span>
        )}
        {arxiv && (
          <span className="chip">
            arXiv: {arxiv}
          </span>
        )}
      </div>
    </div>
  );
};

