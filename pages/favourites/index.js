import { useContext } from "react";
import Favourites from "../../store/favourites";
import Beers from "../../components/Beers/Beers";

export default function FavouritesPage() {
  const favouritesCtx = useContext(Favourites);

  let content = <p>You have no favourites yet. Start adding some!</p>;
  if (favouritesCtx.favourites.length > 0) {
    content = <Beers beers={favouritesCtx.favourites} />;  
}

  return (
    <div>
      {content}
    </div>
  );
}
