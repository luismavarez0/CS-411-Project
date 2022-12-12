import json
import requests

data_file = open("config.json", "r")
data = json.load(data_file)
APIKey = data["flighAPIKey"]

res = requests.get(f"https://api.flightapi.io/roundtrip/{APIKey}/HAN/SGN/2023-01-10/2023-01-12/1/0/1/Economy/USD")
parsed = res.json()
res = []
for each in parsed["legs"]:
    temp = {
        "departureTime": each["departureTime"],
        "arrivalTime": each["arrivalTime"],
        "departureAirportCode": each["departureAirportCode"],
        "arrivalAirportCode": each["arrivalAirportCode"],
        "price": each["score"] / 2
    }
    res.append(temp)

true_res = {
    "data": res
}

json_formated = json.dumps(true_res, indent=4)

f = open("staticFile.json", "w")
f.write(json_formated)

