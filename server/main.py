
# file Name server.py
# author: Sanjay Goswami

# have a get method which return a random number from 0 to 100 
# keep in mind to use flask and flask cors run on a specific port
from flask import Flask, jsonify, send_from_directory
import random
from flask_cors import CORS
import os
from time import sleep
from CONST import WINDOW_TITLE
from process_manager import ensure_process_running, is_process_running
import window_manager

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
    """
    Attempts to minimize the window with the specified title, returning a JSON response.

    Returns:
        flask.Response: A JSON response with either a random integer or an error message.
    """
    try:
        result = minimize_window_titled(WINDOW_TITLE)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    
    #ensure_process_running("/usr/bin/code", "vscode")
    is_process_running("code")

    app.run(use_reloader=True, port=3000, threaded=True)

