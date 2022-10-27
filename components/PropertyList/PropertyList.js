import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./PropertyList.module.css";

const PropertyList = (props) => {
  return (
    <div className={styles.propertyList}>
      {props.properties.map((property) => (
        <div className={styles.property} key={property.name}>
          <span>{property.name}</span>
          <ProgressBar progress={property.progress} />
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
