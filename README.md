## Whee get Threes

[Live link](https://ckim310.github.io/whee-get-threes/)

### Overview

Whee get Threes is a play on the game Threes. The objective of the game is to slide the tiles on the grid and combine them with a tile of the same number (excluding a tile with 2, that can only be combined with a tile with 1) to create the highest possible multiple of three. The game will start with a random tile of 1, 2, or 3 in a random position.

Depending on which arrow key the user presses, all tiles will move one square in that said direction. The tiles will only merge when at the edge.

### MVP  

With this game (Whee get Threes), users will be able to:

- [ ] Start, pause, and reset the game
- [ ] Move tiles using arrow keys
- [ ] Merge tiles to sum up and create a new tile


### Wireframes

This game will consist of a single screen with a grid/board, game controls, and nav links to the Github and my LinkedIn.  Game controls will include arrow keys, pause, and reset buttons.

![wireframes](images/wireframe.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for creating the game, board, tile classes,
- `HTML` to structure the page layout,
- `CSS` to style the page and game (board and tiles).

In addition to the entry file, there will be three scripts involved in this project:

`game.js`: this script will house the logic of the game and updating the `board.js` and rendering it to the DOM.

`board.js`: this script will handle the overall state of the board.

`tile.js`: this script will contain the constructor for the `Tile` objects. Each `Tile` will consist of a number value and it's position.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running. Write a basic entry file and the bare bones of all 3 scripts outlined above.

Goals for the day:

- Create and get the files all setup
- Do some further research as to any other helpful tools

**Day 2**:  First, build out the `Tile` object to connect to the `Board` object.  Then, use `board.js` to create and render the square grid. Start on the `game.js` and the logic of the merging of tiles.

Goals for the day:

- Complete the `tile.js` module
- Render a square grid to the `HTML5`
- Get the `Tile` object to appear on the board

**Day 3**: Build out modular functions for handling the tiles moving and rendering it on the board.

Goals for the day:

- Have the game logic to incorporate all possible moves
- Start on getting the board to populate and adjust to merged tiles


**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.

Goals for the day:

- Create controls for pause, start, reset, and arrow keys
- Have a styled `HTML`, nice looking controls and title

### Bonus features

There are many directions this cellular automata engine could eventually go.  Some anticipated updates are:

- [ ] Add options for starting the board with higher numbers
- [ ] Add speed options