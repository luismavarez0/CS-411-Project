import {useNavigate} from "react-router-dom";

const LandingPage = () => {
    const buttonStyle = "p-8 border-2 m-8 hover:bg-gray-400";
    const navigate = useNavigate();

    const navToSignUp = (event) => {
        navigate("/signup")
    }

    const navToSignIn = (event) => {
        navigate("/signin")
    }



    return(
        <div className={"bg-slate-700 text-white"}>
            <h1 className={"text-center text-4xl"}>CS411 Group Project</h1>
            <h2 className={"text-center text-xl mt-4"}>The one stop shop for cheap travel</h2>
            <div className={"w-screen h-screen flex justify-center"}>
                <div className={"h-full flex flex-col justify-center"}>
                    <button className={buttonStyle} id={"signUp"} onClick={navToSignUp}>Click here to sign up</button>
                    <button className={buttonStyle} id={"SignIn"} onClick={navToSignIn}>Click here to sign in</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;