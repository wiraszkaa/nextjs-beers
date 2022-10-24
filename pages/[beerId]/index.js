import BeerDetails from "../../components/BeerDetails/BeerDetails";

export default function BeerDetailsPage(props) {
  return <BeerDetails beer={props.beer}/>
}

export async function getStaticPaths() {
  const response = await fetch("https://api.punkapi.com/v2/beers");
  const data = await response.json();

  const paths = data.map((beer) => ({ params: { beerId: beer.id.toString() } }));

  return {
    fallback: "blocking",
    paths,
  };
}

export async function getStaticProps(context) {
  const beer = context.params.beerId;

  const response = await fetch(`https://api.punkapi.com/v2/beers/${beer}`);
  const data = await response.json();

  return {
    props: {
      beer: { ...data[0], image: data[0].image_url },
    },
  };
}
