the-city
========

What it's about: The basis is to create a functioning city (houses, factories, entertainment centers, roads...).
It's about keeping people's satisfaction above a certain limit and a functioning economy (people work) and developing the city,
sometimes in the future maybe even more cities or even multiplayer.

*** Of course, what I wrote here will probably take some time to develop. It won't be right at the beginning.***

The principle of the game: the construction will take place using a simple menu, where the user selects a building and then builds it (depends on money).

## save.js

It is a file that will save the current progress of the game to the file.

Components needed:
object window.save - individual objects (houses, roads...) will be saved to it
function store() - saves the current position in the game, the core function of save.js
function load() - loads stored data
User ID - id="name" - works as a component to enable multiplayer game on one computer; indicates which user to load.

## world.js

The file at the start of the game (when first launched) will render the world where it will be played. Adds a few houses and one working factory,
so that it can start somehow.

## Appearance

This is what Franta will focus on. In HTML and CSS (style.css).

## object library (database) (object.db - via JSON)

It is a file where data about individual objects will be stored.
For each object:
  "type" -> will have a name (English, one word) that describes the object (e.g. street, hotel)
  "upgrade" -> it is a number with two digits, it indicates the level of the building, the base is 00
  "img" -> the url of the image is uploaded here (it will be /img by default)
  "money" -> cost of building/upgrade
Module Hierarchy:
  type -> upgrade -> img
                  -> money


## Commits on Github 

To add a file, write "+" (plus) and as briefly as possible (3-4 words) in the comment.

## Creating new building images

Start from the grass base image (grass.png) the building can be any height but it is important to have the base (grass) at the bottom edge of the image.

---

Ondra Danes:
Start doing on the principle that buildings are built for money and are simply subtracted during construction.
Each building (we now have four) has a different price. Try playing with it.

---

Some features (write your ideas here):

People satisfaction
During the construction and improvement of sports centers, housing, services (e.g. public transport - trains, metro, buses eventually, we can add, for example, garbage collection...)
satisfaction increases. People feel like going to work. On the other hand, satisfaction is reduced by the construction and expansion of factories...

Extraction of raw materials
The city mines raw materials, can export them, and thus obtains financing for development. At the same time, he needs them for construction (if he doesn't have them, he can import them).
They will be hidden on the map and the user will not see them at first glance. They have to pay for a geological survey and then build factories for mining - it will only work in the place of raw materials.

Bank loans
The player (city) can borrow money with the understanding that they must somehow repay it.
