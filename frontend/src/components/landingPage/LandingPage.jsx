import {useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";

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
            client_id: "114840074781-2u6bn2dkmmk63bbme30giqkfe5grm8c9.apps.googleusercontent.com", /* 411 client id */
            /*
                ^ this oauth only works for the test users defined in the google cloud console
                probably need to add all of our google emails or something so all of us can utilize this
            */

            //client_id: "429662506993-l4cj262oskf647nnm9bdlsgislf2shpa.apps.googleusercontent.com", /* my client id to test it */
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
            <h1 className={"text-center text-4xl"}>CS411 Group Project</h1>
            <h2 className={"text-center text-xl mt-4"}>The one stop shop for cheap travel</h2>

            <div className={"w-screen h-screen flex justify-center"}>
                <div className={"h-full flex flex-col justify-center"}>

                    <div id="signInDiv"></div>
                    {/* Show some user info when signed in */}
                    { user &&
                        <div>
                            <img src={user.picture}></img>
                            <h3>{user.name}</h3>
                        </div>
                    }

                    {/* Show sign out button if user is signed in */}
                    { Object.keys(user).length !== 0 &&
                        <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
                    }       
                    <button className={buttonStyle} id={"signUp"} onClick={navToSignUp}>Click here to sign up</button>
                    <button className={buttonStyle} id={"flights"} onClick={navToFlights}>Click here to find flights</button>
                    <button className={buttonStyle} id={"accommodations"} onClick={navToAccommodations}>Click here to find accommodations</button>
                    <button className={buttonStyle} id={"signin"} onClick={handleSignin}>Click here to sign in</button>


                    <div id="signInDiv"></div>
                    {/* Show some user info when signed in */}
                    { user &&
                        <div>
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