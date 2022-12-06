import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Inputs from "./Inputs";
import NavigateButton from "./Navigate";
import axios from 'axios';

const SignUp = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayError, setDisplayError] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }

    const handleSignIn = async () => {
        const data = JSON.stringify({
            "name": email,
            "password": password
        });

        const config = {
            method: 'post',
            url: 'http://127.0.0.1:5000/signin',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        try{
            const authRes = await axios(config);
            if(authRes.data === "use does not exist" || authRes.data === "wrong password") {
                setDisplayError(authRes.data)
            } else {
                navigate("/");
            }

        } catch (error) {
            console.log(error)
        }
    }

    const inputs = [["email", handleEmail], ["password", handlePassword]];

    return (
        <div className={"bg-slate-500 h-screen flex flex-col justify-center"}>
            <div className={"w-1/2 mx-auto border-2 flex flex-col border-gray-700 rounded-lg"}>
                <h1 className={"text-center"}> Sign up by entering your email and password below:</h1>

                {inputs.map((each, index) => {
                    return (
                        <Inputs key={index} placeHolder={each[0]} funcCall={each[1]}></Inputs>
                    )
                })}
                <NavigateButton buttonFunction={handleSignIn} buttonText={"Sign In"}></NavigateButton>
                {displayError === "" ? null : <h1>{displayError}</h1>}
            </div>

        </div>


    )

}



export default SignUp;