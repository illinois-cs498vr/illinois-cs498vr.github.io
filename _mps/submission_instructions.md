### Step 1: Create a .unitypackage file

1. Save your Unity scene in the Assets folder with the title “CS498MP1_1” (for MP 1.1) or
“CS498MP1_2” (for MP 1.2)
2. Using the editor, find the created scene in the Project menu
3. Right click on the scene and select “Export Package…”
4. Export the file using default settings (“Include dependencies” should be checked by default)

### Step 2: Create a standalone game build

1. Go to *Edit → Project Settings → Player*. Make sure the “Virtual Reality Supported” box under
Other Settings or XR Settings is checked.
2. Go to *File → Build Settings*
3. Click “Add Open Scenes”. This will add the currently open scene to the build. You must have
saved the scene to the Assets folder for this to work (you should do that anyways).
4. Save the project to `C:\\Users\\<student’s netid>\\<project name>` temporarily, rather than your
U: drive (local storage is faster when building).
5. Hit “Build”.
6. This should create an executable (`.exe`) for running the build, a folder containing your scene
data, and a UnityPlayer.dll. Make sure this executable runs correctly on the Rift before
submitting.

### Step 3: Copy the Input Manager

1. Shut down your project, and navigate to Your_Project_Folder→ProjectSettings
2. Copy the “InputManager.asset” file, and copy it to your submission folder. This will allow us to
replicate any new gamepad buttons or joysticks you mapped.

### Step 4: Zip the files and submit them through Compass

1. Create a zip file containing the following items:  
a. The .unitypackage created in Step 1  
b. The `.exe`, `.dll`, AND **DATA FOLDER​** created in Step 2  
c. The InputManager.asset object found in Step 3  
d. A `README.txt` file containing any special instructions or notes you think are relevant for
evaluating your assignment.  
e. If applicable, your writeup PDF.  
2. Name the file by separating NetIDs with underscores- `_cs498vr_HW1_part#.zip`. EXAMPLE: If
`steve1` and `anna2` worked together, the file for MP 1.1 should be called
`steve1_anna2_cs498vr_HW1_1.zip`, and `steve1_anna2_cs498vr_HW1_2.zip` for 1.2.  
a. Only one partner should submit the zip.


### DO NOT SUBMIT YOUR ENTIRE PROJECT FOLDER