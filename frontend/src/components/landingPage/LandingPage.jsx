import {useNavigate} from "react-router-dom";

const LandingPage = () => {
    const buttonStyle = "p-8 border-2 m-8 hover:bg-gray-400";
    const navigate = useNavigate();

    const handelNavigate = (event) => {
        navigate(`/${event.target.id}`)
    }

    return(
        <div>
            <h1 className={"text-center"}>The landing page</h1>
            <div className={"w-screen h-screen flex justify-center"}>
                <div className={"h-full flex flex-col justify-center"}>
                    <button className={buttonStyle} id={"signin"} onClick={handelNavigate}>Sign In</button>
                    <button className={buttonStyle} id={"signup"} onClick={handelNavigate}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;