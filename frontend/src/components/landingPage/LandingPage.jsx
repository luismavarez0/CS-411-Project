import {useNavigate} from "react-router-dom";

const LandingPage = () => {
    const buttonStyle = "p-8 border-2 m-8 hover:bg-gray-400";
    const navigate = useNavigate();

    const handelNavigate = (event) => {
        navigate(`/${event.target.id}`)
    }

    return(
        <div className={"bg-slate-700 text-white"}>
            <h1 className={"text-center text-4xl"}>CS411 Group Project</h1>
            <h2 className={"text-center text-xl mt-4"}>The one stop shop for cheap travel</h2>
            <div className={"w-screen h-screen flex justify-center"}>
                <div className={"h-full flex flex-col justify-center"}>
                    <button className={buttonStyle} id={"getFlights"} onClick={handelNavigate}>Get Flights</button>
                    <button className={buttonStyle} id={"getAccommodations"} onClick={handelNavigate}>Get Accommodations</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;