import Image from "next/image";
import styles from "./BeerDetails.module.css";
import About from "./About/About";
import Card from "../../UI/Card/Card";
import Ingredients from "./Ingredients/Ingredients";

const BeerDetails = (props) => {
  const beer = props.beer;

  return (
    <div className={styles.beerDetails}>
      <Card className={styles.hero}>
        <div className={styles.image}>
          <Image src={beer.image} alt={beer.name} layout="fill" />
        </div>
        <div className={styles.mainInfo}>
          <h1>{beer.name}</h1>
          <p>{beer.description}</p>
          <p>It was first brewed in {beer.first_brewed}</p>
        </div>
      </Card>
      <About beer={beer} />
      <Ingredients ingredients={beer.ingredients} />
    </div>
  );
};

export default BeerDetails;
