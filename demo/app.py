import tkinter as tk

root = tk.Tk()
root.title("Your Application")

# Make the window full screen
root.attributes('-fullscreen', True)

# Create two frames
frame1 = tk.Frame(root, bg='blue')
frame2 = tk.Frame(root, bg='red')

# Pack the frames side by side
frame1.pack(side='left', fill='both', expand=True)
frame2.pack(side='right', fill='both', expand=True)

root.mainloop()
