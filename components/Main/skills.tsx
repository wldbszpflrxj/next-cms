import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./main.module.scss";

const Skills = () => {
  return (
    <section id={styles.skills}>
      <div className={styles.inner}>
        <h2>Creative Skills</h2>
        <div className={styles.skill_wrap}>
          <div>
            <Link href="#">
              <Image
                layout="responsive"
                width={434}
                height={513}
                src="/main/skill-1.jpg"
                alt="Lakio Studio"
              />
              <div className={styles.image_overlay}>
                <h4>Lakio Studio</h4>
                <p>
                  라키오는 총 4명의 DP와 편집자, <br />
                  DI 컬러리스트로 구성되어 있습니다. <br />
                  투지가 넘치는 크리에이터들은 <br />
                  서로에게 영감을 주고 성장해나갑니다.
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                layout="responsive"
                width={434}
                height={513}
                src="/main/skill-2.jpg"
                alt="Creative"
              />
              <div className={styles.image_overlay}>
                <h4>Creative</h4>
                <p>
                  성수에 위치한 천고 약 3m, 60평 규모의 <br />
                  라키오 스튜디오 안에는 <br />
                  3가지 서로 다른 타입의 룸이 있고, <br />이 곳에서 주된
                  실내촬영이 진행됩니다.
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                layout="responsive"
                width={434}
                height={513}
                src="/main/skill-3.jpg"
                alt="Lakio Studio"
              />
              <div className={styles.image_overlay}>
                <h4>Equipment</h4>
                <p>
                  라키오는 고속촬영과 같은 특수촬영에 <br />
                  익숙하며 이에 맞는 장비들을 구성하고 <br />
                  사용합니다. 이러한 촬영은 시각적으로 <br />
                  새로운 이미지가 필요한 브랜드의 <br />
                  니즈에 적합할 수 있습니다.
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                layout="responsive"
                width={434}
                height={513}
                src="/main/skill-4.jpg"
                alt="Lakio Studio"
              />
              <div className={styles.image_overlay}>
                <h4>Technology</h4>
                <p>
                  라키오는 촬영을 넘어, 사운드 믹싱, <br />
                  보이스 오버 등 후반작업에 있어서도 <br />
                  강점을 가지고 있습니다. <br />
                  완성도 높은 결과물을 위하여 <br />
                  끊임없이 노력합니다.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
