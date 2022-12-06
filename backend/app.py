from flask import Flask
from flask import request
import json

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route("/signin")
def handle_signin():
    user_data = json.loads(request.data)
    user_name = user_data["name"]
    user_password = user_data["password"]
    with open("./userInfo.json", "r") as f:
        user_file = json.load(f)
        if user_name not in user_file.keys():
            return "use does not exist"
        else:
            return user_name if user_file[user_name] == user_password else "wrong password"


if __name__ == '__main__':
    app.run()
