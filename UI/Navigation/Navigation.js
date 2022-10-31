import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.css";
import followIcon from "../../assets/follow.png";

const Navigation = () => {
  const { asPath } = useRouter();

  return (
    <header className={styles.navigation}>
      <div className={styles.logo}>
        <Link href="/">
          <span>Beer Madness</span>
        </Link>
      </div>

      <div className={styles.buttons}>
        <Link href="/favourites">
          <a className={asPath === "/favourites" ? styles.active : styles.link}>
            <div className={styles.image}>
              <Image src={followIcon} layout="fill" />
            </div>
            Favourites
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
