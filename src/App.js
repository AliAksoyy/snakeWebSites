import { Provider } from "react-redux";
import { LocalizationProvider } from "./context/LocalizationContext";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.scss";

function App() {
  return (
    <LocalizationProvider>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </LocalizationProvider>
  );
}

export default App;
