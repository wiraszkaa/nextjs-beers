import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Navigation.module.css";
import LiquidButton from "../LiquidButton/LiquidButton";

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
          <a className={asPath === "/favourites" ? styles.active : styles.link}>Favourites</a>
        </Link>
        {/* <LiquidButton href="/favourites" active={asPath === "/favourites"}>
          Favourites
        </LiquidButton> */}
      </div>
    </header>
  );
};

export default Navigation;
