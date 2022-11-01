import React, { useState } from "react";
import Image from "next/image";
import styles from "./SearchBar.module.css";
import findIcon from "../../assets/find.png";

const SearchBar = (props) => {
  const [placeholder, setPlaceHolder] = useState(
    "Search for a beer"
  );
  const focusHandler = () => {
    setPlaceHolder("");
  };

  const blurHandler = () => {
    setPlaceHolder("Search for a beer");
  };

  return (
    <div className={`${styles.searchBar} slideDown`}>
      <div className={styles.image}>
        <Image src={findIcon} alt="Find" layout="fill" />
      </div>
      <input
        onChange={props.search}
        onFocus={focusHandler}
        onBlur={blurHandler}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
