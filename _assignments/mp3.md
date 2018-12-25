---
layout: assignment
title: "MP3: Geometric Transformations"
due: March 8th, 2019 @ 11:59 PM
material:
  -
    name: Starting Unity package
    url: https://courses.engr.illinois.edu/cs498vr3/fa2018/mps/MP1.zip
  -
    name: Written problems PDF
    url: https://github.com
points: 100
---

## VR Mirror
This part of the MP will teach you how to manipulate a `GameObject`'s rotation and position.

You must modify the provided scene, so that the listed keys behave as follows:

* Pressing `Tab` must reset the camera position in _global_ coordinates to (0, 0, 0).
* Pressing `F` must flip the user's view 180 degrees, so that they are looking 
* Pressing `M` must make a certain cube either mirror or follow the user’s movements.
* Pressing `Esc` must quit the game.

Write a script named `CameraReset` that moves the main camera's position in _global_ coordinates to (0, 0, 0) whenever you press `Tab`.
Pressing `Tab` multiple times must move the camera back to the origin each time, regardless of where the player moves their head between presses.
Note/hint: the Oculus software controls the camera's _local_ coordinates. Thus, _global_ refers to the sum of the coordinates of the main camera and its parents.

Write a script named `CameraFlipper` that flips the `MainCamera` 180 degrees when you press `F`, as if you were turning around to look behind you.
After flipping the first time, you will be facing a transparent window ('mirror') with a floating cube face on the other side.
Pressing `F` multiple times must cause a 180-degree flip for each press.

The `CameraReset` and `CameraFlipper` scripts must be independent of each other, and the behavior of one must not interfere with the other.

Write a script `VRMirror` to modify the position and rotation of the cube face to match or mirror your own.
Pressing `M` should alternate between matching and mirroring.
We don't care what happens before we press `M` for the first time.

In match mode, the cube must be looking in the same direction the camera is.
If the user faces the mirror directly, they should see the back of the cube’s head,
and when the user brings their face closer to the mirror, the cube should move in the same direction, which for the cube is away from the mirror.

In mirror mode, when you face the 'mirror', the cube must face the camera, and as a result, the user should see the cube’s face.
If you bring your face close to the screen, the cube will necessarily move closer to the screen as well.
Imagine looking into a mirror to get an intuition of this.

## Geometric Transfomations
This part of the MP will reinforce the mathematical notion of geometric transforms.
The problems are contained in the PDF linked in the provided material section.

Please show your work. You must submit your answers as a PDF. We recommend using LaTeX to typeset your mathematics.




