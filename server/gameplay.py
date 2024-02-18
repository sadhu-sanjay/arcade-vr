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
            sleep(1)  # Consider adjusting the sleep duration based on requirements
            return random.randint(0, 100)  # Provide context if a meaningful value is expected

    except (ImportError, Exception) as e:
        print("Exception: ", e)
        raise e


def start_game():
    """
        Attempts to start the game by minimizng the browser.
        starts the steam.exe and steamvr.exe 

    """

def ensure_process_running(process_name, start_command):

    try:
        import psutil
        import subprocess
        import time

        # Check if the process is running
        for proc in psutil.process_iter(['pid', 'name']):
            if process_name in proc.info['name']:
                print(f"Process '{process_name}' is already running with PID: {proc.info['pid']}")
                return proc.info['pid']

        # Start the process
        print(f"Starting process '{process_name}' with command: {start_command}")
        subprocess.Popen(start_command, shell=True)

        # Wait for the process to start
        time.sleep(5)

        # Check if the process is running
        for proc in psutil.process_iter(['pid', 'name']):
            if process_name in proc.info['name']:
                print(f"Process '{process_name}' started successfully with PID: {proc.info['pid']}")
                return proc.info['pid']

        raise Exception(f"Failed to start process '{process_name}'")

    except (ImportError, Exception) as e:
        print("Exception: ", e)
        raise e

    
