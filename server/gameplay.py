def minimize_window_titled(title):
    """
    Attempts to minimize a window with the specified title using `pygetwindow`.

    Args:
        title (str): The exact title of the window to minimize.

    Returns:
        int: A random integer between 0 and 100 if the window is minimized successfully,
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



