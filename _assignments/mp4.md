---
layout: assignment
title: "MP4: Flight Simulator"
assignment: 40
parts:
  -
    title: MP4
    due: Nov 3, 2019 @ 11:59 PM
material:
  -
    name: Ground Material Package
    url: /mps/MP4-groundmats.unitypackage
  -
    name: Standard Assets Package
    url: /mps/MP4-standardassets.unitypackage
  -
    name: Miscellaneous Package
    url: /mps/MP4-misc.unitypackage
rubric:
  -
    name: Plane
    points: 5
    description: Game has a controllable plane
  -
    name: Acceleration/Deceleration
    points: 5
    description: Plane can accelerate and decelerate comfortably
  -
    name: Rotation
    points: 10
    description: Plane can yaw, pitch, and roll
  -
    name: Uses Touch Controllers
    points: 25
    description: Plane control scheme makes inventive use of rotation and position tracking of touch controllers
  -
    name: Weapon
    points: 10
    description: Pressing a button shoots out a raycast or bullet from the plane
  -
    name: Spheres
    points: 5
    description: There are spheres around the terrain
  -
    name: Shooting Game
    points: 25
    description: Player can shoot spheres, which disappear, then reappear
  -
    name: Start Menu
    points: 10
    description: Game has a legible and understandable in-world start menu
  -
    name: Displaying Score
    points: 5
    description: Score is displayed in-world
  -
    name: Sound
    points: 20
    description: Elements of the simulator that should have sound, do.
  -
    name: Game over
    points: 10
    description: Game handles plane crashes in some manner
  -
    name: Framerate/Comfort
    points: 40
    description: Framerate rarely drops below 60 fps, game sound is not obnoxious, and plane acceleration, deceleration, and rotations are comfortable. Game conforms to Oculus Best Practices Guide
  -
    name: Simple Tutorial
    points: 5
    extra: true
    description: Game has an in-world tutorial that clearly communicates how to control the plane (Extra Credit)
  -
    name: Interactive tutorial
    points: 20
    extra: true
    description: The tutorial provided to the player is interactive (Extra Credit)

points: 170
---
## Overview
Welcome to MP4! In this MP, you are going to build a flight simulator in Unity. You are going to construct a start menu and tutorial, write script to support your plane, make a UI, and optimize the game to fulfill requirements from the [Oculus Best Practices Guide](https://developer.oculus.com/design/latest/concepts/book-bp/)!
Much of the spec for this MP is vague. This is intentional, as we want you to be in the practice of finding creative solutions to problems. Note: This is an assignment with a lot of details, so please _start early_.

**README is required.**
You need to include all necessary instructions so that our graders can play your game. Without a README, you will result a 0 in this MP.

**PLEASE REGULARLY SAVE YOUR WORK IN THIS MP, AS UNITY MIGHT CRASH AT ANY TIME!**

---

## Part 1 - Environment and Flight

### Simulator Environment

1. Create a new scene, and load all three of the provided Unity packages, one of which contains a large terrain for you to use. Read up on [Terrains in Unity](https://docs.unity3d.com/Manual/script-Terrain.html)
   so you can make changes if need be. This will be especially pertinent when it comes time to optimize your scene, as trees and vegetation
   on the terrain can cause performance issues.

1. Create or import a model for your plane. Your model can be simple, provided it isn’t simply a Unity cube or other 3D primitive.


### Start Menu

The player should start out in a separate scene, which will contain a start menu and tutorial. The start menu will be controlled by the buttons on the Oculus touch.
The start menu will require the use of the Oculus touch controllers. Both [Unity](https://docs.unity3d.com/Manual/OculusControllers.html) and [Oculus](https://developer.oculus.com/documentation/unity/latest/concepts/unity-ovrinput/) have pages dedicated to
touch controller input in Unity.


1. Create a new scene, separate from your flight simulator, and a room within that scene. The room can be as simple or complex as you like,
   but it should be well-lit, and the walls should be a solid color.

1. Somewhere in this room, place a start menu. At the very minimum, your menu must include the option to quit and to start the game.

1. Upon selecting quit, the game should exit. Upon selecting start, the player should be transported to your flight simulator scene.


### Flight

Your plane must be comfortable, easy to control, and should feel like a real plane. For instance, real planes cannot turn in place, and cannot
stay in the air while standing still.

1. You must use the touch controllers to control the plane. You can implement multiple control schemes during development, but we will
   only check the version with the touch controllers.

1. Your plane must be able to accelerate/decelerate, and yaw, pitch, and roll. You should implement these functions in your own way with
   the touch controllers and Oculus Rift.

1. You MUST use the rotation and/or position tracking of the touch controllers in your control scheme somehow. Experiment with different
   configurations to figure out a comfortable and intuitive setup. Remember to consult the Oculus Best Practices Guide for suggestions.

---

## Part 2 - Make it a Game!

### Shooting Game

You are now going to take your flight simulator, and turn it into a shooting game.

1. Add a weapon, either a laser or physical bullets/rockets, to your plane. You decide from where the ray/bullets emanate from the plane.
   Do not use Unity’s `Debug.DrawLine` for your laser, as it will not appear in a built executable.

1. Scatter some spheres in the sky. When your plane successfully shoots a sphere, the sphere should disappear for 5 seconds, and then
   reappear. Make sure the spheres are easily visible.

1. Successfully shooting the spheres should increment the game score, which we will talk about in the next section.


### UI

You must implement a User Interface for your game. Remember to consult the Oculus Best Practices Guide and share ideas with your teammates.
If you are still confused, think about the games you have played before, and check [this](https://developer.oculus.com/blog/introducing-the-oculus-sample-framework-for-unity-5/).

1. You should have a pause button that pauses the game, and provides the option to go back to the main menu.

1. Your UI should show the score to players. After hitting a sphere in your scene, your score should increase.


### Tutorial (Extra Credit)

Since you came up with some fancy control scheme, the likes of which we may never have seen before, you can give us a tutorial.
You can assume we know how to use the pointing device to access the start menu, but nothing else.

1. Your tutorial must cover all of the plane controls.

1. The tutorial can be accessed from the main menu, or simply be in the same room as the start menu.

1. For 20 points of extra credit, make your tutorial interactive. This means the player should initiate the tutorial, and receive
   prompts to perform actions. Upon performing these actions, the player should receive feedback, and the tutorial should advance.
   For example, the tutorial could prompt the player to “Throw the controller across the room in order to accelerate”. [**\***](#footnotes) Upon hurling the controller,
   the player would see some indication that the plane has sped up, and get a message saying “good job”.


### Sound

Add all necessary sounds to your simulator. Some examples include engine noise, crash sounds, firing sounds, ambient music, etc. Make sure that your
sounds are neither too loud, nor too quiet to hear, and make for a comfortable experience.


### "Game Over" Condition

When the player crashes the plane, they should see a game over screen, which should give the option to go back to the main menu, restart the game, or quit.
If your game over screen has a menu, you can choose how it will be controlled, but make sure this is communicated to the player via the tutorial, or messages
included in the “game over” menu screen (such as “juggle the touch controllers to return to the main menu”). [**\*\***](#footnotes)


### Overall Design

“Overall Design” is a vague definition, but we are going to evaluate it along the following dimensions:

1. Your interface/instruction system works as expected: a first time player, without any prior knowledge of your simulator, should be able to pick up the controls quickly and easily.

1. The overall experience of flying your plane should be smooth and comfortable. For example: Are rotations comfortable? Does your plane behave as expected? Does the weapon work as expected?

1. Your flight simulator should be polished. That is, there should be few, if any, noticeable glitches, controls should work as intended, and the frame rate should be consistently at or above 60fps.

---

### Footnotes

***\* Don't do this***
***\*\* DEFINITELY DO NOT DO THIS***
