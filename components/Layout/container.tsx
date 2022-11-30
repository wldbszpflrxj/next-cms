import styles from "components/Layout/layout.module.scss";
export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
