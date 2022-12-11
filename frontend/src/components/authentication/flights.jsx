import React, { useState } from 'react';

const API_URL = 'https://skyscanner44.p.rapidapi.com/search-extended';
const API_KEY = '21f76fd920msh7ce20a2f4ba2385p1fb7dbjsn9c87f4d63526';

const Flights = () => {
  // State variables to store the form values and the list of flights
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Call the searchFlights function to make the API call
  const searchFlights = async (origin, destination, departureDate, returnDate) => {
    // Validate the input arguments
    if (!origin || !destination || !departureDate) {
      throw new Error('Please enter a valid origin, destination, and departure date.');
    }

    if (origin === destination) {
      throw new Error('Origin cannot be equal to the destination');
    }

    
    // Build the query string using template literals
    let queryString = 
    'adults=1'
    + '&origin=' + origin
    + '&destination=' + destination
    + '&departureDate=' + departureDate
    + '&currency=USD'
    + '&stops=0,1,2'
    + '&startFrom=00:00'
    + '&arriveTo=23:59'
    + '&returnStartFrom=00:00'
    + '&returnArriveTo=23:59';
    
    console.log(queryString);

    if(returnDate) {
      queryString += '&returnDate=' + returnDate;
      console.log(queryString);
    }

    try {
      // Use the await keyword when calling fetch
      const response = await fetch(`${API_URL}?${queryString}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
      });

  
      if (!response.ok) {
        // Check the HTTP status code
        throw new Error(`HTTP error: status ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      if (!data) {
        throw new Error('No data returned from API call');
      }
  
      // Return the data from the API call
      console.log(data);
      return data;
    } catch (error) {
      // Return the error if something goes wrong
      return error;
    }
  };

  //Handle form submission

  const handleSubmit = async (event) => {
    event.preventDefault();
        // Validate the input values
    if (!origin || !destination || !departureDate) {
      setError(new Error('Please enter a valid origin, destination, and departure date.'));
    return;
  }
    if(origin === destination) {
      setError(new Error('Origin cannot be equal to the destination'));
    return;
  }

    // Check if the departure date is in the past
    const departure = new Date(departureDate);
      if (departure < new Date()) {
      setError(new Error('The departure date cannot be in the past.'));
    return;
  }

  // Check if the departure date comes after the return date
    if (returnDate && departure > new Date(returnDate)) {
    setError(new Error('The departure date cannot be after the return date.'));
  return;
  }

  // Set the isLoading state variable to true to show the loading indicator
  setIsLoading(true);
  setError(null);

  try {
    // Call the searchFlights function to make the API call
    const data = await searchFlights(origin, destination, departureDate, returnDate);

    // Update the state with the list of flights
    setFlights(data.results);
    console.log(setFlights);
  } catch (error) {
    // Update the state with the error
    setError(error);

    // Display an error message to the user
    alert(`An error occurred while searching for flights: ${error.message}`);

    // Log the error to the console
    console.error(error);
  } finally {
    // Set the isLoading state variable to false to hide the loading indicator
    setIsLoading(false);
  }
};

  // const renderFlights = () => {
  //   return flights.map(flight => (
  //     <div key={flight.id}>
  //       <p>Origin: {flight.origin}</p>
  //       <p>Destination: {flight.destination}</p>
  //       <p>Departure Date: {flight.departureDate}</p>
  //       <p>Return Date: {flight.returnDate}</p>
  //       <p>Price: {flight.price}</p>
  //     </div>
  //   ));
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="origin">Origin:</label>
      <input
        id="origin"
        type="text"
        value={origin}
        onChange={event => setOrigin(event.target.value)}
      />

      <label htmlFor="destination">Destination:</label>
      <input
        id="destination"
        type="text"
        value={destination}
        onChange={event => setDestination(event.target.value)}
      />

      <label htmlFor="departure-date">Departure Date:</label>
      <input
        id="departure-date"
        type="date"
        value={departureDate}
        onChange={event => setDepartureDate(event.target.value)}
      />

      <label htmlFor="return-date">Return Date:</label>
      <input
        id="return-date"
        type="date"
        value={returnDate}
        onChange={event => setReturnDate(event.target.value)}
      />

      <button type="submit">Search</button>

      {isLoading && <p>Loading...</p>}

      {error && <p>{error.message}</p>}

      {flights.length > 0 && (
        <ul>
          {flights.map(flight => (
            <li key={flight.id}>{flight.name}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Flights;


// import React, { useState } from 'react';

// const API_URL = 'https://skyscanner44.p.rapidapi.com/search-extended';
// const API_KEY = '21f76fd920msh7ce20a2f4ba2385p1fb7dbjsn9c87f4d63526';

// const Flights = () => {
//   // State variables to store the form values and the list of flights
//   const [origin, setOrigin] = useState('');
//   const [destination, setDestination] = useState('');
//   const [departureDate, setDepartureDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const [flights, setFlights] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Handle the submit event of the form
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Validate the input values
//     if (!origin || !destination || !departureDate) {
//       setError(new Error('Please enter a valid origin, destination, and departure date.'));
//       return;
//     }
//     if(origin === destination) {
//       setError(new Error('Origin cannot be equal to the destination'));
//       return;
//     }

//     // Check if the departure date is in the past
//     const departure = new Date(departureDate);
//     if (departure < new Date()) {
//       setError(new Error('The departure date cannot be in the past.'));
//       return;
//     }

//     // Check if the departure date comes after the return date
//     if (returnDate && departure > new Date(returnDate)) {
//       setError(new Error('The departure date cannot be after the return date.'));
//       return;
//     }


//     // Set the isLoading state variable to true to show the loading indicator
//     setIsLoading(true);

//     // Make the API call to search for flights
//     fetch(API_URL, {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': API_KEY,
//           'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
//         },
//         params: {
//           adults: 1,
//           origin: origin,
//           destination: destination,
//           departureDate: departureDate,
//           currency: 'USD',
//           stops: '0,1,2',
//           startFrom: '00:00',
//           arriveTo: '23:59',
//           returnStartFrom: '00:00',
//           returnArriveTo: '23:59'
//         }
//       })
//       .then(response => {
//         if(!response.ok) {
//             // Check the HTTP status code
//             throw new Error('HTTP error: status ' + response.status)
//         } else{
//             return response.json();
//         }
//       })
//       .then(data => {
//         // Update the state with the list of flights
//         setFlights(data.results);
//       }) 
//       .catch(error => {
//         // Update the state with the error
//         setError(error);
//       })
//       .finally(() => {
//         // Set the isLoading state variable to false to hide the loading indicator
//         setIsLoading(false);
//       });
//   };
  
//   return (
//     <form onSubmit={handleSubmit}>
//     <label htmlFor="origin">Origin:</label>
//     <input
//     type="text"
//     id="origin"
//     value={origin}
//     onChange={(event) => setOrigin(event.target.value)}
//     />
//     <label htmlFor="destination">Destination:</label>
//     <input
//     type="text"
//     id="destination"
//     value={destination}
//     onChange={(event) => setDestination(event.target.value)}
//     />
//     <label htmlFor="departureDate">Departure Date:</label>
//     <input
//     type="date"
//     id="departureDate"
//     value={departureDate}
//     onChange={(event) => setDepartureDate(event.target.value)}
//     />
//     <label htmlFor="returnDate">Return Date:</label>
//     <input
//     type="date"
//     id="returnDate"
//     value={returnDate}
//     onChange ={(event) => setReturnDate(event.target.value)}
//     />
//     {error && <p className="error">{error.message}</p>}
//   <button type="submit" disabled={isLoading}>
//     Search
//   </button>
//   {isLoading && <p>Loading...</p>}
//   {flights.length > 0 && (
//     <ul>
//       {flights.map(flight => (
//         <li key={flight.id}>
//           {flight.origin} to {flight.destination}
//         </li>
//       ))}
//     </ul>
//   )}
// </form>
// );
// };


// export default Flights

