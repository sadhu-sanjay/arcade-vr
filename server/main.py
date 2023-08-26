
# file Name server.py
# author: Sanjay Goswami

# have a get method which return a random number from 0 to 100 
# keep in mind to use flask and flask cors run on a specific port
from flask import Flask, jsonify
import random
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/credit', methods=['GET'])
def get_random_number():
    random_number = random.randint(1, 100)  # Generate a random number between 1 and 100
    
    print("Request received")
    print("Credit: ", random_number)

    return jsonify({'random_number': random_number})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)







