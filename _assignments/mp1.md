---
layout: assignment
title: "MP1: The Room"
parts:
  -
    title: MP1.1
    due: Jan. 28, 2019 @ 11:59 PM
  -
    title: MP1.2
    due: Feb. 4, 2019 @ 11:59 PM
material:
  -
    name: MP1.1.2 ZIP
    url: /mps/MP1.zip
points: 200
rubric:
  -
    name: 1.1.1
  -
    name: Room
    points: 5
    description: 15x15 room made from 6 planes, with OVRPlayerController
  - 
    name: Light
    points: 5
    description: Bright point light in center of room ceiling
  - 
    name: Planet and moon
    points: 10
    description: Planet and rotating moon in center of room
  - 
    name: Text
    points: 5
    description: Text displays NetIDs and controls 
  -
    name: Light Switch
    points: 5
    description: Light changes color every time tab key is pressed
  -
    name: Room Switch
    points: 5
    description: Pressing “2” moves on to 1.1.2
  -
    name: Quit
    points: 5
    description: Pressing “Esc” quits the game
  - 
    name: 1.1.2
  -
    name: Room Switch
    points: 5
    description: Pressing “1” moves back to 1.1.1
  -
    name: Room
    points: 10
    description: Room is Hexagonal, with slanted roof and prefab door. Roof and ceiling have flat, colored texture.
  -
    name: Material 1
    points: 5
    description: Created material with albedo and normal map, placed on wall
  -
    name: Material 2- tiling
    points: 5
    description: 2 walls have altered tiling
  -
    name: Material 3- smoothness/metallicity
    points: 5
    description: 2 walls have altered smoothness and/or mentallicity
  -
    name: Trigger zone
    points: 10
    description: When walking beneath floating ball, it falls to the floor
  -
    name: 1.2.1
  
  -
    name: Room
    points: 10
    description: Built a room, with a window, and colored/textured walls.
  -
    name: Skybox
    points: 10
    description: Custom Skybox in sky
  -
    name: Directional Light
    points: 5
    description: Has directional light, which matches skybox
  -
    name: Trigger Zone Lights
    points: 5
    description: Has at least 4 trigger zones with lights
  -
    name: Random Trigger Zone
    points: 5
    description: Active trigger zone is random
  -
    name: Xbox Controls
    points: 25
    description: Can press “A” on controller to get points when in lit trigger zone, “start” to quit
  -
    name: Score Display
    points: 15
    description: Score is tracked and displayed clearly on wall
  -
    name: Trigger Zone Timer
    points: 25
    description: Every 3 seconds, active trigger zone changes
  -
    name: Extra Credit
    points: 20
    description: Built nontrivial room geometry with blender, sketchup, or probuilder
  
  -
    name: 1.2.2
  -
    name: Experience 1
    points: 5
    description: Likes and dislikes for an Oculus/Steam experience
  -
    name: Experience 2
    points: 5
    description: Likes and dislikes for a student experience
  -
    name: Experience 3
    points: 5
    description: Likes and dislikes for any experience
  -
    name: Experience 4
    points: 5
    description: Likes and dislikes for any experience


---

<!-- this page only, for markdownified TeX -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML' async></script>

### Section Quick Links
- [MP 1.1.1](#111)
- [MP 1.1.2](#112)
- [MP 1.2.1](#121)
- [MP 1.2.2](#122)
- [Submission Instructions](#submission-instructions)
- [Rubric](#rubric)

---

## MP1.1:
Create a new project by clicking through the prompts when you click the NEW button on the top right. Fill in the appropriate details to your heart’s content.

![splash screen](/img/assignments/mp1/image23.png)

Next, read through the following Unity Tutorial, to familiarize yourself with the very basics of the Unity interface:

- [Basic Interface Tutorial](https://docs.unity3d.com/Manual/LearningtheInterface.html)
- [More In Depth Interface Tutorial](https://docs.unity3d.com/Manual/UsingTheEditor.html)

Feel free to look through some more tutorials, to familiarize yourself with the basics of Unity.

---

### 1.1.1

![Oh hai Mark!](/img/assignments/mp1/image16.png)

**The Room:** Oh hai Mark!

*You will build a cubic room out of six planes. 
Make sure to orient these planes so the visible sides face inwards, and ensure that the player cannot walk through any of them. 
The room should be 15x15x15 Unity units (aka meters).*

First, create a plane. It can be found in the top bar menus, under `GameObject` → `3D Object` → `Plane`, as shown below.

![Create plane](/img/assignments/mp1/image3.png)

Now, by default the plane is 10x10 $$ (X \times Z) $$ units. In order to make your room 15 units wide, you have to scale the plane. On the right side (in the default editor layout) you will find the Inspector window. This window provides details about the currently selected object. Select the plane in the Scene view, and the Inspector will fill with information and settings for said plane. Find the “Scale” option, and set it to 1.5 on the $$ X $$ and $$ Z $$ to make your plane 15 units wide and long. 

![Inspector](/img/assignments/mp1/image7.png)  
Note: The plane has no thickness, so the value in $$ Y $$ can be any positive integer.

By default, your scene has a directional light in it. This is basically the sun- a light source that illuminates your entire scene from a specified angle, from very far away. You’ll notice that your planes do not block this light. That’s because planes only block light (and render) from one side. Bear this in mind when creating objects in Unity in the future! Please delete the directional light (don’t worry, youll add new lights in later).

In the hierarchy view, you can select your plane, and duplicate it.

![Duplicate](/img/assignments/mp1/image4.png)

From there, simply change the new plane’s rotation and position to make it one of the walls or ceilings. Unity measures position from the center of the object, so if you want your walls to match up with the floor (at height 0), your walls will need to be at 7.5

![Scene window](/img/assignments/mp1/image15.png)

Note: In the image above, rotating the plane also rotated its axes (the blue z axis now points down). Make sure to account for that when rotating and moving objects!

---

#### Player:

*Place an OVR Player Controller prefab in the room. This prefab handles basic movement, collision, and camera control.*

The lab computers come with the Oculus OVR plugin installed. You can import it by going to `Assets` → `Import Package` → `OculusUtilites`, and then click import.

![Import OculusUtilities](/img/assignments/mp1/image20.png)

If, for whatever reason, you can’t find it, go to the [Oculus Website](https://developer.oculus.com/downloads/package/oculus-utilities-for-unity-5/) and download their Unity package. Unzip the unity package file, and then go to `Assets` → `Import Package` → `Custom Package`. Find the unzipped OculusUntilites.unitypackage, and import all of the items within. You should now have an “OVR” folder in your “Assets” folder.

In this class, you will be primarily using two prefab objects from this package (both found in `OVR` → `Prefabs`). The first prefab, the `OVRCameraRig`, is a camera for the Oculus, that handles all of the movement and position tracking for the oculus, as well as the rendering on the Oculus display. The second prefab, the `OVRPlayerController`, is a more complicated version of the OVRCameraRig. It includes the camera from the OVRCameraRig, but also includes basic joystick movement controls, and a capsule-shaped collider (so that the player doesn’t walk through solid objects). Place an `OVRPlayerController` into your scene, at (0,1,0), and delete the “main camera” object.

There’s just one more thing you need to do to finish enabling VR. Go to `Edit` → `Project Settings` → `Player`, which will open up the player settings in the inspector window. In `XR Settings` (or `Other settings`, depending on your version of Unity), check the `Virtual reality supported` option. Now, when you play your scene, it should render inside the Oculus.

**If you have issues importing, please check Piazza to see if others have had your issue, and make a post if you need more information.**

---

#### Lighting:

*At the center of the roof of the room, place a point source of light. This light will change color by pressing the `Tab` key, which is detailed in the scripting section.*

First, read up on the [types of light in Unity](https://docs.unity3d.com/Manual/Lighting.html). Then, go to `GameObject` → `Light` → `Point Light`, and bring a point light into your scene. Place it at `(0,15,0)`.

![Point Light](/img/assignments/mp1/image13.png)

Select your light, and your inspector view should have a `Light` component like this:

![Light Object](/img/assignments/mp1/image6.png)

Of primary importance are the `range` (the radius of your light), color, and intensity values. Set the shadow type to `soft shadows`, and read up on [Unity Shadows](https://docs.unity3d.com/Manual/Shadows.html). Set the `Mode` to `Realtime`, and read up on [Lighting Modes In Unity](https://docs.unity3d.com/Manual/LightModes.html). Set your range and intensity so that your room is brightly lit.

---

#### Planet and Moon:

*Create a large sphere, and have it float in the middle of the room. Create another, smaller sphere, set it as a child object of the bigger sphere, and move it next to the bigger sphere, 4 units away on the X-axis. You will make it orbit the larger sphere in the Scripting section.*

Create two spheres (`GameObject` → `3D` → `Sphere`). Scale the first sphere to 2 in all directions, and place it in the center of your room. In the Hierarchy view, drag the second sphere onto the first. They should now look like this-

![Spheres](/img/assignments/mp1/image22.png)

What this means is that the second sphere is a child of the first sphere. So now, whenever you change the position, rotation, or size of the parent sphere, its child will make the same movement, rotation, or scaling. Furthermore, the `(0,0,0)` position of the child is now its parent’s position, NOT the global `(0,0,0)`. That is, the child’s position is an offset from the parent’s position. Finally, if the parent rotates, then the child will rotate about its parent’s axes, not its own axes (this will make more sense later). For more information on parent-child relationships, see the [Hierarchy](https://docs.unity3d.com/Manual/Hierarchy.html) page of the Unity Manual.  
Set the position of the child sphere to be (2,0,0), which is four units from the parent sphere on the X-axis (why?).

---

#### Text:

*Put large text on a wall, detailing the controls and listing your netIDs. Feel free to experiment with what you can put on a canvas, but keep it grandmother appropriate!*

Check out the Unity tutorial on [Creating Worldspace UIs](https://docs.unity3d.com/Manual/HOWTO-UIWorldSpace.html). Create a text canvas by going to `GameObject` → `UI` → `Text`. This will create a Unity Canvas, and some text on that canvas as a child of the canvas. It may also happen to be massive. Not what we want.

To remedy this, select the canvas (not the text) from the hierarchy view. Its inspector should look like this:

![Canvas Inspector](/img/assignments/mp1/image2.png)

The first thing to do is change the Render mode from `Screen Space - Overlay`, to `World Space`. This changes our canvas from a UI element that is glued to the camera, to an object that is stationary in the world. Traditional UIs do not work well in VR, and we highly, highly advise against sticking any UI elements to the camera in your future MPs and Projects. Always attach UI elements to something in the world (See [this](https://developer.oculus.com/design/latest/concepts/bp-vision/)).

Now that the canvas is a world space object, we can make it a more reasonable size. However, since the "Rect Transform"’s width and height determine the resolution of our text canvas, we cannot set them to be, say, 5x5, because then our text resolution would be 5 pixels by 5 pixels. Set the width and height to 1000 (that is 1000x1000 pixels). Shrink the canvas by setting the scale. We want our canvas to be 10 units by 10 units, and be 1000x1000 pixels, so our scaling is 10/1000 = 0.01. Make sure your text’s Rect Transform has the same width and height as its parent canvas, but leave the scale as 1. Place your canvas against one of the walls. You want to place your text ever so slightly (like, 0.001) in front of the wall it is against to avoid Z-fighting (which is where two objects have the same depth, and Unity can’t figure out which one to render). Below is an example of Z-fighting-

![Z-fighting](/img/assignments/mp1/image24.png)

Now, you can set your text color, size, font, width, whether it wraps or overflows, etc. Make your text have you and your partner’s NetIDs, as well as the controls for your game. Make sure it is big enough for us to read. If the text appears blurry or jagged, then increase the width and height of the canvas and text (to increase the resolution), and scale them down further.

---

#### Scripting:

You will need to write a couple of scripts for this part of the MP. Read up on [Scripts](https://docs.unity3d.com/Manual/CreatingAndUsingScripts.html) in Unity, and familiarize yourself with C# syntax. It should be very familiar to any of you who have worked with Java. If you are unfamiliar with programming, you can check out this [C# tutorial](https://www.tutorialspoint.com/csharp/). You’ll only need the basics of objects, classes, and variables for now. Throughout this course, you will find the [Scripting API Reference](https://docs.unity3d.com/ScriptReference/) a useful source of information.

1. **Light Switch:** *Pressing the Tab key should change the color of the point light in the room. Pressing it repeatedly should change the color each time, i.e. have it be a toggle or a switch between a series of colors. Make sure that the color change is large enough so it is immediately apparent!*  
Create a new script, called “Lightswitch”, and attach it to your point light. You can attach a script by selecting the light, then dragging the script from the “Assets” tab to the inspector tab on the right. When a Unity Script is attached to a GameObject, that script will run when the game is started. Furthermore, the `this` reference in the script will refer to the object that the script is attached to.  
Our first step is to get the light component of our point light GameObject. Read the [Controlling GameObjects using GetComponent](https://docs.unity3d.com/Manual/ControllingGameObjectsComponents.html) tutorial, then add these lines to your script-  
![Inititalize Light](/img/assignments/mp1/image9.png)  
This will get the light component of the object this script is attached to (calling `GetComponent<>()` is the same as calling `this.GetComponent<>()`), and set it to the `light` variable when we boot up the game. To register input, we use the [Input](https://docs.unity3d.com/ScriptReference/Input.html) library of Unity, specifically, the `Input.GetKeyDown` method. This will return true when the specified key is first pressed down. Since we want to listen for the `tab` key, then in our `Update` function, we write-  
![Get Tab Key Down](/img/assignments/mp1/image14.png)  
Setting the light color is easy, you can either create a new color using the “new Color(red,green,blue)” constructor, or one of the predefined colors. How you change the light is up to you, but the light should visibly change every time we press tab. Maybe you use a boolean variable to track the current color, or an integer (for more than two colors). That is up to you.

1. **Orbit:** *The moon should orbit the planet sphere. The easiest way to do this is to have the planet constantly rotate. Since the moon is a child of the planet, it will also rotate around the planet.*  
GameObjects’ rotation and position are controlled by their [transform](https://docs.unity3d.com/ScriptReference/Transform.html) parameter, accessed with `<GameObjectName>.transform`. This class is well worth looking through, though the most important parts for this class are the `transform.position`, which is the 3 vector of the object’s x, y, and z coordinates in the global frame (as opposed to the local frame, which is relative to this object’s parent’s position), and the `Rotate` method.  
Most of Unity rotations are done using something called quaternions, which are better than the standard way of measuring rotation (the rotation about the x,y,and z axis). You will learn about quaternions, and why they are awesome, in class later. For now, simply know that the `transform.Rotate(Vector3(a,b,c))` will rotate you “a” degrees about the object’s x axis, “b” degrees about the y, and “c” degrees about the z.  
Create a script, called “orbit”, and attach it to the parent sphere. In its update method, add this line-  
![transform.Rotate](/img/assignments/mp1/image21.png)  
This will rotate the parent sphere by 2 degrees about the y axis every frame. 

1. **Room Switch:** *Pressing the ‘2’ key should switch to the MP1.1.2!*  
Create the “room switch” script, and attach it to the player. Simply use `Input.GetKeyDown("2")`, and set the player’s `transform.position` to the Vector3 corresponding to the center of your room for MP 1.1.2 (wherever you end up putting it). Don’t forget, the player controller needs to be 1 unit above the ground (since the coordinates for the player refer to its center, and the player is 2 units tall).

1. **Quit key:** *Pressing ‘Esc’ should exit the game.*  
This can be simply added on to the “room switch” script. You will want to add the following lines to the update method-  
![Exit game](/img/assignments/mp1/image19.png)  
`Application.Quit()` quits a Unity application, but it will not stop a game running in editor. So, we check if we are in editor, and stop the editor if we are.

---

### 1.1.2

#### In 1.1.2 you will be working in the same scene as 1.1.1, but with _fewer instructions_.

You are expected to [Google](http://lmgtfy.com/?q=google) the specifics -- [Unity has a great tutorial on practically everything](https://unity3d.com/learn/tutorials) you will need for this MP, and the [Unity Forum](https://forum.unity.com/) also provides high-quality answers for debugging advice.

![Hi doggy!](/img/assignments/mp1/image17.jpg)

**The Room 2:** Hi doggy!

Create a new room, at least 50 units away from the first room. Inside the MP1 zip file, we’ve provided you with a package of a wall that contains a door. Your new room will use this object as one of the walls. The floor plan of the room will be a hexagon (meaning there will be six walls), and the ceiling will be slanted (not parallel to the floor). It is ok if the walls pass through each other (or through the floor), provided the final room is fully enclosed, and looks good from the inside. Use Unity cubes this time, so that the directional light is blocked. You can make the cubes very thin, so that they are like the planes you used before (except, of course, being solid on all sides). Add a point light in your room, as we will need to clearly see all of the features of the room.

To import the package, unzip the MP1 zip folder,then go to `Assets`→`Import package`→`Custom package`, navigate to your unzipped MP1 folder, and import the `.unitypackage` file.

*Note* - The door object does not currently have a collider, so you can walk right through it. You can add a collider by clicking `Add Component` in the inspector window, then going to `Physics` -> `Box Collider` (or `Mesh Collider`).

---

#### Material

*Read up on [Materials, Shaders and Textures](https://docs.unity3d.com/Manual/Shaders.html), focusing mainly on the Materials, for now. We have provided you with an image (`tile.png`), and a normal map (it’s the weird purplish image `tile-normal.png`). Create a material with these images, and put it on one wall. Change the tiling, and put it on 2 different walls. Finally, change the metallicity, and put it on the remaining 2 walls. Make a simple colored material for the ceiling and floor, and apply it. Make sure each face is distinct enough that it is clearly visible to the grader. If that means you have to make the room look a little bit ridiculous, then go for it.*

To create a material, go to `Assets` → `Create` → `Material`.

![Create a Material](/img/assignments/mp1/image25.png)

This will generate a default material. Name it "Wall 1". Select it, and you should see the following menu - 

![Materials Menu](/img/assignments/mp1/image18.png)

Drag the `tile.png` image to the box labeled "Albedo". Now, drag this material from the assets folder onto one of your walls (except the wall with the door) in the Scene view. It probably doesn’t look too good. Don’t worry, it’ll get better.
Drag the `tile-normal.png` image to the box labeled "Normal Map". Notice how it changes the perceived material of of the material. A normal map is a trick used to give the illusion of depth on a flat surface, by telling the engine to reflect light as if there were these little bumps and pits in the material.
Create a new material, called "Wall 2", and apply the albedo and normal maps the same as Wall 1. Apply it to another two walls (again, except the wall with the door). Right above the "Secondary Maps" subheading is the "Tiling" option, which has an option for `x` and `y`. Tiling causes a material to repeat itself on the same object, rather than covering the whole thing. So, changing tiling `x` to 2, means that the material will repeat once (that is, show up twice) in the x direction on the wall. Play with the tiling until you like the look of it. Below is an example of non tiled and tiled walls side by side - 

![Tiling](/img/assignments/mp1/image1.png)

Create a new material, called "Wall 3" with the same albedo and normal map. Change its tiling to be different from walls 1 and 2. Right below the albedo option is a slider for metallic, and a slider for smoothness. Play around with these, and see how they affect the material. Both deal with how light reflects off the material, metallic giving a more metallic look, and smoothness helping to enhance or subdue the normal map. Paste this material on the remaining two walls.
Finally, create a material, called "Floor", that has no albedo or normal map. Next to the albedo option is a small color box. This shows what color the material will reflect. When the material has no albedo, the material will be this flat reflection color. Try and see what happens when you change the color of a material with an albedo. Apply this flat color onto the floor and ceiling of your room.

---

#### Scripting

You will be creating some scripts for this room as well.

1. **Room Switch:** *Extend your room switch script so that pressing 1 moves you back to 1.1.1.*  
This is essentially the same as the movement script from MP 1.1.1. Extend the same “room switch” script again, and make it return you to the center of your first room.

1. **Trigger Zone:** *Create a box collider, and make it a trigger. Place a sphere above the trigger zone. Make a script so that when the player enters the trigger zone, the ball falls.*  
To create the Trigger Zone script, first, watch the Unity Tutorials on [Colliders](https://unity3d.com/learn/tutorials/topics/physics/colliders) and [Triggers](https://unity3d.com/learn/tutorials/topics/physics/colliders-triggers). Next, create a new empty `GameObject`. Next, hit `Add Component` → `Physics` → `Box Collider`. A Box Collider is (as the name would suggest) a box-shaped area that registers and reacts with collisions with other GameObjects. Make the box collider 2 x 0.5 x 2 (x,y,z) units. Select the "is trigger" option. Your object should look like this -  
![Empty Collider](/img/assignments/mp1/image10.png)
It should show up in the scene view as a green wireframe box. Place this game object in the back of your hexagonal room, across from the door, and create a sphere about 3-4 units directly above the center of the trigger GameObject.
Add a script to your trigger object by clicking `Add Component` → `New Script`, and name it `BallDropScript`. Open the script, and create the following lines -  
![Ball Drop Script](/img/assignments/mp1/image11.png)  
The `OnTriggerEnter` function will be called when the collider attached to our empty GameObject is entered. The `other` parameter is the collider that intersected this collider.  
The `public GameObject` tag shows a neat feature of unity. Save your script, then navigate to your empty trigger GameObject. In the inspector, the  script component should look like this -  
![Script in Inspector](/img/assignments/mp1/image8.png)  
So our public GameObject is now a field for the script component in Unity. Drag the sphere into this field. Now, whenever you reference the `ball` variable in your script, it will be referencing the sphere you dragged in. Pretty neat! You can read more about this in the [Variables and the Inspector tutorial](https://docs.unity3d.com/Manual/VariablesAndTheInspector.html).  
Now, all that’s left is to make that sphere fall. You’ll need to get the rigid body of the sphere (rigid bodies deal with physics, read more here), using the `ball.GetComponent<RigidBody>()` method. After that, simply set `rigidBody.useGravity` to `true`.

---

#### Store Assets

*Import at least one free asset from the [Unity Store](https://www.assetstore.unity3d.com/). Place it in the room. You will need a free Unity account for this.*

[Create a Unity account](https://id.unity.com/account/new), then head over to the "Asset Store" tab, right next to the "Scene" and "Game" tabs -  

![Asset Store Tab](/img/assignments/mp1/image26.png)

Sign into your Unity account using the "Log In" button at the upper right. Now, you can search for any free asset you desire, and put it in your room. Make sure it doesn’t intersect with your collider, or it will trigger the collider. It can be whatever you want (provided it’s school-appropriate, of course).

---

#### Submit: 
*Submit your unity project **according to the [submission instructions](#submission-instructions) at the bottom of this assignment.***

---

## MP 1.2

Create a new Unity project, called `CS498MP1_2`. **Do not work in your MP 1.1 project.**  
In this part, you will create a simple game with minimal hand-holding, as compared to MP 1.1. You are expected to look up how to do the tasks required of you, using the resources linked in 1.1.2.

---

### 1.2.1

![Tearing me apart](/img/assignments/mp1/image12.jpg)

**The Room 3:** You’re tearing me apart, Lisa!

*Create a more interesting room, with a window! The shape and size is all up to you, it should be large enough to comfortably accommodate all of the following requirements within it. The walls should be colored or textured, as well. The choice of wall color and texture is up to you (but keep it grandmother appropriate).*

For 20 points of extra credit, use a 3D modelling tool to create more complicated room geometry, like a curved roof, slanted windows, multiple levels, et cetera. Note in a README what you created. Some software options are-  
- Blender [(link)](https://www.blender.org/): Extremely powerful, but complicated  
- Google Sketchup [(link)](https://www.sketchup.com/): Simple, but somewhat limited  
- Probuilder [(link)](https://assetstore.unity.com/packages/tools/modeling/probuilder-111418): Most limited of the three, but is integrated directly into Unity.  

The default Unity modelling tools are extremely limited, so we highly recommend you familiarize yourself with one of the above tools. It will assist greatly in your final project. To get the extra credit, you must do a nontrivial amount of extra work with your modelling tool. That is, it should look like it took you more than 15 minutes to do.

---

#### Skybox:

We have provided you with six images in `skybox.zip` that together, form a skybox. You are going to create a skybox with these images, and apply it to your scene. [Here is the Unity manual page for skyboxes](https://docs.unity3d.com/Manual/HOWTO-UseSkybox.html). Skybox asset credit: [mgsvevo](https://www.assetstore.unity3d.com/en/#!/search/page=1/sortby=popularity/query=publisher:9104)

---

#### Directional Light:

Create a directional light for the scene, set it to have hard shadows. Set its angle to match the sun in the skybox.

---

#### Scripting - Trigger Game:

You are going to make a game similar to a cat chasing a laser pointer (where you’re the cat). In this room, you are going to place several box colliders (at least 4), and mark them as triggers. Place a point light at the center of each box collider. Every 3 seconds, one of these point lights should light up. The player should then move to the lit up point light, and press “A” on the controller (the [OnTriggerStay](https://docs.unity3d.com/ScriptReference/Collider.OnTriggerStay.html) method should be helpful here). When the player does so, they will get one point, and another light should light up at random (bypassing the normal 3 second timer). The player’s score should be displayed on the wall, in sharp (NOT blurry) text. We should be able to quit at any time upon pressing the Start button on the controller.

Using a controller in Unity is not quite as simple as using the keyboard. Unfortunately, because you can’t see the keyboard in VR, and all of the keys largely feel the same, keyboards do not work well in VR. Controllers, with their contours and designated button shapes, are much easier to use blind.
- [Unity Manual page on Input](https://docs.unity3d.com/Manual/ConventionalGameInput.html)
- [Unity wiki page on Xbox controllers](http://wiki.unity3d.com/index.php?title=Xbox360Controller)
- [Additionally, a Microsoft Blog page on Xbox controller input in Unity](https://blogs.msdn.microsoft.com/uk_faculty_connection/2014/12/02/adding-xbox-controller-support-and-input-to-your-unity3d-game/) - (note: the controller drivers are already installed)
- [Unity Manual page on Time and Frame Management](https://docs.unity3d.com/Manual/TimeFrameManagement.html)

A very useful method here is Unity’s [`Time.DeltaTime()`](https://docs.unity3d.com/ScriptReference/Time-deltaTime.html) method. This method, when called from the update method, will tell you how many real-time seconds have elapsed since the last frame. This is hugely important, as you do not want to tie game logic to your framerate.

---

### 1.2.2

**VR experiences:** Your final task is to choose and try out four (4) of the VR demos available through the Oculus or Steam store, or from the VR shared `V:` drive. You will have to create a Steam and/or Oculus account for this step. Oculus titles will need a TA to help install, while Steam will not. For each demo, write at least 3 sentences with a short description of the demo, something you liked, and something you did not like. One experience must be a student experience, and one must be an Oculus/Steam experience. You can find oculus games at [https://share.oculus.com/](https://share.oculus.com/) or on Steam at [http://store.steampowered.com/search/?vrsupport=102](http://store.steampowered.com/search/?vrsupport=102). Please put your names, netIDs, and reviews in a PDF named `HW1DemoWriteUp.pdf`. Hint: some TAs have access to some paid experiences, which will be fun to try out. 

---

#### Submit: 
*Submit your unity project **according to the [submission instructions](#submission-instructions) at the bottom of this assignment.***