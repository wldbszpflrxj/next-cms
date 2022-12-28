import Image from "next/legacy/image";
import Link from "next/link";
import { CMS_NAME } from "lib/constants";
import styles from "components/Layout/layout.module.scss";

export default function Header({ gnbMenu }) {
  return (
    <header id={styles.header}>
      <div id={styles.header_main}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Link href="/" className={styles.flex}>
              <Image
                src="/lakio-logo.png"
                height={28}
                width={201}
                alt={`${CMS_NAME} 로고`}
              />
            </Link>
          </div>
          <nav>
            <ul>
              {gnbMenu?.map((menu) => (
                <li key={menu.node.label}>
                  <Link href={menu.node.path}>{menu.node.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
