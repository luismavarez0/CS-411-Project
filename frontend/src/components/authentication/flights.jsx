import React from "react";
import axios from 'axios';

const Flights = () => {
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1418f00a1cmsh0b0a8ff349c39a5p1d1310jsn01479a90c739',
// 		'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
// 	}
  
// };

// fetch('https://skyscanner44.p.rapidapi.com/search-extended?adults=1&origin=MUC&destination=BER&departureDate=2022-10-11&currency=EUR&stops=0%2C1%2C2&duration=50&startFrom=00%3A00&arriveTo=23%3A59&returnStartFrom=00%3A00&returnArriveTo=23%3A59', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1418f00a1cmsh0b0a8ff349c39a5p1d1310jsn01479a90c739',
      'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
    }
  }
  const params = new URLSearchParams({
    adults: '1',
    origin: 'BOS',
    destination: 'LGA',
    departureDate: '2022-12-15',
    returnDate: '2022-12-17',
    currency: 'EUR',
    stops: '0,1,2',
    duration: '50',
    startFrom: '00:00',
    arriveTo: '23:59',
    returnStartFrom: '00:00',
    returnArriveTo: '23:59'
  })
  
  const url = `https://skyscanner44.p.rapidapi.com/search-extended?${ params.toString() }`
  console.log(url)

  fetch(url, options)
	  .then(response => response.json())
	  .then(response => console.log(response))
	  .catch(err => console.error(err));
};

export default Flights;