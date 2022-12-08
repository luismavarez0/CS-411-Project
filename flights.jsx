import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://skyscanner44.p.rapidapi.com/search-extended';
const API_KEY = '21f76fd920msh7ce20a2f4ba2385p1fb7dbjsn9c87f4d63526';

const Flights = () => {
    // State variables to store the input values, the list of flights, and the error
// State variables to store the form values and the list of flights
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    
    // Handle the submit event of the form
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Validate the input values
        if (!origin || !destination || !departureDate) {
            setError(new Error('Please enter a valid origin, destination, and departure date.'));
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
    
        // Make the API call to search for flights
        axios
          .get('https://skyscanner44.p.rapidapi.com/search-extended', {
            params: {   
              adults: 1,
              origin: origin,
              destination: destination,
              departureDate: departureDate,
              currency: 'EUR',
              stops: '0,1,2',
              duration: 50,
              startFrom: '00:00',
              arriveTo: '23:59',
              returnStartFrom: '00:00',
              returnArriveTo: '23:59',
            },
            headers: {
                'X-RapidAPI-Key': '21f76fd920msh7ce20a2f4ba2385p1fb7dbjsn9c87f4d63526',
                'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
            },
        }).then((response) => {
      // Update the state with the list of flights
      setFlights(response.data.results);
    })
    .catch((error) => {
      // Update the state with the error
      setError(error);
    })
    .finally(() => {
      // Set the isLoading state variable to false to hide the loading indicator
      setIsLoading(false);
    });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="origin">Origin:</label>
        <input
          type="text"
          id="origin"
          value={origin}
          onChange={(event) => setOrigin(event.target.value)}
        />
  
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
  
        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          value={departureDate}
          onChange={(event) => setDepartureDate(event.target.value)}
        />
  
        <label htmlFor="returnDate">Return Date:</label>
        <input
          type="date"
          id="returnDate"
          value={returnDate}
          onChange={(event) => setReturnDate(event.target.value)}
          />

        <button type="submit">Search Flights</button>

        {isLoading && <p>Loading...</p>}

        {error && <p>Error: {error.message}</p>}

        {!isLoading && flights.length === 0 && !error && <p>No flights found.</p>}

        {!isLoading && flights.length > 0 && (
            <ul>{
                flights.map((flight) => (
            <li key={flight.id}>
        {flight.origin} to {flight.destination} on {flight.departureDate}: {flight.price} {flight.currency}
                </li>
            ))}
        </ul>
        )}
        </form>
    );
                };
    

export default Flights;