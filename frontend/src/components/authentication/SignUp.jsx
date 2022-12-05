import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Inputs from "./Inputs";
import NavigateButton from "./Navigate";
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

    const handleAccSignup = () => {
        if (checkPassMatch()){
            navigate("/"); }
    }

    const inputs = [["email", handleEmail], ["password", handlePassword], ["reenterPassword", handleReEntry]];

    return (
        <div className={"bg-slate-500 h-screen"}>
            <div className={"w-1/2 mx-auto mt-60 border-2 flex flex-col border-gray-700 rounded-lg"}>
                <h1 className={"text-center"}> Sign up by entering your email and password below:</h1>
                <div className={"flex flex-col w-full"}>
                    {inputs.map(each => {
                        return (
                            <Inputs placeHolder={each[0]} funcCall={each[1]}></Inputs>
                        )
                    })}
                    <NavigateButton buttonFunction={handleAccSignup} buttonText={"Complete account signup and login"}></NavigateButton>
                </div>
            </div>
        </div>


    )

}



export default SignUp;