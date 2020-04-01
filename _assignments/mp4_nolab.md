---
layout: assignment
title: "MP4: Flight Simulator"
index: 41
due: Apr. 15, 2020 @ 11:59 PM
material:
  -
    name: MP4 Unity Package
    url: https://drive.google.com/open?id=1jmZiOKYN9swOgJSkfBTdUmYnqHvCtN55
rubric:
  -
    name: Plane
    points: 5
    description: Game has a controllable plane
  -
    name: Acceleration/Deceleration
    points: 10
    description: Plane can accelerate and decelerate comfortably
  -
    name: Rotation
    points: 10
    description: Plane can yaw, pitch, and roll
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
    name: Score Display
    points: 5
    description: Score is displayed in-world
  -
    name: Sound
    points: 15
    description: Sounds in game world complement the environment
  -
    name: Game Over
    points: 15
    description: Game handles plane crashes and shows game over in some manner
  -
    name: Framerate/Comfort
    points: 40
    description: Framerate rarely drops below 60 fps, game sound is not obnoxious, and plane acceleration, deceleration, and rotations are comfortable.
  -
    name: In-world tutorial
    points: 20
    extra: true
    description: The tutorial and explanation to the player is in game (extra credit)

points: 150
---

## NO VR

The VR lab is closed, so this will be a regular Unity project with no VR additions.

## Overview

In this MP, you will build a flight simulator in Unity.
You must make a start menu, tutorial, script to support your plane, and a user interface.
<!-- You must also optimize the game to fulfill requirements from the [Oculus Best Practices Guide](https://developer.oculus.com/design/latest/concepts/book-bp/)! -->
Much of the spec for this MP is vague. This is intentional, as we want you to be in the practice of finding creative solutions to problems. Note: This is an assignment with a lot of details, so please _start early_.

Flying allows many possible motions. You must tell us what your control scheme is in your README.

**PLEASE REGULARLY SAVE YOUR WORK IN THIS MP, AS UNITY MIGHT CRASH AT ANY TIME!**

## Simulator Environment

Create a new scene, and load the provided Unity package, which contains a large terrain for you to use. Read up on [Terrains in Unity](https://docs.unity3d.com/Manual/script-Terrain.html) so you can make changes at your discretion.
This will be pertinent when you optimize your scene, as excessive amounts of trees and vegetation on the terrain can cause performance issues.

You must create or import a model for your plane. Your model can be simple, provided it isn’t simply a Unity cube or other 3D primitive.

## Start Menu

The player should start out in a separate scene, which must contain a room with a start menu.
The room can be as simple or complex as you like,
but it should be well-lit, and the walls should be a solid color.

The room must contain a start menu with (at least) the option to quit and to start the game.
Upon selecting quit, the game should exit.
Upon selecting start, the player should be transported to your flight simulator scene.

## Flight

Your plane must be comfortable, easy to control, and should feel like a real plane. For instance, real planes cannot turn in place, and cannot stay in the air while standing still.

You must add controls for acceleration and deceleration, as well as yaw, pitch, and roll.

<!-- You MUST use the rotation and/or position tracking of the touch controllers in your control scheme somehow.
Experiment with different configurations to figure out a comfortable and intuitive setup. Remember to consult the Oculus Best Practices Guide for suggestions. -->

## Shooting Game

You are now going to take your flight simulator, and turn it into a shooting game.

Add a weapon, either a laser or physical bullets/rockets, to your plane.
You must decide from where on the plane the weapon will project or emanate.
Do not use Unity’s `Debug.DrawLine` to show a laser, as it will not appear in a built executable.

Now, scatter some spheres in the sky.
When your plane successfully shoots a sphere, the sphere should disappear for 5 seconds, and then reappear.
Make sure the spheres are easily visible.
Successfully shooting the spheres should increment the game score, which we will talk about in the next section.

## UI

You must implement some controls that will form the user interface for your game.
<!-- Remember to consult the Oculus Best Practices Guide and share ideas with your teammates.
If you are still confused, think about the games you have played before, and check [this](https://developer.oculus.com/blog/introducing-the-oculus-sample-framework-for-unity-5/). -->

You must implement a pause button that pauses the game and provides the option to go back to the main menu.

Additionally, you must display a score value clearly somewhere. After hitting a sphere in your scene, your score should increase.

## Sound

Add all necessary sounds to your simulator.
Some examples include engine noise, crash sounds, firing sounds, ambient music, etc.
Make sure that your sounds are neither too loud, nor too quiet to hear, and make for a comfortable experience.

## "Game Over" Condition

When the player crashes the plane, they should see a game over screen, which should give the option to go back to the main menu, restart the game, or quit.
If your game over screen has a menu, you can choose how it will be controlled,
but make sure this is communicated to the player via the tutorial,
or messages included in the “game over” menu screen (such as “juggle the touch controllers to return to the main menu”). [\*\*](#footnotes)

## Tutorial (Extra Credit)

Make an in-world, interactive tutorial that explains how to control the plane. This needs to be more than just a copy of your README on the wall as a text canvas.

## Overall Design

We will evaluate this using the following criteria (not necessarily an exhaustive list):

1. Your interface/instruction system allows a first time player, without any prior knowledge of your simulator, should be able to pick up the controls quickly and easily

1. The overall experience of flying your plane is smooth and comfortable, for example: Are rotations comfortable? Does your plane behave as expected? Does the weapon work as expected?

1. Your flight simulator keeps the frame rate consistently at 60fps and doesn't lag

---

## Footnotes

***\* Don't do this***
***\*\* DEFINITELY DO NOT DO THIS***
