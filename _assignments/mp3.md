---
layout: assignment
title: "MP3: Perception in VR"
index: 30
due: "Mar. 13, 2019, @ 11:59 PM"
material:
  -
    name: MP3 Unity Package
    url: /mps/MP3.unitypackage
rubric:
  -
    name: Position Tracking
    points: 20
    description: Toggling position tracking works correctly, and does not cause discontinuities.
  -
    name: Rotation Tracking
    points: 40
    description: Toggling rotation tracking works correctly, regardless of where we are looking.
  -
    name: Depth Perception Trick
    points: 20
    description: |
      The spheres appear to be of equal size while the script is active,
      regardless of where the user is in the room.
  -
    name: Depth Perception Script
    points: 20
    description: The spheres appear in the correct order, and the script works when run repeatedly.
points: 100
---
# Overview
This assignment will demonstrate the difference between position and rotation tracking. It will also teach you to appreciate how much depth perception relies on both of these, and teach you how to enable and disable them. It'll also help you understand the rigid body transformations covered in class.

Note, make sure to have Oculus Integration downloaded/imported on your project and 'Virtual Reality Support' enabled.
## Depth Perception and Relative Size

In the provided scene, the `StimulusManager` object has three spherical children.
Put the red sphere at position `( 0, 0, -2.3)` and the two blue spheres at positions `(0.7, 0, -1.6)`, `(-0.8, 0, -1)`, respectively.

Create a script called `GenerateStimuli` that dynamically changes the sizes of the two blue spheres so that
no matter what the position and orientation of the camera are,
the blue spheres always “appear” to be at the same depth as the red sphere with respect to their retinal image sizes (reference: [sec. 6.1.1](http://vr.cs.uiuc.edu/vrch6.pdf)).
That is, we ask you to vary the sizes of the blue spheres
so that the _rendered_ images of all of the three spheres have equal diameters when viewed on the Oculus Rift display.

|[Before](/img/assignments/mp2/depth-percept-before.png)|[After](/img/assignments/mp2/depth-percept-after.png)|
|---|---|
|![MP2 before](/img/assignments/mp2/depth-percept-before.png){:class="img-responsive" style="display:block; margin:auto"}|![MP2 after](/img/assignments/mp2/depth-percept-after.png){:class="img-responsive" style="display:block; margin:auto"}|

You are only allowed to change the sizes of the blue spheres to complete this task.
You must not change the positions of the three spheres, nor the size of the red sphere.

You must add a control for a button that makes the spheres appear or disappear. The red sphere must [dis]appear immediately after the user presses the button, and the two blue spheres must [dis]appear exactly two seconds after the red sphere [dis]appears. You can assume that the user will not press the button again within the two seconds. The spheres should initially be invisible, and the `GenerateStimuli` script should permanently activate when the user presses the button for the first time.

Even after you complete this exercise, you will still easily infer the relative depth between the three spheres,
because there are many depth cues other than retinal image size that help you perceive depth accurately.
Therefore, this exercise will not create an illusion of the spheres being placed at equal distances from your eyes. You can check the editor screen though to make sure the depth cue changes werw made. 
You will learn more about optical illusions and depth perception later in class.

## Disabling Tracking

The Oculus software automatically sets the camera's `Transform` based on the headset's position and rotation tracking.
In this task, you must counteract that tracking, i.e. the net effect is as though tracking was disabled.
This should help you understand how much tracking contributes towards a feeling of presence in VR.

Create a script named `ToggleTracking` that turns tracking on and off.
You must add controls for two separate buttons to disable position and rotation tracking, independently of each other.
Note that simultaneously disabling rotation and position tracking counts as extra credit.
If you attempt this, make a note in your README file.

A bad solution is to put all `GameObject`s as children of the camera.
This depends on the hierarchy structure of Unity and causes performance issues, so we will not accept it.
We want you to think about how to counteract the effects of position and rotation tracking using transformations.

Please remember to tell us what your control scheme is.
