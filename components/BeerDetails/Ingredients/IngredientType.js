import styles from "./Ingredients.module.css";

const IngredientsType = (props) => {
  let names = [];
  let amount = [];
  let key = 0;
  props.ingredients.forEach((ingredient) => {
    names.push(
      <li key={key}>
        <p>{ingredient.name}</p>
      </li>
    );
    amount.push(
      <li key={key}>
        <p>
          {ingredient.amount.value} {ingredient.amount.unit}
        </p>
      </li>
    );
    key++;
  });

  return (
    <div className={styles.ingredientType}>
      <h2>{props.type}</h2>
      <ul className={styles.left}>{names}</ul>
      <ul className={styles.right}>{amount}</ul>
    </div>
  );
};

export default IngredientsType;
