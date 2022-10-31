import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BeerItem.module.css";
import Favourites from "../../../store/favourites";
import Card from "../../../UI/Card/Card";
import favouriteIcon from "../../../assets/follow.png";
import notFavouriteIcon from "../../../assets/unfollow.png";

const BeerItem = (props) => {
  const [appeared, setAppeared] = useState(false);
  const favouritesCtx = useContext(Favourites);

  const favouritesHandler = () => {
    favouritesCtx.toggleFavourite(props.beer);
  };

  const isFavourite = !!favouritesCtx.favourites.find(
    (fav) => fav.id === props.beer.id
  );

  return (
    <li>
      <Card className={`${styles.beer} ${appeared ? styles.appeared : ""}`}>
        <button onClick={favouritesHandler}>
          <div className="icon">
            <Image
              src={isFavourite ? favouriteIcon : notFavouriteIcon}
              alt="favourite"
              layout="fill"
            />
          </div>
        </button>
        <h1>{props.beer.name}</h1>
        <div className={styles.image}>
          <Image
            src={props.beer.image}
            alt={props.beer.name}
            width={40}
            height={120}
            layout="responsive"
          />
        </div>
        <div className={styles.showInfo}>
          <Link href={`/${props.beer.id}`}>More Info</Link>
        </div>
      </Card>
    </li>
  );
};

export default BeerItem;
