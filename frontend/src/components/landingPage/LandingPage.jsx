import {useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import logo from './logo.png';

const LandingPage = () => {
    const buttonStyle = "p-8 border-2 m-8 hover:bg-gray-400";
    const navigate = useNavigate();

    const navToSignUp = (event) => {
        navigate("/signup")
    }

    const navToFlights = (event) => {
        navigate("/flights")
    }

    const navToAccommodations = (event) => {
        navigate("/accommodations")
    }


    // Google oauth stuff
    const [user, setUser] = useState({});

    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }
    function handleSignOut(event){
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    function handleSignin() {
        navigate("/signin");
    }
    
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            //client_id: "114840074781-2u6bn2dkmmk63bbme30giqkfe5grm8c9.apps.googleusercontent.com", /* 411 client id */
            /*
                ^ this oauth only works for the test users defined in the google cloud console
                probably need to add all of our google emails or something so all of us can utilize this
            */

            client_id: "429662506993-l4cj262oskf647nnm9bdlsgislf2shpa.apps.googleusercontent.com", /* my client id to test it */
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
    );
    
    // Google one tap sign in
    google.accounts.id.prompt();

    }, []);

    return(
            <div className={"bg-slate-500 text-white"}>
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



                <h2 className={"text-center text-xl mt-4"}>The one stop shop for cheap travel</h2>
                <h3 className={"text-center text-xl mt-4"}>Created by: Milan, Luis, Ashley, Sam, Muntasir</h3>


                <div className={"w-screen h-screen flex justify-center"}>
                    <div className={"h-full flex flex-col justify-center"}>

                        <button className={buttonStyle} id={"signUp"} onClick={navToSignUp}>Click here to sign up</button>
                        <button className={buttonStyle} id={"flights"} onClick={navToFlights}>Click here to find flights</button>
                        <button className={buttonStyle} id={"accommodations"} onClick={navToAccommodations}>Click here to find accommodations</button>
                        <button className={buttonStyle} id={"signin"} onClick={handleSignin}>Click here to sign in</button>


                        <div id="signInDiv" class="content-center"></div>
                        {/* Show some user info when signed in */}
                        { user &&
                            <div class="content-center">
                                <img src={user.picture}></img>
                                <h3>{user.name}</h3>
                            </div>
                        }

                        {/* Show sign out button if user is signed in */}
                        { Object.keys(user).length !== 0 &&
                            <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
                        }
                    </div>
                </div>
            </div>  
    )
}

export default LandingPage;