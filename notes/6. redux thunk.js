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

*/