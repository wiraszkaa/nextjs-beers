import styles from "./Beers.module.css";
import BeerItem from "./BeerItem/BeerItem";

const Beers = (props) => {
  return (
    <div className={styles.beers}>
      <ul>
        {props.beers.map((beer) => (
          <BeerItem
            key={beer.id}
            beer={beer}
          />
        ))}
      </ul>
    </div>
  );
};

export default Beers;
