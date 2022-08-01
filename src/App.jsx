import { useEffect } from "react";
import "./App.css";
import Port from "./components/Port";
import ReactGA from "react-ga4";

function App() {
  const TRACKING_ID = "G-18N3E5YVG8";
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/app",
    });
  }, []);

  return <Port />;
}

export default App;
