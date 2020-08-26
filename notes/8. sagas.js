/*
sagas is a function that 
conditionally runs.

ex: a function that is listening
to fetchCollectionsStart action

unless this action fires,
sagas does not execute


Side effects:-
API calls
something that trigger impure reaction
(same argument,inconsistent result)






In the previous video I mentioned 
that sagas fire before reducers, 
it's actually the other way around! 
Reducers fire first, then sagas 
receive the action. From there, 
sagas can fire off new actions which 
in turn hit the reducers and other 
sagas as well!



Generator Functions
aync await is built on generator functions
They give ability to pause functions.
Even if it is async code
*/

function* gen(){
    console.log('a');
    console.log('b');
}
//instantiating generator object
const g = gen();

//g = gen{<suspended>}
//g is a generator object

g.next();

//g.next returbs {value: undefined, done:true}


function* gen2(i){
    yield i;
    yield i + 10;
}

const g2 = gen2(5);

const result = g2.next();
//result : {value:5,done:false}

const r2 = g2.next();
//r2 : {value:15,done:false}

const r3 = g2.next();
//r3:{value:undefined,done:true}

/*
Purpose of saga middleware :-
run sagas concurrently
run them all together in a way
that does not block the execution

For e.g. :
if we had multiple sagas that were 
listening for different actions
that were then triggering other functions
we dont our code to wait for these
functions to finish.

takeEvery is an effect that creates a 
non blocking call in order to 
let other sagas continue running.


task : kickstarting a saga.
Also, we are able to cancel tasks.

Say user clicked on fetch
it creates a task
user clicks again
so we can cancel the old one

At every yield,
we're giving control over this saga
back to saga middleware

if saga middleware gets another
takeEvery action call 
it can decide to cancel any previous calls


that's why we write yields in our 
generator functions
*/