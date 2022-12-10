import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Inputs from "./Inputs";
import NavigateButton from "./Navigate";
import axios from "axios";
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


    )

}



export default SignUp;