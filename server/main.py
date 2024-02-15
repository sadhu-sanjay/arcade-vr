
# file Name server.py
# author: Sanjay Goswami

# have a get method which return a random number from 0 to 100 
# keep in mind to use flask and flask cors run on a specific port
from flask import Flask, jsonify, send_from_directory
import random
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='../dist')
CORS(app)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# define a route for get method named start game
@app.route('/startgame', methods=['GET'])
def start_game():
    # when this route is called minimize the chrome application . keep in this is a windows 
    # specific command
    os.system("start /min chrome http://localhost:5000/")

    return jsonify({'number': random.randint(0, 100)})

if __name__ == '__main__':

    app.run(use_reloader=True, port=5000, threaded=True)

