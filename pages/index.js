import { useState } from "react";
import Head from "next/head";
import Beers from "../components/Beers/Beers";
import SearchBar from "../UI/SearchBar/SearchBar";

export default function Home(props) {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  let filteredBeers = props.beers;
  if (searchValue !== "") {
    filteredBeers = props.beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  let content = <p>No beers found.</p>;
  if (filteredBeers.length > 0) {
    content = <Beers beers={filteredBeers} />;
  }

  return (
    <>
      <Head>
        <title>Beers</title>
        <meta name="description" content="Check the best kinds of beer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <SearchBar search={searchHandler} />
        {content}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://api.punkapi.com/v2/beers");
  const data = await response.json();

  return {
    props: {
      beers: data.map((beer) => ({ ...beer, image: beer.image_url })),
    },
  };
}
