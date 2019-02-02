### Step 1: Create a Unity package file

1. Save your Unity scene in the Assets folder with a descriptive title.
1. Using the editor, find the created scene in the Project menu
1. Right click on the scene and select “Export Package…”
1. Export the file using default settings. Make sure that “Include dependencies” is enabled.
1. This will create a `.unitypackage` file. We may use this during grading if your executable does not work, so make sure you also submit the data folder.

### Step 2: Create a standalone build

1. Save the project to `C:\Users\<your netid>\<project name>` temporarily, rather than the EWS `U:` drive. Local storage is faster when building.
1. Go to *Edit → Project Settings → Player*. Make sure the “Virtual Reality Supported” box under XR Settings is checked.
1. Go to *File → Build Settings*.
1. Open the scene with your work for the MP.
1. Click “Add Open Scenes”. You must have saved the scene to the assets folder for this to work.
1. Click “Build”.
1. This will create an executable (`.exe`) for running the build, a folder containing your scene data, a "Mono" folder, and `UnityPlayer.dll`.

### Step 3: Copy the Input Manager file

1. Shut down your project.
1. In your project folder, navigate to the `ProjectSettings` subfolder.
1. Find the `InputManager.asset` file, and copy it to your submission folder. This will allow us to
replicate any new gamepad buttons or joysticks you mapped.

### Step 4: Zip the files and submit through Compass

1. Create a zip file containing the following items:
	* The `.unitypackage` created in Step 1
	* The `.exe`, `.dll`, `Mono`, AND **DATA FOLDER** created in Step 2
	* The `InputManager.asset` file found in Step 3
	* A `README.txt` file containing any special instructions or notes you think are relevant for evaluating your assignment.
	* If applicable, your writeup PDF.
1. **Make sure the executable in your submission folder runs correctly on the Rift before submitting.**
1. Name the file by separating NetIDs with underscores- `_cs498vr_MP#_part#.zip`.
EXAMPLE: If `steve1` and `anna2` worked together, the file for MP 1.1 should be called
`steve1_anna2_cs498vr_MP1_1.zip`.
1. Only one partner should submit the zip.

### DO NOT SUBMIT YOUR ENTIRE PROJECT FOLDER
