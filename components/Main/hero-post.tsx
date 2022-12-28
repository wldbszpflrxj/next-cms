import CoverImage from "../cover-image";
import Link from "next/link";
import styles from "./main.module.scss";

export default function HeroPost({ idx, title, coverImage, slug }) {
  const Title = () => {
    const titleCut = title.split("/");
    return (
      <>
        <b>{titleCut[0]}</b>
        {titleCut[1]}
      </>
    );
  };
  return (
    <article className={styles.project_entry}>
      <div>
        <div className={styles.image}>
          {coverImage && (
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
          )}
        </div>
        <header>
          <h3>
            <Link href={`/posts/${slug}`}>
              <Title />
            </Link>
          </h3>
        </header>
      </div>
    </article>
  );
}
