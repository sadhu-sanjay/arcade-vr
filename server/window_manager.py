import pyautogui
import time
import pygetwindow as gw
import pyautogui

def maximize_window(title):
    window = gw.getWindowsWithTitle(title)
    if window:
        window[0].maximize()
        pyautogui.press('f11')  # Send F11 key to make it fullscreen
    else:
        print(f"Window with title '{title}' not found.")

# Example usage:
window_title = "Chromium"
maximize_window(window_title)

