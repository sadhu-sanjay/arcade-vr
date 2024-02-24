import time
import pygetwindow as gw
import pyautogui

# Function to find the game window
def find_game_window():
    game_window = None
    for window in gw.getAllTitles():
        if "Steam" in window:  # You might need to adjust this condition based on your game's title
            game_window = gw.getWindowsWithTitle(window)[0]
            break
    return game_window

# Function to overlay a countdown timer on top of the game window
def overlay_countdown(game_window, duration):
    if game_window is not None:
        game_window.activate()
        width, height = game_window.size
        pyautogui.moveTo(game_window.left, game_window.top)
        pyautogui.click()

        # Overlay countdown timer
        for i in range(duration, -1, -1):
            pyautogui.moveTo(game_window.left + width // 2, game_window.top + height // 2)
            pyautogui.click()
            pyautogui.typewrite(str(i), interval=0.5)  # Adjust interval as needed
            time.sleep(1)

# Main function
def main():
    game_window = find_game_window()
    if game_window:
        duration = 60  # Set the duration of the countdown timer (in seconds)
        overlay_countdown(game_window, duration)
    else:
        print("Game window not found.")

if __name__ == "__main__":
    main()

