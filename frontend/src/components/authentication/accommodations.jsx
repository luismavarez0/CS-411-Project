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
        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "https://hotels4.p.rapidapi.com/v2/get-meta-data");
        xhr.setRequestHeader("X-RapidAPI-Key", "dad20bcabbmsh57e3ee17ffa309fp14efbejsnaba5eed1ea7f");
        xhr.setRequestHeader("X-RapidAPI-Host", "hotels4.p.rapidapi.com");

        xhr.send(data);
        
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
