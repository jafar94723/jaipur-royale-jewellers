/*

firestore.collection('users').doc(docId).collection('cartItems').doc('cardItemId');

firestore.doc('/users/userId/cartItems/cardItemId');

firestore.collection('/users/userId/cartItems');



QueryReference vs QuerySnapshot

A query is a request we make to firestore
to give us something from the database.

Firestore returns us two types of objects:
    1. references 
    2. snapshots
    These objects can be either document or collection.

Firestore will ALWAYS return us these objects
even if nothing exists at from that query.



1. A query reference is an object 
that represents the "current"
place in the database that we are querying.


We get them by calling either:
    firestore.doc('users/:userId');
    firestore.collections('/users');


The query reference object does not
have the actual data of the collection
or document.
It instead has properties that tell us
details about it, or the method
to get the snapshot object which
gives us the data we are looking for.


a query reference is always returned
even for non-existing document.
this is because :
1. we actually reference object
to save data in the location in the DB.
2. or how to get data.




Difference between QueryReference vs QuerySnapshot

1. We use documentRef objects to perform
our CRUD methods : .set() , .get(), .update(), .delete()

2. We can also add documents to collections
using the collectionRef object using the .add() method
collectionRef.add({//value:prop})

3. We get the snapshotObject from the 
referenceObject using the .get() method
i.e. documentRef.get() or collectionRef.get()

documentRef returns a documentSnapshot object
collectionRef returns a querySnapshot object

const userRef = firestore.doc('users/id')

const snapshot = await userRef.get() // returns object with prop : exists

*/