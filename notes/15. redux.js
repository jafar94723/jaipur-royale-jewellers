/*

React is a view layer

When to use redux:
1. When apps get complex
2. Useful for sharing data between containers by moving state one level up 
3. Predictable state management :-
            a. Single source of truth : Store
            b. State is read only : Immutable state, always return new Object.assign
            c. Changes maded using pure function
4. solves prop drilling
5. you should not use same data in different states of components


Inspired By:
Event Sourcing
CQRS

DB changes keep happening
and we needed to make sure they 
happen in a nice cohesive way.



Key terms:-
1. Actions : Events
2. Reducer : Pure function that takes action and gives new store
3. React component subscribed to store change


you can still use redux with state.
*/