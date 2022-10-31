---
title: 'RCG Diary #2 Fleshing out the core loop'
date: 2020-05-06 11:02:13 Z
type: BDD1
subtitle: Turning my core loop concept into something more well defined.
thumb_img_path: "/images/rugbyplaycardexample2.png"
content_img_path: "/images/rugbyplaycardexample2.png"
excerpt: In my last post, I gave a general outline of what I wanted the core loop
  to be. I also created a document on github to start fleshing out my rules. Since
  then I've added much more details to my rules, and added a lot more details to what
  will be the core loop of the game.
layout: post
---

In my last post, I gave a general outline of what I wanted the core loop to be. I also created a document on github to start fleshing out my rules. Since then I've added much more details to my rules, and added a lot more details to what will be the core loop of the game.

**Core Cards**

The game resolves around 2 types of decks, Play cards and Skill cards. In the first iteration, skill cards were for 1 individual skill, and Play cards had a lot of parts to them. I mocked up these designs on some cards to get a feel. Things felt a little too complicated. After much work, I focused on making things simpler as the best way to progress. 

First I looked at the Play cards to see how I could simplify them. I thought about what the core necessary parts were. I reduced the card to minimum needed: 

* Type: run, pass & special. 
* Result table: big win, win, lose and big lose.
* Resource required: The number and types (backs/forwards) of players needed.

For the Skill cards, originally each card was just going to have a single skill and value on it. Players would have a hand of these cards to use. In practice though, this seemed too random. Players would have to play whatever they had, without any real choice. Given the simpler Play cards, the Skill cards needed to get more to them. The skill cards will now represent all the skills for a particular type of player (Back/Forward).

A Skill card now better represents an individual player, but for now I'll continue to call them Skill cards rather then something like player cards. One interesting implication of this, that I want the game to explore, is if the players can be given a number of these cards representing the players on the team, and there skill level for that period of play. The game should hopefully then feel like each player trying to explore their opponent for weakness.

**Core Loop**

With these decks better defined I can start to lay out the core loop of play. I've written out most of the [rules here](https://github.com/aidan-duggan/RugbyCardGame/blob/master/rules.md) so I'll just focus on how I see the loop working.

Rugby generally restarts play with what is called a [Set Piece](https://www.predatorrugbyclub.org/set-pieces). These are usually a kick off, line out or scrum. In between those set pieces, the ball is moved from ruck to ruck until there is a score or another set piece. 

The Loop:
* Each player creates 2 decks of Skill cards, 6 for their backs and 8 for their forwards
* The attacker draws a hand of Play cards.
* Depending on the Set Piece some cards from each players deck are placed in an unavailable pool.
* Attacker then chooses a Play card. 
* Both players secretly choose the Skill cards they want to commit.
* The play is resolved, moving play forward or back or changing possession.
* The Attack draws an new Play card and goes again.
* Played Skill cards are not available straight away.

As mentioned, the idea here is that the attacker and defender are trying to figure out who has the better draw of cards. The attacker is probing for weakness and the defender determining the best time to try and force a bad play.

**Whats left to do**

I have a few things that still need to be determined before I can start creating a proto type to see if it all works. 

* Figure out, how exactly and, the odds of possession changing.
* Figure out how to track time.
* Figure out how the odds of scoring a penalty works.

My hope is that at least prototyping a more fully defined game will give me a base to iterate and improve things quickly, even if it leads to a radically different game in the end. Something I generally struggle with is seeing if my game actually presents meaningful choices or not. I find it easier to determine that with a physical prototype.