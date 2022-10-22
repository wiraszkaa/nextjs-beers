import React, { useEffect } from "react";

const Favourites = React.createContext({
  favourites: [],
  toggleFavourite: (beer) => {},
});

const retrieveFavourites = () => {
  const favouritesData = localStorage.getItem("favourites");
  if (!favouritesData) {
    localStorage.setItem("favourites", JSON.stringify([]));
    return [];
  }
  const favourites = JSON.parse(favouritesData);
  return favourites;
};

export function FavouritesContextProvider(props) {
  const [favourites, setFavourites] = React.useState([]);

  useEffect(() => {
    setFavourites(retrieveFavourites());
  }, []);

  const favouritesHandler = (beer) => {
    if (favourites.find((fav) => fav.id === beer.id)) {
      const newFavourites = favourites.filter(
        (fav) => fav.id !== beer.id
      );

      setFavourites(newFavourites);
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
    } else {
      const newFavourites = [...favourites, beer];

      setFavourites(newFavourites);
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
    }
  };

  return (
    <Favourites.Provider
      value={{
        favourites: favourites,
        toggleFavourite: favouritesHandler,
      }}
    >
      {props.children}
    </Favourites.Provider>
  );
}

export default Favourites;
