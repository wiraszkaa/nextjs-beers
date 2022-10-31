import styles from "./Ingredients.module.css";
import Card from "../../../UI/Card/Card";
import IngredientsType from "./IngredientType";

const Ingredients = (props) => {
    const ingredients = props.ingredients;

    return (
        <Card className={styles.ingredients}>
            <h1>Ingredients</h1>
            <IngredientsType type="Hops" ingredients={ingredients.hops}/>
            <IngredientsType type="Malt" ingredients={ingredients.malt}/>
            <h2>Yeast</h2>
            <p>{ingredients.yeast}</p>
        </Card>
    );
};

export default Ingredients;