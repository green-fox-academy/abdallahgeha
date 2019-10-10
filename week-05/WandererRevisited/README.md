# Full Week Project: Wanderer - The RPG game

Build a hero based walking on tiles and killing monsters type of game. The hero
is controlled in a maze using the keyboard. Heroes and monsters have levels and
stats depending on their levels. The goal is reach the highest level by killing
the monsters holding the keys to the next level.

## Workshop: Plan your work

### 0. Fork this repository (under your user)

### 1. Clone the repository to your computer

#### How to launch the program

In the cloned repository:

- Run: `npm install` for initializing the modules

- Run: `npm start` for starting the development server,
and the automatic compilation

- Open `localhost:8080` in your browser

We provided an example for some necessary functionalities.

It contains:

- a big drawable canvas with one image painted on it
- and handling pressing keys, for moving your hero around
- be aware that these are just all the needed concepts put in one place
- you can separate anything anyhow

```typescript

'use strict';

// Acquire the rendering context
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw image

// Drawing a floor tile
const image = document.getElementById('floor') as HTMLImageElement;
ctx.drawImage(image, 50, 50);

/* You only have to change the argument string in document.getElementById('floor')
 *
 * Possible images:
 * - floor
 * - wall
 * - hero-up
 * - hero-right
 * - hero-down
 * - hero-left
 * - boss
 * - skeleton
 */

// Function to handle the key press events
function onKeyPress(event) {
  // Handle arrow keys
  switch (event.keyCode) {
    case 37:
      alert('left');
      break;
    case 38:
      alert('up');
      break;
    case 39:
      alert('right');
      break;
    case 40:
      alert('down');
      break;
  }
}

// Listen on pressing the keys
document.body.addEventListener('keydown', onKeyPress);
```

### 3. Create a GitHub project

-create it under your repository for your work and add the [project stories](https://github.com/greenfox-academy/teaching-materials/blob/master/project/wanderer/stories.md).

### 4. Form groups and plan your application together

Plan your architecture. 
In your architecture you should consider the following components:

- Models

  - GameObject

    - Character

      - Monster

        - Hero
        - types

      - Area

      - Tile

        - EmptyTile
        - NotEmptyTile

- GameLogic

  - current hero
  - current area

- Main

  - handling events
  - current game

#### 5. Think about task breakdown in Kanban together

Now that you see the big picture, **go through the stories together** 
and think about how to break them down into tasks:

- To classes
- To methods
- To data and actions
- Extend the story cards with some of these points as a reminder

#### 6. Start working on your first task!
