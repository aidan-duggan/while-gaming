---
type: BDD1
title: "RCG Diary #2 Fleshing out the core loop"
subtitle: Turning my core loop concept into something more well defined.
date: 2020-05-06T11:02:13.496Z
thumb_img_path: /images/rugbyplaycardexample2.png
content_img_path: /images/rugbyplaycardexample2.png
excerpt: In my last post, I gave a general outline of what I wanted the core
  loop to be. I also created a document on github to start fleshing out my
  rules. Since then I've added much more details to my rules, and added a lot
  more details to what will be the core loop of the game.
layout: post
---
In my last post, I gave a general outline of what I wanted the core loop to be. I also created a document on github to start fleshing out my rules. Since then I've added much more details to my rules, and added a lot more details to what will be the core loop of the game.

**Core Cards**

The game resolves around 2 types of decks, Play cards and Skill cards. In the first iteration, skill cards were for 1 individual skill, and Play cards had a lot of parts to them. I mocked up these designs on some cards to get a feel. Things felt a little too complicated. After much work, I focused on making things simpler as the best way to progress. 

First I looked at the Play cards to see how I could simplify them. I thought about what the core necessary parts were. I reduced the card to minimum needed. 

* Type, run, pass & special. 
* Result table, just big win, win, lose and big lose.
* The number and types (backs/forwards) of players needed.

For the Skill cards, originally each card was just going to have a single skill and value on it. Players would have a hand of these cards to use. In practice though, this seemed to random. Players would have to play whatever they had, without any real choice. Given the simpler Play cards, the Skill cards needed to get more complicated. The skill cards will now represent all the skills for a particular type of player (Back/Forward).

Now the skill cards better represent individual players, but for now I'll continue to call them skill cards. One interesting implication of this that I want the game to explore, is if the players are given random set of Skill cards that are reused for a number of plays. The game should hopefully feel like each player trying to explore their opponent for weakness. Also more explicitly broken out between backs and forwards.

**Core Loop**

With these decks better defined I can start to lay out the core loop of play. I written out most of the [rules here](https://github.com/aidan-duggan/RugbyCardGame/blob/master/rules.md) so I'll just focus on how I see the loop working.

Rugby generally restarts play with what is called a [Set Piece](https://www.predatorrugbyclub.org/set-pieces). These are usually a kick off, line out or scrum. In between those set pieces, the ball is moved from ruck to ruck until there is a score or another set piece. 

* Each player creates 2 decks of Skill cards, 6 for their backs and 8 for their forwards
* The attacker draws a hand of Play cards.
* Depending the Set Piece some cards from each players deck are placed in a unavailable pool.
* Attacker then chooses a Play card. 
* Both players secretly choose the Skill cards they want to commit.
* The play is resolved, moving play forward or back or changing possession.
* 
* Played Skill cards are not available straight away.



Whats left to do