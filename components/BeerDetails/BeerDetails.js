import { useContext } from "react";
import Favourites from "../../store/favourites";
import Image from "next/image";
import styles from "./BeerDetails.module.css";
import About from "./About/About";
import Card from "../../UI/Card/Card";
import Ingredients from "./Ingredients/Ingredients";
import favouriteIcon from "../../assets/follow.png";
import notFavouriteIcon from "../../assets/unfollow.png";

const BeerDetails = (props) => {
  const beer = props.beer;
  const favouritesCtx = useContext(Favourites);

  const favouritesHandler = () => {
    favouritesCtx.toggleFavourite(props.beer);
  };

  const isFavourite = !!favouritesCtx.favourites.find(
    (fav) => fav.id === props.beer.id
  );

  return (
    <div className={styles.beerDetails}>
      <Card className={styles.hero}>
        <div className={styles.imageContainer}>
          <button className={styles.favourite} onClick={favouritesHandler}>
            <Image
              src={isFavourite ? favouriteIcon : notFavouriteIcon}
              alt="favourite"
              layout="fill"
            />
          </button>
          <div className={styles.image}>
            <Image
              src={beer.image}
              alt={beer.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.mainInfo}>
          <h1>{beer.name}</h1>
          <p>{beer.description}</p>
          <p>It was first brewed in {beer.first_brewed}</p>
        </div>
      </Card>
      <About beer={beer} />
      <Ingredients ingredients={beer.ingredients} />
      <p>Contributed by {beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;
