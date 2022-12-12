from flask import Flask
from flask import request
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route("/signin", methods=['GET', 'POST'])
def handle_signin():
    print(request.data)
    user_data = json.loads(request.data)
    user_name = user_data["name"]
    user_password = user_data["password"]
    with open("./userInfo.json", "r") as f:
        user_file = json.load(f)
        if user_name not in user_file.keys():
            return "use does not exist"
        else:
            return user_name if user_file[user_name] == user_password else "wrong password"


@app.route("/signup", methods=['GET', 'POST'])
def handle_signup():
    user_data = json.loads(request.data)
    user_name = user_data["name"]
    user_password = user_data["password"]
    with open("./userInfo.json", "r") as f:
        user_file = json.load(f)
        if user_name in user_file.keys():
            return "user already exist"
        else:
            user_file[user_name] = user_password
            with open("./userInfo.json", "w") as g:
                json.dump(user_file, g)

    return "this is working"


@app.route("/getflight", methods=["GET", "POST"])
def get_flight():
    user_data = request.args
    origin = user_data["origin"]
    destination = user_data["destination"]

    data_file = open("config.json", "r")
    data = json.load(data_file)
    APIKey = data["flighAPIKey"]
    data_file.close()

    res = requests.get(f"https://api.flightapi.io/roundtrip/{APIKey}/{origin}/{destination}/2023-01-10/2023-01-12/1/0/1/Economy/USD")
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

    return res

if __name__ == '__main__':
    app.run()
