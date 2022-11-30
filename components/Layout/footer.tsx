import styles from "components/Layout/layout.module.scss";
export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.footer_txt} aria-label="Contact Us">
          <div className={styles.bg_txt}>
            <p>Get In Touch</p>

            <p>Get In Touch</p>
          </div>
          <p className="en">
            <b>Contact Us</b>
          </p>
        </div>
        <div className={styles.footer_info}>
          <div>라키오 프로덕션</div>
          <div>
            사업자등록번호 <span className="number">637-05-02241</span>
          </div>
          <div>
            장용윤,장소영 <span>서울시 성동구 성수일로 1길 13, 4층</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
