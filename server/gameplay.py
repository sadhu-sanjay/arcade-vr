import psutil
import subprocess
import time
import random

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

def minimize_window_titled(title):
    """
    Attempts to minimize a window with the specified title using `pygetwindow`.

    Returns:
        int: A random integer the window is minimized successfully,
              otherwise raises an exception.
    """
    try:
        import pygetwindow as gw

        # Handle potential import errors gracefully
        if not gw.__version__:
            raise ImportError("pygetwindow could not be imported. Please install it.")

        result = gw.getWindowsWithTitle(title)
        if result is None:
            raise Exception(f"Window with title '{title}' not found.")
        else:
            print("Found Window ==> ", result)
            result[0].minimize()
            time.sleep(1)  # Consider adjusting the sleep duration based on requirements
            return random.randint(0, 100)  # Provide context if a meaningful value is expected

    except (ImportError, Exception) as e:
        print("Exception: ", e)
        raise e


