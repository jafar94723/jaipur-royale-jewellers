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

