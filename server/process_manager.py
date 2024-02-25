import subprocess
import time
import psutil

def ensure_process_running(program_path, program_name):
    """
        Don't end this function until the process started successfully
    """
    process_running = is_process_running(program_name)

    if not process_running:
        print("Ok Trying to run thr process")

def is_process_running(program_name):
    """
        finds the running process by its name and returns its PID.
        else return None
        """

    for proc in psutil.process_iter(['pid', 'name']):
        if program_name == proc.info['name']:
            print(f"Process '{process_name}' is already running with PID: {proc.info['pid']}")
            return proc.info['pid']

    print(f"Process '{program_name}' is not running.")
    return None

def run_process(path, max_attempts = 4):
    """Attempts to launch the process at the given path, with error handling.
        
        Args:
            path: The path to the executable (e.g., /usr/bin/code).
            max_attempts: The maxiumm number of attempts to launch the process.

        Prints Informative message and exits gracefully upon failure
    """

    attempt = 0
    while attempt < max_attempts:
        attempt += 1
        try:

            process = subprocess.Popen([path])
            process.wait()

            print("Started {} Successfully".format(path))
            break # Exit the loop if sucessfull
    
        except Exception as err:
            print("Exception==>", err)
            time.sleep(1)

    if max_attempts == attempt:
        print("Failed to Launch Application")

