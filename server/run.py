import subprocess

def run_process(max_attempts = 4):

    attempt = 0
    while attempt < max_attempts:
        attempt += 1
        try:

            vscode_path = "/usr/bin/codee"  # Adjust path if needed
            result =  process = subprocess.Popen([vscode_path])
            print("result", result)
            # wait for the process to finish execution
            waiting = process.wait()
            print("wait ===>", waiting)
            print("vs code has finished execution, but the window might not be fully open yet.")

        except Exception as err:
            
            print("Exception==>", err)
            



run_process()

