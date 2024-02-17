
# file Name server.py
# author: Sanjay Goswami

# have a get method which return a random number from 0 to 100 
# keep in mind to use flask and flask cors run on a specific port
from flask import Flask, jsonify, send_from_directory
import random
from flask_cors import CORS
import os
import pygetwindow as gw

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
@app.route('/start-game', methods=['GET'])
def start_game():
    
    result = gw.getWindowWithTitle("Metacade")

    if result is None:
        print("Metacade not found")
    else:
        print("Metacade ", result)
        # minimize the getWindowWithTitle
        result.minimize()

    print("Paper Plane ", result)

    return jsonify(random.randint(0, 100))

if __name__ == '__main__':
    app.run(use_reloader=True, port=3000, threaded=True)


