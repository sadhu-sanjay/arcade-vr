
def minimize_window_titled(title):
    try:
        import pygetwindow as gw
        result = gw.getWindowsWithTitle(title)
        if result is None:
            print("Metacade not found")
            # raise an exception
            raise Exception(title + " not found");
        else:
            print("Found Window ==> ", result)
            # minimize the first window
            result[0].minimize()
            sleep(1)
            return jsonify(random.randint(0, 100))
    except Exception as e:
        # if error return it 
        print("Error: ", e.message)
        return jsonify(e.message)
