---
layout: assignment
title: "MP2: Geometric Transformations"
index: 20
due: "Sept. 27, 2019, @ 11:59 PM"
material:
  -
    name: MP2 Unity package
    url: /mps/MP2.1.unitypackage
rubric:
  -
    name: Position Reset
    points: 10
    description: The position reset functionality works properly.
  -
    name: View Flipping
    points: 10
    description: Flipping the camera works properly and preserves the user's global position.
  -
    name: Cube Match Mode
    points: 20
    description: The cube correctly matches the user's movements.
  -
    name: Cube Mirror Mode
    points: 15
    description: The cube correctly mirrors the user's movements.
  -
    name: Cube Mode Toggle
    points: 5
    description: The cube switches between mirror and match modes correctly.
  -
    name: Written Problems
    points: 40
    description: See problems for precise breakdown.
points: 100
---

## VR Mirror

This part of the MP will teach you how to manipulate a `GameObject`'s rotation and position.

You must modify the provided scene, so that there is one button that does each of the following actions. The button names are placeholders; it is up to you to choose something reasonable.

* Pressing `Button 1` must reset the camera position in _global_ coordinates to (0, 0, 0).
* Pressing `Button 2` must flip the user's view 180 degrees, so that they are looking in the reverse direction.
* Pressing `Button 3` must make a certain cube either mirror or follow the user’s movements.
* Pressing `Button 4` must quit the game.

Write a script named `CameraReset` that moves the main camera's position in _global_ coordinates to (0, 0, 0) whenever you press `Button 1`.
Pressing `Button 1` multiple times must move the camera back to the origin each time, regardless of where the player moves their head between presses.
Note/hint: the Oculus software controls the camera's _local_ coordinates. Thus, _global_ refers to the sum of the coordinates of the main camera and its parents.

Write a script named `CameraFlipper` that flips the `MainCamera` 180 degrees when you press `Button 2`, as if you were turning around to look behind you.
After flipping the first time, you will be facing a transparent window with a floating cube face on the other side.
Pressing `Button 2` multiple times must cause a 180-degree flip for each press.

The `CameraReset` and `CameraFlipper` scripts must be independent of each other, and the behavior of one must not interfere with the other. Specifically, `CameraFlipper` must not change the camera's global position.

Write a script `VRMirror` to modify the position and rotation of the cube face to match or mirror your own.
Pressing `Button 3` must alternate between matching and mirroring.
We don't care what happens before we press `Button 3` for the first time.

In match mode, the cube must be looking in the same direction as the camera.
If the user faces the mirror directly, they should see the back of the cube’s head,
and when the user brings their face closer to the mirror, the cube should move in the same direction, which for the cube is away from the mirror.

In mirror mode, when you face the window, the cube must face the camera, and as a result, the user should see the cube’s face.
If you bring your face close to the screen, the cube will necessarily move closer to the screen as well.
Imagine looking into a mirror to get an intuition of this.

Please remember to tell us what your control scheme is.

## Geometric Transformations

This part of the MP will reinforce the mathematical notion of geometric transforms.

Complete the following written problems. You must show your work and all intermediate results. Do not convert intermediate results to decimals. All intermediate results are simple enough to be representable as symbolic expressions.

Submit your answers as a PDF. We recommend using LaTeX to typeset your mathematics.

1. (4 pts) In one sentence, explain what the following homogeneous transformation accomplishes when applied to a point
$$(x, y, z)$$,
in terms of yaw, pitch, roll, and translation.  
$$
T_1 =
\begin{bmatrix}
	{1 \over \sqrt{2}} & -{1 \over \sqrt{2}} & 0 & 1 \\
	{1 \over \sqrt{2}} & {1 \over \sqrt{2}} & 0 & 9 \\
	0 & 0 & 1 & 6 \\
	0 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
	x \\ y \\ z \\ 1
\end{bmatrix}
$$

1. (6 pts) Write out the $$4 \times 4$$ matrix homogeneous transformation $$T_2$$, that,
when applied to a point $$(x, y, z)$$, translates the point by $$(4,9,8)$$,
followed by a pitch of 120 degrees.

1. (6 pts) We would like to reverse the transformation applied by $$T_2 T_1$$. Write out $$\left(T_2 T_1\right)^{-1}$$.

1. (8 pts) Write out the quaternions equivalent to the rotations in $$T_1$$ and $$T_2$$ as $$q_1$$ and $$q_2$$.

1. (8 pts) Calculate the product of $$q_1$$ and $$q_2$$, i.e. $$q_1 \circ q_2$$.

1. (8 pts) Suppose we have one rotation transform $$R$$, and one translation transformation $$T$$,
both of which are non-zero.
In what cases will the end result be the same, regardless of the order in which we apply the transforms?

