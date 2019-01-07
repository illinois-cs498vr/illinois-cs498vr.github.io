---
layout: assignment
title: "MP1: The Room"
parts:
  -
    title: MP1.1
    due: September 12th, 2018 @ 11:59 PM
  -
    title: MP1.2
    due: September 19th, 2018 @ 11:59 PM
material:
  -
    name: MP1.1.2 ZIP
    url: https://courses.engr.illinois.edu/cs498vr3/fa2018/mps/MP1.zip
rubric:
  -
    name: Unity Works
    points: 30
    description: Unity Doesn't Crash
  -
    name: really long description wihrvuetviyre ewuvtg weuw e reyjreg wq rh eejitei vhuwh rwejieh
    points: 666
    description: |
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
  -
    name: test
    points: 498
    description: CS 498 VR !!!!!
points: 200
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

#### Lighting:

*At the center of the roof of the room, place a point source of light. This light will change color by pressing the `Tab` key, which is detailed in the scripting section.*

First, read up on the [types of light in Unity](https://docs.unity3d.com/Manual/Lighting.html). Then, go to `GameObject` → `Light` → `Point Light`, and bring a point light into your scene. Place it at `(0,15,0)`.

![Point Light](/img/assignments/mp1/image13.png)

Select your light, and your inspector view should have a `Light` component like this:

![Light Object](/img/assignments/mp1/image6.png)

Of primary importance are the `range` (the radius of your light), color, and intensity values. Set the shadow type to `soft shadows`, and read up on [Unity Shadows](https://docs.unity3d.com/Manual/Shadows.html). Set the `Mode` to `Realtime`, and read up on [Lighting Modes In Unity](https://docs.unity3d.com/Manual/LightModes.html). Set your range and intensity so that your room is brightly lit.

#### Planet and Moon:

*Create a large sphere, and have it float in the middle of the room. Create another, smaller sphere, set it as a child object of the bigger sphere, and move it next to the bigger sphere, 4 units away on the X-axis. You will make it orbit the larger sphere in the Scripting section.*

Create two spheres (`GameObject` → `3D` → `Sphere`). Scale the first sphere to 2 in all directions, and place it in the center of your room. In the Hierarchy view, drag the second sphere onto the first. They should now look like this-

![Spheres](/img/assignments/mp1/image22.png)

What this means is that the second sphere is a child of the first sphere. So now, whenever you change the position, rotation, or size of the parent sphere, its child will make the same movement, rotation, or scaling. Furthermore, the `(0,0,0)` position of the child is now its parent’s position, NOT the global `(0,0,0)`. That is, the child’s position is an offset from the parent’s position. Finally, if the parent rotates, then the child will rotate about its parent’s axes, not its own axes (this will make more sense later). For more information on parent-child relationships, see the [Hierarchy](https://docs.unity3d.com/Manual/Hierarchy.html) page of the Unity Manual.  
Set the position of the child sphere to be (2,0,0), which is four units from the parent sphere on the X-axis (why?).

#### Text:

*Put large text on a wall, detailing the controls and listing your netIDs. Feel free to experiment with what you can put on a canvas, but keep it grandmother appropriate!*

Check out the Unity tutorial on [Creating Worldspace UIs](https://docs.unity3d.com/Manual/HOWTO-UIWorldSpace.html). Create a text canvas by going to `GameObject` → `UI` → `Text`. This will create a Unity Canvas, and some text on that canvas as a child of the canvas. It may also happen to be massive. Not what we want.

To remedy this, select the canvas (not the text) from the hierarchy view. It’s inspector should look like this:

![Canvas Inspector](/img/assignments/mp1/image2.png)

The first thing to do is change the Render mode from "Screen Space - Overlay”, to “World Space”. This changes our canvas from a UI element that is glued to the camera, to an object that is stationary in the world. Traditional UIs do not work well in VR, and we highly, highly advise against sticking any UI elements to the camera in your future MPs and Projects. Always attach UI elements to something in the world (See [this](https://developer.oculus.com/design/latest/concepts/bp-vision/)).

Now that the canvas is a world space object, we can make it a more reasonable size. However, since the "Rect Transform"’s width and height determine the resolution of our text canvas, we cannot set them to be, say, 5x5, because then our text resolution would be 5 pixels by 5 pixels. Set the width and height to 1000 (that is 1000x1000 pixels). Shrink the canvas by setting the scale. We want our canvas to be 10 units by 10 units, and be 1000x1000 pixels, so our scaling is 10/1000 = 0.01. Make sure your text’s Rect Transform has the same width and height as its parent canvas, but leave the scale as 1. Place your canvas against one of the walls. You want to place your text ever so slightly (like, 0.001) in front of the wall it is against to avoid Z-fighting (which is where two objects have the same depth, and Unity can’t figure out which one to render). Below is an example of Z-fighting-

![Z-fighting](/img/assignments/mp1/image24.png)

Now, you can set your text color, size, font, width, whether it wraps or overflows, etc. Make your text have you and your partner’s NetIDs, as well as the controls for your game. Make sure it is big enough for us to read. If the text appears blurry or jagged, then increase the width and height of the canvas and text (to increase the resolution), and scale them down further.

#### Scripting:

You will need to write a couple of scripts for this part of the MP. Read up on [Scripts](https://docs.unity3d.com/Manual/CreatingAndUsingScripts.html) in Unity, and familiarize yourself with C# syntax. It should be very familiar to any of you who have worked with Java. If you are unfamiliar with programming, you can check out this [C# tutorial](https://www.tutorialspoint.com/csharp/). You’ll only need the basics of objects, classes, and variables for now. Throughout this course, you will find the [Scripting API Reference](https://docs.unity3d.com/ScriptReference/) a useful source of information.

1. **Light Switch:** *Pressing the Tab key should change the color of the point light in the room. Pressing it repeatedly should change the color each time, i.e. have it be a toggle or a switch between a series of colors. Make sure that the color change is large enough so it is immediately apparent!*  
Create a new script, called “Lightswitch”, and attach it to your point light. You can attach a script by selecting the light, then dragging the script from the “Assets” tab to the inspector tab on the right. When a Unity Script is attached to a GameObject, that script will run when the game is started. Furthermore, the `this` reference in the script will refer to the object that the script is attached to.  
Our first step is to get the light component of our point light GameObject. Read the [Controlling GameObjects using GetComponent](https://docs.unity3d.com/Manual/ControllingGameObjectsComponents.html) tutorial, then add these lines to your script-  
![Inititalize Light](/img/assignments/mp1/image9.png)  
This will get the light component of the object this script is attached to (calling `GetComponent<>()`” is the same as calling `this.GetComponent<>()`), and set it to the `light` variable when we boot up the game. To register input, we use the [Input](https://docs.unity3d.com/ScriptReference/Input.html) library of Unity, specifically, the `Input.GetKeyDown` method. This will return true when the specified key is first pressed down. Since we want to listen for the `“tab”` key, then in our “Update” function, we write-  
![Get Tab Key Down](/img/assignments/mp1/image9.png)  
Setting the light color is easy, you can either create a new color using the “new Color(red,green,blue)” constructor, or one of the predefined colors. How you change the light is up to you, but the light should visibly change every time we press tab. Maybe you use a boolean variable to track the current color, or an integer (for more than two colors). That is up to you.

1. **Orbit:** *The moon should orbit the planet sphere. The easiest way to do this is to have the planet constantly rotate. Since the moon is a child of the planet, it will also rotate around the planet.*  
GameObjects’ rotation and position is controlled by their [transform](https://docs.unity3d.com/ScriptReference/Transform.html) parameter, accessed with `<GameObjectName>.transform`. This class is well worth looking through, though the most important parts for this class are the `transform.position`, which is the 3 vector of the object’s x, y, and z coordinates in the global frame (as opposed to the local frame, which is relative to this object’s parent’s position), and the `Rotate` method.  
Most of Unity rotations are done using something called quaternions, which are better than the standard way of measuring rotation (the rotation about the x,y,and z axis). You will learn about quaternions, and why they are awesome, in class later. For now, simply know that the `transform.Rotate(Vector3(a,b,c))` will rotate you “a” degrees about the object’s x axis, “b” degrees about the y, and “c” degrees about the z.  
Create a script, called “orbit”, and attach it to the parent sphere. In its update method, add this line-  
![transform.Rotate](/img/assignments/mp1/image21.png)  
This will rotate the parent sphere by 2 degrees about the y axis every frame. 

1. **Room Switch:** *Pressing the ‘2’ key should switch to Part 2!*  
Create the “room switch” script, and attach it to the player. Simply use `Input.GetKeyDown("2")`, and set the player’s `transform.position` to the Vector3 corresponding to the center of your room for MP 1.1.2 (wherever you end up putting it). Don’t forget, the player controller needs to be 1 unit above the ground (since the coordinates for the player refer to its center, and the player is 2 units tall).

1. **Quit key:** *Pressing ‘Esc’ should exit the game.*  
This can be simply added on to the “room switch” script. You will want to add the following lines to the update method-  
![Exit game](/img/assignments/mp1/image19.png)  
`Application.Quit()` quits a Unity application, but it will not stop a game running in editor. So, we check if we are in editor, and stop the editor if we are.

### 1.1.2

#### In 1.1.2 you will be working in the same room as 1.1.1, but with _fewer instructions_.

You are expected to [Google](http://lmgtfy.com/?q=google) the specifics -- [Unity has a great tutorial on practically everything](https://unity3d.com/learn/tutorials) you will need for this MP, and the [Unity Forum](https://forum.unity.com/) also provides high-quality answers for debugging advice.