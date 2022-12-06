import {useNavigate} from "react-router-dom";
import {useState} from "react";
import NavigateButton from "./Navigate";
import Inputs from "./Inputs";

const Accommodations = () => {
    const navigate = useNavigate();

    const [location, setLocation] = useState("")

    const handleLocation = (event) => {
        setLocation(event.target.value);
    }

    const findAccommodations = (event) => {
        navigate("/");
    }
    return(
        <div className={"text-center bg-slate-500 h-screen mx-auto border-2 flex flex-col border-gray-700 rounded-lg"}>
            <h1>Enter the city where you would like to find accommodations below:</h1>
            <Inputs placeHolder={location} funcCall={handleLocation}></Inputs>
            <NavigateButton buttonFunction={findAccommodations} buttonText={"Click to find accommodations"}></NavigateButton>

        </div>
    )
}

export default Accommodations;