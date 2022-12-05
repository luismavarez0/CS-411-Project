import {useNavigate} from "react-router-dom";
import {useState} from "react";
import NavigateButton from "./Navigate";
import Inputs from "./Inputs";

const Flights = () => {
    const navigate = useNavigate();
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    const handleOrigin = (event) => {
        setOrigin(event.target.value);
    }

    const handleDestination = (event) => {
        setDestination(event.target.value);
    }

    const findFlights = (event) => {
        //IMPLEMENT API TO FIND THE FLIGHTS
        navigate("/")
    }
    return(
        <div className={"text-center bg-slate-500 h-screen mx-auto border-2 flex flex-col border-gray-700 rounded-lg"}>
            <h1>Enter your origin followed by your destination below:</h1>
            <Inputs placeHolder={origin} funcCall={handleOrigin}></Inputs>
            <Inputs placeHolder={destination} funcCall={handleDestination}></Inputs>
            <NavigateButton buttonFunction={findFlights} buttonText={"Click here to find flights"}></NavigateButton>


        </div>
    )
}

export default Flights;