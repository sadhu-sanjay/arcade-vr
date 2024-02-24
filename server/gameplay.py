import psutil
import subprocess
import time
import random

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

def maximize_window_titled(title):
    """
    Attempts to maximize a window with the specified title using `pygetwindow`.

    Returns:
        int: A random integer the window is maximized successfully,
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
            result[0].maximize()
            time.sleep(1)  # Consider adjusting the sleep duration based on requirements
            return random.randint(0, 100)  # Provide context if a meaningful value is expected

    except (ImportError, Exception) as e:
        print("Exception: ", e)
        raise e

def test(max_attempts=2):
    attempts = 0
    while attempts < max_attempts:
        try:
            subprocess.Popen("C:\\Program Files (x86)\\Windows Media Player\\wmplayer.exe", shell=True)
        except (ImportError, Exception) as e:
            print("Exception: ", e)
            attempts += 1
            time.sleep(5)

    print("FAILED TO START PROCESS")


def ensure_process_running(process_name, start_command, max_attempts=2):
    """
        Don't end this function until the process started successfully
    """
    attempts = 0
    while attempts < max_attempts:
        try:
            # Check if the process is running
            for proc in psutil.process_iter(['pid', 'name']):
                if process_name in proc.info['name']:
                    print(f"Process '{process_name}' is already running with PID: {proc.info['pid']}")
                    return proc.info['pid']

            # Start the process
            print(f"Starting process '{process_name}' with command: {start_command}")
            subprocess.Popen(start_command, shell=True)

            # Check if the process started successfully
            for proc in psutil.process_iter(['pid', 'name']):
                if process_name in proc.info['name']:
                    print(f"Process '{process_name}' started successfully with PID: {proc.info['pid']}")
                    return proc.info['pid']

        except (ImportError, Exception) as e:
            print("Exception: ", e)
            attempts += 1
            time.sleep(5)  # Wait for 5 seconds before trying again

    print("FAIELD TO START PROCESS")
    return None


