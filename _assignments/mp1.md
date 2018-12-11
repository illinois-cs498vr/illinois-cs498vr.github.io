---
layout: assignment
title: "MP1: The Room"
parts:
  - title: MP1.1
    due: September 12th, 2018 @ 11:59 PM
  - title: MP1.2
    due: September 19th, 2018 @ 11:59 PM
material: # Formatted Markdown-style, surrounded by quotes (`"[name](url)"`)
  - "[MP1.1.2 ZIP](https://courses.engr.illinois.edu/cs498vr3/fa2018/mps/MP1.zip)"
---

## MP1.1:
Create a new project by clicking through the prompts when you click the NEW button on the top right. Fill in the appropriate details to your heart’s content.

![splash screen](/img/assignments/mp1/image23.png)

Next, read through the following Unity Tutorial, to familiarize yourself with the very basics of the Unity interface:

- [Basic Interface Tutorial](https://docs.unity3d.com/Manual/LearningtheInterface.html)
- [More In Depth Interface Tutorial](https://docs.unity3d.com/Manual/UsingTheEditor.html)

Feel free to look through some more tutorials, to familiarize yourself with the basics of Unity.

### 1.1.1

![Oh hai Mark!](/img/assignments/mp1/image16.png)

**The Room:** Oh hai Mark!

*You will build a cubic room, whose sides are made out of six planes. 
Make sure to orient these planes so the visible sides face inwards, and ensure that the player cannot walk through any of them. 
The room should be 15x15x15 Unity units (aka meters).*

First, create a plane. It can be found in the top bar menus, under `GameObject` → `3D Object`- > `Plane`, as shown below.

![Create plane](/img/assignments/mp1/image3.png)

Now, by default the plane is 10x10 (X x Z) units. In order to make your room 15 units wide, you have to scale the plane. On the right side (in the default editor layout) you will find the Inspector window. This window provides details about the currently selected object. Select the plane in the Scene view, and the Inspector will fill with information and settings for said plane. Find the “Scale” option, and set it to 1.5 on the X and Z to make your plane 15 units wide and long. 

![Inspector](/img/assignments/mp1/image7.png)  
Note: The plane has no thickness, so the value in Y can be any positive integer.

By default, your scene has a directional light in it. This is basically the sun- a light source that illuminates your entire scene from a specified angle, from very far away. You’ll notice that your planes do not block this light. That’s because planes only block light (and render) from one side. Bear this in mind when creating objects in Unity in the future! Please delete the directional light (don’t worry, youll add new lights in later)

In the hierarchy view, you can select your plane, and duplicate it.

![Duplicate](/img/assignments/mp1/image4.png)

From there, simply change the new plane’s rotation and position to make it one of the walls or ceilings. Unity measures position from the center of the object, so if you want your walls to match up with the floor (at height 0), your walls will need to be at 7.5

![Scene window](/img/assignments/mp1/image15.png)

Note: In the image above, rotating the plane also rotated its axes (the blue z axis now points down). Make sure to account for that when rotating and moving objects!

#### Player:

*Place an OVR Player Controller prefab in the room. This prefab handles basic movement, collision, and camera control.*

The lab computers come with the Oculus OVR plugin installed. You can import it by going to `Assets` → `Import Package` → `OculusUtilites`, and then click import.

![Import OculusUtilities](/img/assignments/mp1/image20.png)

If, for whatever reason, you can’t find it, go to the [Oculus Website](https://developer.oculus.com/downloads/package/oculus-utilities-for-unity-5/) and download their Unity package. Unzip the unity package file, and then go to `Assets` → `Import Package` → `Custom Package`. Find the unzipped OculusUntilites.unitypackage, and import all of the items within. You should now have an “OVR” folder in your “Assets” folder.

In this class, you will be primarily using two prefab objects from this package (both found in `OVR` → `Prefabs`). The first prefab, the `OVRCameraRig`, is a camera for the Oculus, that handles all of the movement and position tracking for the oculus, as well as the rendering on the Oculus display. The second prefab, the `OVRPlayerController`, is a more complicated version of the OVRCameraRig. It includes the camera from the OVRCameraRig, but also includes basic joystick movement controls, and a capsule-shaped collider (so that the player doesn’t walk through solid objects). Place an `OVRPlayerController` into your scene, at (0,1,0), and delete the “main camera” object.

There’s just one more thing you need to do to finish enabling VR. Go to `Edit` → `Project Settings` → `Player`, which will open up the player settings in the inspector window. In "XR Settings" (or "Other settings", depending on your version of Unity), check the "Virtual reality supported" option. Now, when you play your scene, it should render inside the Oculus.

**If you have issues importing, please check Piazza to see if others have had your issue, and make a post if you need more information.**

