1. Flight + best hotel rates 

Essentially, we want to combine the functionality of Google Flights and hotel booking websites into one centralized location. Users will select their origin and destination, the dates of the trip, and how many travelers there are. The program will then output the cheapest flight and hotel combinations. The program will then allow for the user to automatically export the trip data to their Google Calendar. Amadeus seems to be the best available API option as it can search over 500 different airlines for the best prices given an itinerary. For hotel rates, either Amadeus, Impala, or Expedia can be used. The biggest issue is finding lodging APIs that are either publicly available or free, as many popular travel websites’ APIs (Airbnb, TripAdvisor, Priceline) are not readily available.

APIs: Amadeus, Impala, Expedia<br>
OAuth: Google Calendar

2. The fastest method of transportation in Boston

There are many different methods of traveling in Boston - walking, cycling, ridesharing, and public transportation. Many different apps exist that estimate how long a trip will take, but we want to combine it all into one central application. The user will select their origin and final destination and then the application will output the fastest option, along with the others and the estimated price if it requires money, in case the user wants an alternative. We plan on using Mapbox’s API for walking and cycling route estimates. For cycling, we will try to combine walking and cycling times by locating the closest Bluebikes stations from the origin and final destination. For rideshare, Uber and Lyft both have accessible APIs. We will use OAuth to allow for the user to book with these services directly from the application. For public transportation, the MBTA V3 API has schedules for Boston’s subway and bus system, which can be combined to calculate the trip duration. 

APIs: Mapbox, Uber, Lyft, MBTA V3<br>
OAuth: Uber, Lyft
