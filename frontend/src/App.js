import {Route, Routes} from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
// import Flights from "./components/authentication/flights";
import SignUp from "./components/authentication/SignUp";
import SignIn from "./components/authentication/SignIn";
// import Accommodations from "./components/authentication/accommodations";
// import Flights from "./components/authentication/flights";

function App() {
  return (
    <Routes>

        <Route path={"/"} element={<LandingPage />}></Route>

        <Route path={"/signup"} element={<SignUp />}></Route>

        <Route path={"/signin"} element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
