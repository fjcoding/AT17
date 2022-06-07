# Pacman

## Problem Description
Pacman finds himself in a grid filled with monsters. Will he be able to eat all the dots on the board before the ghosts eat him?

Incomplete list of things the game needs:

- pacman is on a grid filled with dots
- pacman has a direction
- pacman moves on each tick
- pacman eats dots/super dots/fruits
- ghosts
- game score (levels completed, number of dots eaten in this level)

Demo: https://g.co/kgs/G8eUP1

## Requirements

### Iteration 1
- The console should be able to print pacman game with elements listed above. A default template can be used for grid and walls
- The game should not be "playable", instead, it should have autonomy in the sense that runs by itself. For example, pacman moves around the grid with random directions every time that he finds a point where it can take multiple roads.
- Basic rules of the game should apply
    - Every time pacman pass over a dot, the dot is eaten (disappears) and points are increased
    - If pacman hits a ghost, he dies, loses a life and returns to initial position to begin again. If all lifes are lost, the game is over
    - If pacman eats a super dot, ghosts become vulnerable for a short period of time, then, if pacman hits any ghost during this period, the ghost is eaten, goes back to "ghosts base" and born again. In addition, pacman wins points for each eaten ghost
    - Fruits appear randomly in pacman's starting point for a brief period of time. If eaten by pacman, pacman wins extra points
    - Once all dots have been eaten, pacman wins
    - Ghosts move randomnly trying to hunt pacman