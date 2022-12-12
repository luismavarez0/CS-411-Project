import {useNavigate} from "react-router-dom";
import {useState} from "react";
import NavigateButton from "./Navigate";
import Inputs from "./Inputs";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const Flights = () => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [foundFlight, setFoundFlight] = useState([]);
  const flightDisplayStyle = "basis-1/5 mx-2"

  const handleOrigin = (event) => {
    setOrigin(event.target.value);
  }

  const handleDestination = (event) => {
    setDestination(event.target.value);
  }

  const findFlights = async () => {
    const config = {
      method: 'get',
      url: `http://127.0.0.1:5000/getflight?origin=${origin}&destination=${destination}`,
      headers: { }
    };
    try {
      const res = await axios(config);
      setFoundFlight(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  return(
      <div className={"text-center bg-slate-500 h-screen mx-auto border-2 flex flex-col border-gray-700 rounded-lg"}>
        <h1>Enter your origin followed by your destination below:</h1>
        <Inputs placeHolder={"origin"} funcCall={handleOrigin} ></Inputs>
        <Inputs placeHolder={"destination"} funcCall={handleDestination}></Inputs>
        <NavigateButton buttonFunction={findFlights} buttonText={"Click here to find flights"}></NavigateButton>


        <div className={"h-screen border-2 border-gray-700 rounded-lg w-2/3 mx-auto"}>
          <div className={"flex"}>
            <span className={flightDisplayStyle}>arrivalAirportCode</span>
            <span className={flightDisplayStyle}>arrivalTime</span>
            <span className={flightDisplayStyle}>departureAirportCode</span>
            <span className={flightDisplayStyle}>departureTime</span>
            <span className={flightDisplayStyle}>price</span>
          </div>
          <hr />
          {foundFlight.map((each, index) => {
            return (
                <div className={"flex"} key={uuidv4()}>
                  <span className={flightDisplayStyle} key={uuidv4()}>{each.arrivalAirportCode}</span>
                  <span className={flightDisplayStyle} key={uuidv4()}>{each.arrivalTime}</span>
                  <span className={flightDisplayStyle} key={uuidv4()}>{each.departureAirportCode}</span>
                  <span className={flightDisplayStyle} key={uuidv4()}>{each.departureTime}</span>
                  <span className={flightDisplayStyle} key={uuidv4()}>{each.price}</span>
                </div>
            )
          })}
        </div>
      </div>
  )
}

export default Flights;