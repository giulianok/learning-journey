# Haskell

Sources:
- http://learnyouahaskell.com/starting-out

## Lazy

calling `doubleMe(doubleMe(doubleMe(xs)))` where `double` is a function that doubles each number of the array and `xs` being `[1,2,3,4,5,6,7,8]`, any other language would traverse the array 3 times mutating or creating a new array in each iteration, similar to `[1,2,3,4,5,6,7,8].map(x => x * 2).map(x => x * 2).map(x => x * 2)` in JS. Haskell instead only executes the code when we want to use/show it, and calls `doubleMe` 3 times over each element and making only one array, like `transducers` in JS/FP type of lib such as lodash when we `flow` multiple maps.

Source: http://learnyouahaskell.com/introduction#about-this-tutorial
