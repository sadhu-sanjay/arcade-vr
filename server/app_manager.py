from CONST import BROWSER
from process_manager import is_process_running

def ensure_browser_running():
    result = is_process_running(BROWSER)
    print("Resut", result)



