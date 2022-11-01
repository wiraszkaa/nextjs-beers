import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.css";
import followIcon from "../../assets/follow.png";
import beerIcon from "../../assets/beer.png";

const Navigation = () => {
  const { asPath } = useRouter();

  return (
    <header className={styles.navigation}>
      <Link href="/">
        <div className={styles.logo}>
          <div className={styles.image}>
            <Image src={beerIcon} layout="fill" />
          </div>
          <span>Beer Madness</span>
        </div>
      </Link>

      <Link href="/favourites">
        <div
          className={`${styles.button} ${
            asPath === "/favourites" ? styles.active : ""
          }`}
        >
          <div className={styles.image}>
            <Image src={followIcon} layout="fill" />
          </div>
          <span>FAVOURITES</span>
        </div>
      </Link>
    </header>
  );
};

export default Navigation;
