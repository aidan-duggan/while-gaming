---
type: BDD1
title: "RCG Diary #1 Laying down the framework"
subtitle: For my first diary entry I'll outline the core mechanics of the game.
date: 2020-04-29T14:04:03.607Z
thumb_img_path: /images/rugbyplaycardexample.png
content_img_path: /images/rugbyplaycardexample.png
layout: post
---
**Where to start**

First step is laying out the rules in a document so I can easily iterate on them. This will help me build up the picture of how it will all work. I've started that [here](https://github.com/aidan-duggan/RugbyCardGame/blob/master/rules.md). At time of writing its just what I think the components will be. You can read the [laws of rugby](https://en.wikipedia.org/wiki/Rugby_union#Laws) to get a better idea of what I'm trying to model.

**Core Mechanics**

I'd like the game to be quick and capture two core concepts. One is the positional play of rugby, managing where players are and where they attack or defend. The other is the tension in every tackle, every pass etc. Successful actions move the attack towards scoring.

I've decided to use a variation of 21/Blackjack. Players will have cards with different suits and values. To resolve the action, players play cards of the appropriate suit trying to out do each other. The difference of the sum would determine the type of result. This can be the attacker moving forward, moving back but still holding on to the ball, winning or giving away a penalty etc.

For the positional play, I've been trying to figure how to resolve this in a way that is quick and easy to understand. Tracking the location of each player, and moving them every turn felt like too much. I thought about 7s variant so there was less to manage but I still feel that its too fiddly.

I had an inspiration that there was no need to track where players are at all times, instead tracking where players were