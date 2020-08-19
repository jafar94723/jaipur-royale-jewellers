/*

We get a documentSnapshot object from
our documentReference object.

The documentSnapshot object allows
us to check if a document exists
at this query using the .exists
property which returns a boolean.

We can also get the actual properties
on the object by calling the .data()
method, which returns us a JSON object
of the document.

*/