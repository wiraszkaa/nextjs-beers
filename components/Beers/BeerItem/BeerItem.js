import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BeerItem.module.css";
import Favourites from "../../../store/favourites";
import Card from "../../../UI/Card/Card";
import favouriteIcon from "../../../assets/followon.png";
import notFavouriteIcon from "../../../assets/followoff.png";

const BeerItem = (props) => {
  const favouritesCtx = useContext(Favourites);

  const favouritesHandler = () => {
    favouritesCtx.toggleFavourite(props.beer);
  };

  const isFavourite = !!favouritesCtx.favourites.find((fav) => fav.id === props.beer.id);

  return (
    <li>
      <Card className={styles.beer}>
        <button onClick={favouritesHandler}>
          <div className="icon">
            <Image src={isFavourite ? favouriteIcon : notFavouriteIcon} alt="favourite" layout="fill"/>
          </div>
        </button>
        <h1>{props.beer.name}</h1>
        <div className={styles.image}>
          <Image src={props.beer.image} alt={props.beer.name} layout="fill" />
        </div>
        <div className={styles.showInfo}>
          <Link href={`/${props.beer.id}`}>More info</Link>
        </div>
      </Card>
    </li>
  );
};

export default BeerItem;
