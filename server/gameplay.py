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


def ensure_process_running(process_name, start_command):
        """
            Don't end this functions until the process started successfully
        """
        while True:
            try:
                # Check if the process is running
                for proc in psutil.process_iter(['pid', 'name']):
                    if process_name in proc.info['name']:
                        print(f"Process '{process_name}' is already running with PID: {proc.info['pid']}")
                        return proc.info['pid']

                # Start the process
                print(f"Starting process '{process_name}' with command: {start_command}")
                # Q: why shell=True? A: https://docs.python.org/3/library/subprocess.html#replacing-shell-pipeline
                subprocess.Popen(start_command, shell=True)

                # Break out of the loop if the process starts successfully
                print("Breakinggg")
                break

            except (ImportError, Exception) as e:
                print("Exception: ", e)
                ### raise e
    
                # Check if the process is running
        for proc in psutil.process_iter(['pid', 'name']):
            if process_name in proc.info['name']:
                print(f"Process '{process_name}' started successfully with PID: {proc.info['pid']}")
                return proc.info['pid']

def make_browser_full_screen():
    """
    Make the browser full screen
    """
    try:
        import pyautogui
        pyautogui.hotkey('f11')
    except Exception as e:
        print("Exception: ", e)
        raise e

        

