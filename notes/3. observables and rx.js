/*

observable pattern


ex: multiple click

observable is sone piece of code
that wraps around this stream of 
events.

the observer is a piece of code
that has three function calls on it.
{
    next:(nextValue)=>{//Do something with value}
    error:(error)=>{//Do something with error}
    complete:()=>{//Do something when finished}
}

Ex:
try{}
catch(){}
finally{}


complete : we can stop listening
and shut down the stream

the observable is capable of shutting 
down streams.



a subscription is a way for ud to tie
our code (observer) using a listener.

So our observer is listening to these values
and we're subscribing to this observerr's
stream of events.


hey,observable i'm gonna give  you my 
function calls and please call
appropriate functions whenever a new event 
comes in.


observable : stream of data


auth.onAuthStateChanged(next,error function) : next is a very basic observer.
the moment when we pass the function
we are instantiating some listener
on this observable onAuthStateChange.

the stream is always open,
but when our component unmounts
we want to stop listening to the events in our app,
this is called unsubscribing.


in code,
const subscription = auth.onAuthStateChanged(next,error function)
some listener is instantiated and returned
and on unmount this reference is set to null

observable continues as it is.
an observable can have as many listeners.

onAuthStateChanged : stream of events

onAuthStateChanged never ends because multiple users 
can keep logging in and logging out

every time that happens firebase sends us and 
emits to us another piece in that stream
(new user logged in and new user logged out)

it is a continuous stream.

there is no 'complete call' as firebase
is a live db.
there is no point where firebase can stop accepting 
log in requests so there is no complete callback 
we can pass in.
*/