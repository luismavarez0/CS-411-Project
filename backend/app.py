from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route("/signin")
def handle_signin():
    return "this is for sign in"


if __name__ == '__main__':
    app.run()
