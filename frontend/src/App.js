import {Route, Routes} from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Accommodations from "./components/authentication/accommodations";
import Flights from "./components/authentication/flights";

function App() {
  return (
    <Routes>
        <Route path={"/"} element={<LandingPage />}></Route>
        <Route path={"/flights"} element={<Accommodations/>}></Route>
        <Route path={"/accommodations"} element={<Flights/>}></Route>
    </Routes>
  );
}

export default App;
