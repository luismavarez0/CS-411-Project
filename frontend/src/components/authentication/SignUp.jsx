import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Inputs from "./Inputs";
import NavigateButton from "./Navigate";
import axios from "axios";
import logo from '../landingPage/logo.png';
const SignUp = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reenterPassword, setReEntry] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }

    const handleReEntry = (event) => {
        setReEntry(event.target.value);
    }

    const checkPassMatch = () => {
        if (password !== reenterPassword){
            console.log("Your passwords do not match");
            setPasswordMatch(false);
            return false;
        }
        else {
            return true;
        }
    }

    useEffect(() => {
        setPasswordMatch(password === reenterPassword);

    }, [password, reenterPassword])



    const handleAccSignup = async () => {
        if (checkPassMatch()){
            const data = JSON.stringify({
                "name": email,
                "password": password
            });

            const config = {
                method: 'post',
                url: 'http://127.0.0.1:5000/signup',
                headers: {
                    'Content-Type': 'application/json'
                },
                data : data
            };
            try {
                const res = await axios(config);
                console.log(res);
            } catch (e) {
                console.log(e)
            }
            navigate("/");
        }
    }

    const inputs = [["email", handleEmail], ["password", handlePassword], ["reenterPassword", handleReEntry]];

    return (
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
            <div className={"bg-slate-500 h-screen"}>
                <div className={"w-1/2 mx-auto border-2 flex flex-col border-gray-700 rounded-lg"}>
                    <h1 className={"text-center"}> Sign up by entering your email and password below:</h1>

                        {inputs.map(each => {
                            return (
                                <Inputs placeHolder={each[0]} funcCall={each[1]}></Inputs>
                            )
                        })}
                        <NavigateButton buttonFunction={handleAccSignup} buttonText={"Complete account signup and login"}></NavigateButton>

                    {passwordMatch ? null : <NavigateButton buttonFunction={handleAccSignup} buttonText={"Password don't match"}></NavigateButton>
                    }
                    </div>

            </div>
        </div>


    )

}



export default SignUp;