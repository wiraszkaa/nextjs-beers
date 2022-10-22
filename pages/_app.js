import { FavouritesContextProvider } from "../store/favourites";
import "../styles/globals.css";
import Layout from "../UI/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <FavouritesContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FavouritesContextProvider>
  );
}

export default MyApp;
