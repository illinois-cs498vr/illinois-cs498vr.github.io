---
layout: assignment
title: "MP1: The Room"
index: 10
due: "Sept. 18, 2019 @ 11:59 PM"
material:
  -
    name: Skybox
    url: /mps/MP1.zip
points: 150
rubric:
  -
    name: The Room
    points: 10
    description: Complete and enclosed room
  - 
    name: Lighting
    points: 10
    description: Bright point light in center of room ceiling
  - 
    name: Planet and Moon
    points: 10
    description: Planet and moon in center of room
  - 
    name: Text
    points: 10
    description: Text displays NetIDs and controls 
  -
    name: Store Asset
    points: 10
    description: A Unity Store asset is present
  -
    name: Skybox
    points: 10
    description: A skybox is present from the external vantage point
  -
    name: Material Maps
    points: 5
    description: Two walls have the provided albedo and normal maps
  -
    name: Material Tiling
    points: 5
    description: Two walls have distinct tiling settings
  -
    name: Material Properties
    points: 5
    description: Two walls have altered smoothness and/or metallicity
  -
    name: Flat Color Material
    points: 5
    description: One wall has a flat color material
  -
    name: Light Switch
    points: 15
    description: Pressing the Tab key changes the light color
  -
    name: Orbiting Moon
    points: 15
    description: The moon orbits the planet
  -
    name: Trigger Zone
    points: 15
    description: A trigger zone is present that drops a suspended sphere
  -
    name: Break Out
    points: 15
    description: A controller button switches the player to and from an external vantage point
  -
    name: Quit Key
    points: 10
    description: A controller button exits the game
  -
    name: Room Geometry
    points: 15
    extra: true
    description: Built nontrivial room geometry
---

## Creating a Project

Launching Unity should make the below window appear:

![splash screen](/img/assignments/mp1/image23.png)

To create a new project, click the NEW button on the top right. Fill in the appropriate details to your heart’s content.

We provide the following suggested tutorials to help you familiarize yourself with Unity's user interface.

- [Basic Interface Tutorial](https://docs.unity3d.com/Manual/LearningtheInterface.html)
- [More In Depth Interface Tutorial](https://docs.unity3d.com/Manual/UsingTheEditor.html)

## The Room

> Build a cubic room out of six planes.
Make sure to orient these planes so the visible sides face inwards,
and ensure that the player cannot walk through any of them.
The room should be 15x15x15 Unity units (aka meters).
>
> We will award extra credit for [more complicated geometry](#a-more-interesting-room).

First, create a plane. It can be found in the top bar menus, under `GameObject` → `3D Object` → `Plane`, as shown below.

![Create plane](/img/assignments/mp1/image3.png)

Unity's default plane size is $$10 \times 10 \hspace{0.5em} (X \times Z)$$ units. In order to make your room 15 units wide, you have to scale the plane. On the right side (in the default editor layout) you will find the Inspector window. This window provides details about the currently selected object. Select the plane in the Scene view, and the Inspector will fill with information and settings for said plane. Find the “Scale” option, and set it to 1.5 on the $$ X $$ and $$ Z $$ to make your plane 15 units wide and long.

![Inspector](/img/assignments/mp1/image7.png)

Note: The plane has no thickness, so the value in $$ Y $$ can be any positive integer.

Now, to easily make the walls and ceiling, you can select your plane in the hierarchy, and duplicate it.

![Duplicate](/img/assignments/mp1/image4.png)

From there, simply change the new plane’s rotation and position to make it one of the walls or ceilings.
Unity measures position from the center of the object, so if you want your walls to match up with the floor (at height 0), your walls will need to be at $Y = 7.5$.

![Scene window](/img/assignments/mp1/image15.png)

Note: In the image above, rotating the plane also rotated its axes (the blue z axis now points down).
Make sure to account for that when rotating and moving objects!

Note: By default, your scene has a directional light in it, which illuminates your entire scene from a specified angle, from very far away, much like the sun.
You’ll notice that your planes do not block this light.
That’s because planes only block light (and render) from one side. Bear this in mind when creating objects in Unity in the future!
For now, just delete the directional light. You will add more lights in later.

## VR Player Controller

> Place an OVR Player Controller prefab in the room.
This prefab handles basic movement, collision, and camera control.

The lab computers come with the Oculus OVR plugin installed.
Go to `Assets` → `Import Package` → `OculusUtilites`, and then click "import".

![Import OculusUtilities](/img/assignments/mp1/image20.png)

If you can't find the package, go to the [Oculus Website](https://developer.oculus.com/downloads/package/oculus-utilities-for-unity-5/) and download their Unity package.
Unzip the unity package file, and then go to `Assets` → `Import Package` → `Custom Package`.
Find the unzipped `OculusUntilites.unitypackage`, and import all of the items within.
You should now have an `OVR` folder in your `Assets` folder.

In this class, you will be primarily using two prefab objects from this package, both found in `OVR` → `Prefabs`.
The first prefab, the `OVRCameraRig`, is a camera for the Oculus, that handles all of the movement and position tracking for the oculus, as well as the rendering on the Oculus display.
The second prefab, the `OVRPlayerController`, is a more complicated version of the OVRCameraRig. It includes the camera from the OVRCameraRig, but also includes basic joystick movement controls, and a capsule-shaped collider (so that the player doesn’t walk through solid objects).
Place an `OVRPlayerController` into your scene, at $$(0,1,0)$$, and delete the “main camera” object.

There’s just one more thing you need to do to finish enabling VR.
Go to `Edit` → `Project Settings` → `Player`, which will open up the player settings in the inspector window.
In `XR Settings` (or `Other settings`, depending on your version of Unity), check the `Virtual reality supported` option.
Now, when you play your scene, it should render inside the Oculus.

**If you have issues importing, please check Piazza to see if others have had your issue, and make a post if you need more information.**

## Lighting

> Place a point source of light at the center of the roof of the room.
You will make this light change color by pressing the `Tab` key, which is detailed in the [scripting section](#light-switch).

Go to `GameObject` → `Light` → `Point Light`, and bring a point light into your scene. Place it at $$(0,15,0)$$.

![Point Light](/img/assignments/mp1/image13.png)

Select your light. Your inspector view should have a `Light` component like this:

![Light Object](/img/assignments/mp1/image6.png)

Of primary importance are the range (the radius of your light), color, and intensity values.
Set the shadow type to "soft shadows", and the mode to "Realtime".
Set your range and intensity so that your room is brightly lit.

We also recommend reading the Unity manuals for [general lighting](https://docs.unity3d.com/Manual/Lighting.html),  [shadows](https://docs.unity3d.com/Manual/Shadows.html), and [lighting modes](https://docs.unity3d.com/Manual/LightModes.html). In later MPs, and your course project, these settings can impact performance significantly.

## Planet and Moon

> Create a large sphere, and have it float in the middle of the room.
Create another, smaller sphere, set it as a child object of the bigger sphere, and move it to be 4 units away from the larger sphere.
You will make it orbit the larger sphere in the [scripting section](#orbiting-moon).

Create two spheres (`GameObject` → `3D` → `Sphere`). Scale the first sphere to 2 in all directions, and place it in the center of your room. In the Hierarchy view, drag the second sphere onto the first. The result should look like this:

![Spheres](/img/assignments/mp1/image22.png)

Now, the second sphere is a child of the first sphere. When you change the position, rotation, or size of the parent sphere, its child will also undergo the same movement, rotation, or scaling.
The $$(0,0,0)$$ origin position of the child is now its parent’s position, *not* the global $$(0,0,0)$$ origin.
That is, the child’s position is an offset from the parent’s position.
Finally, if the parent rotates, then the child will rotate about its parent’s axes, not its own axes (this will make more sense later).
For more information on parent-child relationships, see the [Hierarchy](https://docs.unity3d.com/Manual/Hierarchy.html) page of the Unity Manual.

Set the position of the child sphere to be $$(2,0,0)$$, which is four units from the parent sphere on the X-axis. For why this is, think about the scaling of the parent sphere.

## Text

> Put large text on a wall, listing your NetIDs and the details of the controls (which you will make later).
Feel free to experiment with what you can put on a canvas, but keep it grandmother appropriate!

Check out the Unity tutorial on [Creating Worldspace UIs](https://docs.unity3d.com/Manual/HOWTO-UIWorldSpace.html). Create a text canvas by going to `GameObject` → `UI` → `Text`. This will create a Unity Canvas, and some text on that canvas as a child of the canvas. It may also happen to be massive. Not what we want.

To remedy this, select the canvas (not the text) from the hierarchy view. Its inspector should look like this:

![Canvas Inspector](/img/assignments/mp1/image2.png)

The first thing to do is change the Render mode from `Screen Space - Overlay`, to `World Space`. This changes our canvas from a UI element that is glued to the camera, to an object that is stationary in the world. Traditional UIs do not work well in VR, and we highly, highly advise against sticking any UI elements to the camera in your future MPs and Projects. Always attach UI elements to something in the world (See [this](https://developer.oculus.com/design/latest/concepts/bp-vision/)).

Now that the canvas is a world space object, we can make it a more reasonable size. However, since the "Rect Transform"’s width and height determine the resolution of our text canvas, we cannot set them to be, say, $$5 \times 5$$, because then our text resolution would be 5 pixels by 5 pixels. Set the width and height to 1000 (that is $$1000 \times 1000$$ pixels). Shrink the canvas by setting the scale. We want our canvas to be 10 units by 10 units, and be $$1000 \times 1000$$ pixels, so our scaling is $$\frac{10}{1000} = 0.01$$. Make sure your text’s Rect Transform has the same width and height as its parent canvas, but leave the scale as 1. Place your canvas against one of the walls. You want to place your text ever so slightly (like, 0.001) in front of the wall it is against to avoid Z-fighting (which is where two objects have the same depth, and Unity can’t figure out which one to render). Below is an example of Z-fighting-

![Z-fighting](/img/assignments/mp1/image24.png)

Now, you can set your text color, size, font, width, whether it wraps or overflows, etc. Make your text has you and your partner’s NetIDs, as well as the controls for your game (more on this later). Make sure it is big enough for us to read. If the text appears blurry or jagged, then increase the width and height of the canvas and text (to increase the resolution), and scale them down further.

## Store Asset

> Import at least one free asset from the [Unity Store](https://www.assetstore.unity3d.com/) and place it in the room. You will need a free Unity account for this.

[Create a Unity account](https://id.unity.com/account/new), then head over to the "Asset Store" tab, right next to the "Scene" and "Game" tabs.

![Asset Store Tab](/img/assignments/mp1/image26.png)

Sign into your Unity account using the "Log In" button at the upper right. Now, you can search for any free asset you desire, and put it in your room. It can be whatever you want (provided it’s school-appropriate, of course).

## Skybox

> Create a skybox using the images in `skybox.zip`.

Follow the instructions in the [Unity manual for skyboxes](https://docs.unity3d.com/Manual/HOWTO-UseSkybox.html) to set up the skybox.

The skybox is from [mgsvevo](https://www.assetstore.unity3d.com/en/#!/search/page=1/sortby=popularity/query=publisher:9104).

Since the room is currently completely enclosed, you won't be able to see the skybox. We will remedy that situation in the [scripting section](#break-out).

## Material

> Use the provided image (`tile.png`) and normal map (`tile-normal.png`) to color two of the walls, with different tiling, metallicity, and smoothness settings. Make a solid color material and apply it to a third wall. All of the walls must be obviously visually distinct.

Read the Unity manual page on [materials, shaders and textures](https://docs.unity3d.com/Manual/Shaders.htm)l, focusing mainly on the Materials, for now.
We have provided a base texture (`tile.png`), and a normal map (the weird purplish image `tile-normal.png`).
To create a material, go to `Assets` → `Create` → `Material`.

![Create a Material](/img/assignments/mp1/image25.png)

This will generate a default material. Name it `Wall 1`. Select it, and you should see the following menu:

![Materials Menu](/img/assignments/mp1/image18.png)

Drag the `tile.png` image to the box labeled "Albedo".
Now, drag this material from the assets folder onto one of your walls (except the wall with the door) in the Scene view.
It probably doesn’t look too good. Don’t worry, it’ll get better.
Drag the `tile-normal.png` image to the box labeled "Normal Map".
Notice how it changes the perceived material of of the material. A normal map is a trick used to give the illusion of depth on a flat surface,
by telling the engine to reflect light as if there were these little bumps and pits in the material.
Apply this material to a wall by dragging it onto a wall.

Create a new material, called `Wall 2`, apply the same albedo and normal maps as you did Wall 1, and apply it to a different wall.
Right above the "Secondary Maps" subheading is the "Tiling" option, which has an option for `x` and `y`.
Tiling causes a material to repeat itself on the same object, rather than covering the whole thing.
So, changing tiling `x` to 2, means that the material will repeat once, and show up twice, in the x direction on the wall.
Play with the tiling until you like the look of it.
Below is an example of non tiled and tiled walls side by side.

![Tiling](/img/assignments/mp1/image1.png)

In the inspector pane, right below the albedo option, there are metallic and smoothness sliders. Play around with these, and see how they affect the material. The metallic slider adjusts the reflections, and smoothness helps to enhance or subdue the normal map. Modify the metallicity and smoothness of the two wall materials so that they are clearly visually different.

Finally, create a material, called `Wall 3`, that has no albedo or normal map. Next to the albedo option is a small color box. Since this material has no albedo, the material will be this flat reflection color. Try and see what happens when you change the color of a material with an albedo. Apply this flat color onto a third wall in the room.

## Scripting

Read the [Unity scripts manual](https://docs.unity3d.com/Manual/CreatingAndUsingScripts.html), and familiarize yourself with C# syntax.
If you are unfamiliar with programming, you can check out this [C# tutorial](https://www.tutorialspoint.com/csharp/).
You’ll only need the basics of objects, classes, and variables for now.
Throughout this course, you will find the [Scripting API Reference](https://docs.unity3d.com/ScriptReference/) a useful source of information.

### Light Switch

> Pressing the `Tab` key should change the color of the point light in the room.
Pressing it repeatedly should change the color each time, i.e. have it be a toggle or a switch between a series of colors.
Make sure that the color change is large enough so it is immediately apparent!

Create a new script. To attach it to the light object, select the light, then drag the script from the "Assets" tab to the Inspector tab on the right.
When a Unity script is attached to a GameObject, that script will run when the game is started.
Furthermore, the `this` reference in the script will refer to the object that the script is attached to.
Our first step is to get the `Light` component of our point light `GameObject`.
Read the [Controlling GameObjects using GetComponent](https://docs.unity3d.com/Manual/ControllingGameObjectsComponents.html) tutorial, then add these lines to your script:

![Inititalize Light](/img/assignments/mp1/image9.png)

This will set the `light` variable to reference the `Light` component of the object this script is attached to when we initially start the game. N.b.: calling `GetComponent<>()` is the same as calling `this.GetComponent<>()`.
To register input, we use the [Input](https://docs.unity3d.com/ScriptReference/Input.html) library of Unity,
specifically, the `Input.GetKeyDown` method, which will return `true` when the specified key is first pressed down.
Since we want to listen for the `Tab` key, then in our `Update` method, write:

![Get Tab Key Down](/img/assignments/mp1/image14.png)

For the actual light color, you can either create a new color using the `new Color(red, green, blue)` constructor, or one of the predefined colors. How you change the light is up to you, but the light should visibly change every time we press `Tab`.

### Orbiting Moon

> The moon should orbit the planet sphere.
The easiest way to do this is to have the planet constantly rotate.
Since the moon is a child of the planet, it will also rotate around the planet.

You control the rotation and position of a `GameObject` with the [`Transform`](https://docs.unity3d.com/ScriptReference/Transform.html) class, using the `<GameObjectName>.transform` object variable.
This class is well worth looking through,
though the most important parts for this MP are the `transform.position`, the vector of the object's global coordinates, and the `Rotate` method.

Most of Unity rotations are done using something called quaternions, which are better than the standard way of measuring rotation about the $$x$$, $$y$$, and $$z$$ axes.
You will learn about quaternions, and why they are awesome, in class later.
For now, simply know that the `transform.Rotate(Vector3(a, b, c))` will rotate object `a` degrees about the object’s x axis, `b` degrees about the y, and `c` degrees about the z.
Create a script, called “orbit”, and attach it to the parent sphere. In its update method, add this line:

```
this.transform.Rotate(new Vector3(0, 60 * Time.deltaTime, 0));
```
<!--
![transform.Rotate](/img/assignments/mp1/image21.png)
-->

[`Time.deltaTime`](https://docs.unity3d.com/ScriptReference/Time-deltaTime.html) is a special variable, that, when used inside the `Update` method, will tell you how many real-time seconds have elapsed since the last frame. This is hugely important, as you do not want to tie game logic to your framerate. Thus, the line above would rotate the parent sphere at a continuous rate of 60 degrees about the $$y$$-axis per second. See the [Time and Frame Management](https://docs.unity3d.com/Manual/TimeFrameManagement.html) page for more information.

### Trigger Zone

> In a corner of the room, create a box collider, and make it a trigger.
Place a sphere above the trigger zone.
When the player enters the trigger zone, the ball should fall.

You may find the Unity tutorials on [colliders](https://unity3d.com/learn/tutorials/topics/physics/colliders) and [triggers](https://unity3d.com/learn/tutorials/topics/physics/colliders-triggers) helpful.

Create a new empty `GameObject`, and go to `Add Component` → `Physics` → `Box Collider`. A Box Collider is (as the name would suggest) a box-shaped area that registers and reacts with collisions with other `GameObject`s. Make the box collider $$2 \times 0.5 \times 2\ (x \times y \times z)$$ units. Select the "is trigger" option. Your object should look like this:

![Empty Collider](/img/assignments/mp1/image10.png)

It should show up in the scene view as a green wireframe box. Place this game object in a corner of your room, and create a sphere about 3-4 units directly above the center of the trigger GameObject. Make sure that no other objects intersect the collider initially!

Add a script to your trigger object by clicking `Add Component` → `New Script`, and name it `BallDropScript`. Open the script, and create the following lines:

```
public GameObject ball;
void OnTriggerEnter(Collider other) {}
```
<!--
![Ball Drop Script](/img/assignments/mp1/image11.png)
-->

The `OnTriggerEnter` function will be called when the collider attached to our empty GameObject is entered. The `other` parameter is the collider that intersected this collider.
The `public GameObject` tag shows a neat feature of Unity.
Save your script, then navigate to your empty trigger GameObject. In the inspector, the script component should look like this:

![Script in Inspector](/img/assignments/mp1/image8.png)

So our public GameObject is now a field for the script component in Unity. Drag the sphere into this field. Now, whenever you reference the `ball` variable in your script, it will be referencing the sphere you dragged in. Pretty neat! You can read more about this in the [Variables and the Inspector tutorial](https://docs.unity3d.com/Manual/VariablesAndTheInspector.html).

Now, all that’s left is to make that sphere fall. You’ll need to get the rigid body of the sphere (rigid bodies deal with physics, read more here), using the `ball.GetComponent<Rigidbody>()` method. After that, simply set `rigidBody.useGravity` to `true`.

### Break Out

> Set up a button on the controllers to switch the player's position between an external viewing point and the room.

Keyboards do not work well in VR, since the VR environment means that you cannot see the keyboard, and all of the keys largely feel the same. Controllers, with their contours and designated button shapes, are much easier to use blind. Using a controller in Unity is somewhat similar to the keyboard. Refer to the following pages for more information:

- [Unity Input](https://docs.unity3d.com/Manual/ConventionalGameInput.html)
- [Unity wiki page on Xbox controllers](http://wiki.unity3d.com/index.php?title=Xbox360Controller)
- [OVR Input](https://developer.oculus.com/documentation/unity/latest/concepts/unity-ovrinput) (for Touch controllers)

To move the player around the room, set the player’s `transform.position` to a `Vector3` corresponding to an empty spot in the room.
Remember that the coordinates for the player refer to its center, and the player is 2 units tall. Thus, the player controller needs to be 1 unit above the ground.

Make a script that switches the player between a room and a new external viewing point, e.g. a small new plane a moderate distance from the room. Pressing the button for the first time must move the player to the external viewing point. After that, pressing the button must alternate between the two locations.

### Quit Key

> Set up a button on the touch controllers to exit the game.

You can add this as a separate script, or attach it in the same place as your light script. You will want to add the following lines to the `Update` method. Replace the `Input.GetKeyDown` bit with code for the controllers:

![Exit game](/img/assignments/mp1/image19.png)

`Application.Quit()` quits a Unity application, but it will not stop a game running in the editor.

## A More Interesting Room

For extra credit, instead of the cube room we laid out above, use a modelling tool to create more complicated room geometry, like a curved roof, slanted windows, multiple levels, et cetera. Please write down what you created. Your creation still needs to have the other features of the room we described above.

Some software options are, in descending order of complexity:

* [Blender](https://www.blender.org/) powerful but very complicated
* [Google Sketchup](https://www.sketchup.com/)
* [Probuilder](https://assetstore.unity.com/packages/tools/modeling/probuilder-111418) integrated directly into Unity

The default Unity modelling tools are extremely limited,
so we highly recommend you familiarize yourself with one of the above tools.
It will assist greatly in your final project.
To get the extra credit, you must do a nontrivial amount of extra work with your modelling tool.
That is, it should look like it took you more than 15 minutes to do.


