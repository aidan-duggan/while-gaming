---
type: BDD1
title: "RCG Diary #1 Laying down the framework"
subtitle: For my first diary entry I'll outline the core mechanics of the game.
date: 2020-04-30T14:04:03.607Z
thumb_img_path: /images/rugbyplaycardexample.png
content_img_path: /images/rugbyplaycardexample.png
layout: post
---
#### Rugby Card Game: Diary #1

**Where to start**

First step is laying out the rules in a document so I can easily iterate on them. This will help me build up the picture of how it will all work. I've started that [here](https://github.com/aidan-duggan/RugbyCardGame/blob/master/rules.md). At time of writing its just what I think the components will be. You can read the [laws of rugby](https://en.wikipedia.org/wiki/Rugby_union#Laws) to get a better idea of what I'm trying to model.

**Core Mechanics**

I'd like the game to be quick and capture two core concepts. One is the positional play of rugby, managing where players are and where they attack or defend, trading field position for possession of the ball. The other is the tension in every tackle, every pass etc. Successful actions move the ball closer to the opposing platers try line, with position of the ball possibly changing.

I've decided a variation of 21/Blackjack for determining success. Players will have cards with different suits and values. To resolve the action, players play cards of the appropriate suit trying to out do each other. The difference of the sum would determine the type of result. This can be the attacker moving forward, moving back but still holding on to the ball, winning or giving away a penalty etc. These I'll call Skill Cards.

For the positional play, I've been trying to figure how to resolve this in a way that is quick and easy to understand. Tracking the location of each player, and moving them every turn feels like too much. I've thought about 7s variant so there would be less to manage but I feel that its too fiddly.

I had an inspiration that there was no need to track where players are at all times, instead tracking where players were. This would result in each play in some way limiting or opening up the next. This allows players to strategize about what cards to play, both offensively and defensively. These I'll call Play Cards.

This way the game will resolve around two decks of cards, one for deciding what is being attempted and the result, and the other for success or failure. 

I need to determine the best composition of the decks, enough that there is choice but not too much that the best option is always obvious. Then I need to figure out how players get more cards. This part I think is a good opportunity to highlight how fast paced Rugby can be and the risk reward that comes with faster back's play vs more slow but steady forward play.

**Next Steps**

I need to iron out exactly how playing and resolving a Play Card using Skill cards works. I'll leave aside how you get these cards, and just assume a starting hand. I'll also need to mock up a position on the field track and score track card.