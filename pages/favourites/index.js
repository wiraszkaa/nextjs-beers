import { useContext } from "react";
import Head from "next/head";
import Favourites from "../../store/favourites";
import Beers from "../../components/Beers/Beers";

export default function FavouritesPage() {
  const favouritesCtx = useContext(Favourites);

  let content = <p>You have no favourites yet. Start adding some!</p>;
  if (favouritesCtx.favourites.length > 0) {
    content = <Beers beers={favouritesCtx.favourites} />;
  }

  return (
    <>
      <Head>
        <title>Favourite Beers</title>
        <meta
          name="description"
          content="Find Your favourite beers."
        />
      </Head>
      <div>{content}</div>
    </>
  );
}
