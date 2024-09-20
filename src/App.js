import { Provider } from "react-redux";
import { LocalizationProvider } from "./context/LocalizationContext";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.scss";
import { Helmet } from "react-helmet";

function App() {
  return (
    <LocalizationProvider>
      <Provider store={store}>
        <Helmet>
          <meta name="title" content="Snake Online" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="apple-touch-icon"
            href="https://snakeonline.io/snakeLogo.jpg"
          />
          <link rel="icon" href="https://snakeonline.io/favicon.ico" />
          <meta
            name="keywords"
            content="Snake Online, online snake game, snake online game, snake, game, online"
          />
          <meta
            name="description"
            content="Immerse in thrilling mobile and online snake action! Evolve your snake into an unstoppable force,
        customize with cosmetics, outfits, and skins. Rise through the ranks, mastering strategy,
        as your snake dominates the leaderboards. Embark on a journey of growth and supremacy.
        Are you ready to conquer?"
          />
          <meta name="language" content="English" />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

          <meta name="og:title" content="snakeonline.io" />
          <meta
            name="og:description"
            content="Immerse in thrilling mobile and online snake action! Evolve your snake into an unstoppable force,
        customize with cosmetics, outfits, and skins. Rise through the ranks, mastering strategy,
        as your snake dominates the leaderboards."
          />
          <meta name="og:image" content="https://snakeonline.io/logo.jpg" />
          <meta name="og:url" content="https://snakeonline.io" />

          <meta name="twitter:title" content="snakeonline.io" />
          <meta
            name="twitter:description"
            content="Immerse in thrilling mobile and online snake action! Evolve your snake into an unstoppable force,
        customize with cosmetics, outfits, and skins. Rise through the ranks, mastering strategy,
        as your snake dominates the leaderboards."
          />
          <meta
            name="twitter:image"
            content="https://snakeonline.io/logo.jpg"
          />
          <meta name="twitter:card" content="https://snakeonline.io" />

          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <BrowserRouter>
          <AppRouter />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </LocalizationProvider>
  );
}

export default App;
