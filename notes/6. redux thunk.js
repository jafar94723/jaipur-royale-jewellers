/*
redux thunk is a middleware.
it allows us to do async actions.

whenever we dispatched actions
they went straight to reducer.


redux-thunk keeps listening to actions
that are being dispatched.
when it sees that an action is returning
a function and it gives the dispatch
paramter to the returned function


when it sees a function it invokes it
with dispatch as a param.

note that in mapDispatchToProps we invoke
the HOF so the returned function is given to 
redux thunk.
*/