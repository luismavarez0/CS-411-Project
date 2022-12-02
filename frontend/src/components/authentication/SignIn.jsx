import {useNavigate} from "react-router-dom";

const SignIn = () => {

    const navigate = useNavigate();

    const navToFlights = (event) => {
        navigate("/flights")
    }
    return(
        <h1>this is sign in</h1>
    )
}

export default SignIn;