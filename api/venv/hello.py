from flask import Flask
app = Flask(__name__)
@app.route("/")
def hello_word():
    return "<p> Bem vindo api pet</>"
