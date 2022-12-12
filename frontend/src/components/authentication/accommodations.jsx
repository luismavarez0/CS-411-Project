import {useNavigate} from "react-router-dom";
import {useState} from "react";
import NavigateButton from "./Navigate";
import Inputs from "./Inputs";
import logo from '../landingPage/logo.png';

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
        <div>
            <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <a href="/"><img src={logo} class="h-6 mr-2 sm:h-10" alt="Logo" /></a>
                    <a href="/" class="font-semibold text-xl tracking-tight">CS411 Group Project</a>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                    <a href="flights" class="block mt-4 lg:inline-block lg:mt-0 text-orange-300 hover:text-white mr-4">
                        Flights
                    </a>
                    <a href="accommodations" class="block mt-4 lg:inline-block lg:mt-0 text-orange-300 hover:text-white mr-4">
                        Accomodations

                    </a>
                    
                    </div>
                    <div>
                    <a href="signin" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
                    </div>
                    
                </div>
            </nav>
            <div className={"text-center bg-slate-500 h-screen mx-auto border-2 flex flex-col border-gray-700 rounded-lg"}>
                <h1>Enter the city where you would like to find accommodations below:</h1>
                <Inputs placeHolder={location} funcCall={handleLocation}></Inputs>
                <NavigateButton buttonFunction={findAccommodations} buttonText={"Click to find accommodations"}></NavigateButton>

            </div>
        </div>
    )
}

export default Accommodations;
