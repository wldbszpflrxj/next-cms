import { CMS_NAME } from "lib/constants";
import styles from "./main.module.scss";

const Intro = () => {
  return (
    <section id={styles.intro}>
      <div className={styles.inner}>
        <div className={styles.intro_typo}>
          <p className={styles.en}>Production</p>
          <p>
            <img src="/main/intro_logo.png" alt={`${CMS_NAME} 로고`} />
          </p>
        </div>
        <div className={styles.intro_video}>
          {/* <iframe
            title="세컨 스킨 하이드레이팅 프라이머   힌스 hince"
            src="https://player.vimeo.com/video/717431965?h=7ff4963a3c&amp;dnt=1&amp;app_id=122963&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;muted=1"
            width="1500"
            height="844"
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe> */}
        </div>
      </div>
    </section>
  );
};
export default Intro;
