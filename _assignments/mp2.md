---
layout: assignment
title: "MP2: Geometric Transformations / Perception"
parts:
  -
    title: MP2.1
    due: Feb. 11, 2019 @ 11:59 PM
  -
    title: MP2.2
    due: Feb. 18, 2019 @ 11:59 PM
material:
  -
    name: Starting Unity package
    url: https://courses.engr.illinois.edu/cs498vr3/fa2018/mps/MP1.zip
rubric:
  -
    name: View Flipping
    points: 10
    description: Flipping the camera works properly and preserves the user's global position.
  -
    name: Position Reset
    points: 10
    description: The position reset functionality works properly.
  -
    name: Cube Match Mode
    points: 20
    description: The cube correctly matches the user's movements.
  -
    name: Cube Mirror Mode
    points: 20
    description: The cube correctly mirrors the user's movements.
  -
    name: Cube Mode Toggle
    points: 10
    description: The cube switches between mirror and match modes correctly.
  -
    name: Geometric Transformations
    points: 40
    description: The answers to the written problems are correct.
  -
    name: Position Tracking
    points: 10
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
points: 200
---

## MP2.1

### VR Mirror

This part of the MP will teach you how to manipulate a `GameObject`'s rotation and position.

You must modify the provided scene, so that the listed keys behave as follows:

* Pressing `Tab` must reset the camera position in _global_ coordinates to (0, 0, 0).
* Pressing `F` must flip the user's view 180 degrees, so that they are looking in the reverse direction.
* Pressing `M` must make a certain cube either mirror or follow the user’s movements.
* Pressing `Esc` must quit the game.

Write a script named `CameraReset` that moves the main camera's position in _global_ coordinates to (0, 0, 0) whenever you press `Tab`.
Pressing `Tab` multiple times must move the camera back to the origin each time, regardless of where the player moves their head between presses.
Note/hint: the Oculus software controls the camera's _local_ coordinates. Thus, _global_ refers to the sum of the coordinates of the main camera and its parents.

Write a script named `CameraFlipper` that flips the `MainCamera` 180 degrees when you press `F`, as if you were turning around to look behind you.
After flipping the first time, you will be facing a transparent window with a floating cube face on the other side.
Pressing `F` multiple times must cause a 180-degree flip for each press.

The `CameraReset` and `CameraFlipper` scripts must be independent of each other, and the behavior of one must not interfere with the other. Specifically, `CameraFlipper` must not change the user's global position.

Write a script `VRMirror` to modify the position and rotation of the cube face to match or mirror your own.
Pressing `M` must alternate between matching and mirroring.
We don't care what happens before we press `M` for the first time.

In match mode, the cube must be looking in the same direction as the camera.
If the user faces the mirror directly, they should see the back of the cube’s head,
and when the user brings their face closer to the mirror, the cube should move in the same direction, which for the cube is away from the mirror.

In mirror mode, when you face the window, the cube must face the camera, and as a result, the user should see the cube’s face.
If you bring your face close to the screen, the cube will necessarily move closer to the screen as well.
Imagine looking into a mirror to get an intuition of this.

### Geometric Transformations

This part of the MP will reinforce the mathematical notion of geometric transforms.

Complete the following written problems. You must show your work and submit your answers as a PDF. We recommend using LaTeX to typeset your mathematics.

<!-- this page only -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML' async></script>
<!-- markdownified TeX is really messy. -->

The problems are as follows:

1. In one sentence, explain what the following homogeneous transformation accomplishes when applied to a point
$$(x, y, z)$$,
in terms of yaw, pitch, roll, and translation.  
$$
T_1 =
\begin{bmatrix}
	{1 \over \sqrt{2}} & -{1 \over \sqrt{2}} & 0 & 4 \\
	{1 \over \sqrt{2}} & {1 \over \sqrt{2}} & 0 & 9 \\
	0 & 0 & 1 & 8 \\
	0 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
	x \\ y \\ z \\ 1
\end{bmatrix}
$$

1. Write out the $$4 \times 4$$ matrix homogeneous transformation $$T_2$$, that,
when applied to a point $$(x, y, z)$$, translates the point by $$(1,9,6)$$,
followed by a pitch of 60 degrees.
Your answer need not be simplified, and may be represented as a single matrix or the product of two or more matrices.

1. We would like to reverse the transformation applied by $$T_2 T_1$$. Write out $$\left(T_2 T_1\right)^{-1}$$. 
Your answer need not be simplified, and may be represented as a single matrix or the product of two or more matrices. 

1. Write out the quaternions equivalent to the rotations in $$T_1$$ and $$T_2$$ as $$q_1$$ and $$q_2$$.

1. Calculate the product of $$q_1$$ and $$q_2$$, i.e. $$q_1 \circ q_2$$.

---

## MP2.2

### Depth Perception and Relative Size

In the provided scene, the `StimulusManager` object has three spherical children.

Create a script called `GenerateStimuli` that dynamically changes the sizes of the two blue spheres so that
no matter what the position and orientation of the camera are,
the blue spheres always “appear” to be at the same depth as the red sphere with respect to their retinal image sizes (reference: [sec. 6.1.1](http://vr.cs.uiuc.edu/vrch6.pdf)).
That is, we ask you to vary the sizes of the blue spheres
so that the _rendered_ images of all of the three spheres have equal diameters when viewed on the Oculus Rift display.

|[Before](/img/mps/depth-percept-before.png)|[After](/img/mps/depth-percept-after.png)|
|---|---|
|![MP2 before](/img/mps/depth-percept-before.png){:class="img-responsive" style="display:block; margin:auto"}|![MP2 after](/img/mps/depth-percept-after.png){:class="img-responsive" style="display:block; margin:auto"}|

You are only allowed to change the sizes of the blue spheres to complete this task. 
You must not change the positions of the three spheres, nor the size of the red sphere.

Other tasks that need to be completed in this part:

* Pressing `S` must make the spheres appear or disappear.
	* The red sphere must [dis]appear immediately after the user presses the S key.
	* The two blue spheres must should [dis]appear exactly two seconds after the red sphere [dis]appears.
* You can assume that the user will not press `S` again within the two seconds.
* The spheres should initially be invisible.
* The `GenerateStimuli` script should permanently activate when the user presses the S key for the first time.

Even after you complete this exercise, you will still easily infer the relative depth between the three spheres,
because there are many depth cues other than retinal image size that help you perceive depth accurately.
Therefore, this exercise will not create an illusion of the spheres being placed at equal distances from your eyes.
You will learn more about optical illusions and depth perception later in class.

### Disabling Tracking

The Oculus software automatically sets the camera's `Transform` based on the headset's position and rotation tracking.
In this task, you must counteract that tracking, i.e. the net effect is as though tracking was disabled.
This should help you understand how much tracking contributes towards a feeling of presence in VR.

Create a script named `ToggleTracking` that turns tracking on and off.
Pressing `P` and `R` must toggle **p**osition and **r**otation tracking, respectively.
Note that simultaneously disabling rotation and position tracking counts as extra credit.
If you attempt this, make a note in your README file.

A bad solution is to put all `GameObject`s as children of the camera.
This depends on the hierarchy structure of Unity and causes performance issues, so we will not accept it.
We want you to think about how to counteract the effects of position and rotation tracking using transformations.

