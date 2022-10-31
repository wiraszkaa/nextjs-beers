import styles from "./About.module.css";
import PropertyList from "../../PropertyList/PropertyList";
import Card from "../../../UI/Card/Card";

const About = (props) => {
  const properties = [
    {
      name: `ABV ${props.beer.abv ? props.beer.abv : ""}%`,
      description: "Alcohol by volume",
      progress: `${Math.round(props.beer.abv / 0.55)}%`,
    },
    {
      name: `EBC ${props.beer.ebc ? props.beer.ebc : ""}`,
      description: "European Brewery Convention",
      progress: `${Math.round(props.beer.ebc / 2.19)}%`,
    },
    {
      name: `IBU ${props.beer.ibu ? props.beer.ibu : ""}`,
      description: "International Bittering Units",
      progress: `${Math.round(props.beer.ibu / 1.5)}%`,
    },
    {
      name: `PH ${props.beer.ph ? props.beer.ph : ""}`,
      progress: `${Math.round(props.beer.ph / 0.056)}%`,
    },
    {
      name: `SRM ${props.beer.srm ? props.beer.srm : ""}`,
      description: "Standard Reference Method",
      progress: `${Math.round(props.beer.srm / 1.095)}%`,
    },
    {
      name: `FG ${props.beer.target_fg ? props.beer.target_fg : ""}`,
      description: "Final Gravity",
      progress: `${Math.round(props.beer.target_fg / 10.3)}%`,
    },
    {
      name: `OG ${props.beer.target_og ? props.beer.target_og : ""}`,
      description: "Original Gravity",
      progress: `${Math.round(props.beer.target_og / 11.12)}%`,
    },
  ];

  return (
    <Card className={styles.about}>
      <h1>About</h1>
      <PropertyList properties={properties} />
      <h2>It is best with:</h2>
      <ul>
      {props.beer.food_pairing.map((food, index) => (<li key={index}>{food}</li>))}
      </ul>
      <h2>Brewers Tips</h2>
      <p>{props.beer.brewers_tips}</p>
    </Card>
  );
};

export default About;
