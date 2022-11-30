import React from "react";
import MoreStories from "components/more-stories";
import HeroPost from "components/hero-post";
import styles from "./main.module.scss";

const Project = ({ heroPost, morePosts }) => {
  return (
    <section id={styles.project}>
      <div className={styles.inner}>
        <div className={styles.project_logo}>
          <img src="/main/project_logo.png" alt="라키오 로고" />
        </div>
        <div id={styles.project_list}>
          <div className={styles.text_wrap}>
            <h5>About</h5>
            <p>
              라키오는 브랜드의 가치를 높이기 위한 영상을 만듭니다. <br />
              제품의 아름다움을 모두가 공감할 수 있는 방법으로 표현하기 위해{" "}
              <br />
              노력합니다. 라키오는 브랜드가 제품을 시각화화는 과정부터 <br />
              함께 참여합니다.
            </p>
          </div>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
        <div className={styles.see_btnwr}>
          <a href="#">see all project</a>
        </div>
      </div>
    </section>
  );
};

export default Project;
