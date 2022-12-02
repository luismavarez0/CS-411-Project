import {useNavigate} from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const navToSignIn = (event) => {
        navigate("/SignIn")
    }

    return (
        <div>

        </div>
    )

}



export default SignUp;