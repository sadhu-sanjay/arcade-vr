
# file Name server.py
# author: Sanjay Goswami

# have a get method which return a random number from 0 to 100 
# keep in mind to use flask and flask cors run on a specific port
from flask import Flask, jsonify, send_from_directory
import random
from flask_cors import CORS
import os
import pygetwindow as gw

from CONST import WINDOW_TITLE


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
    
    result = gw.getWindowsWithTitle(WINDOW_TITLE)

    try:
        if result is None:
            print("Metacade not found")
        else:
            print("Metacade ", result)
            # minimize the first window
            result[0].minimize()

            time.sleep(1)
    
        return jsonify(random.randint(0, 100))

    except Exception as e:
        # if error return it 
        print(e)
        return jsonify(e)

if __name__ == '__main__':
    app.run(use_reloader=True, port=3000, threaded=True)


