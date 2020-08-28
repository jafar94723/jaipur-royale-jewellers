
/*
all takes an array of sagas

yield fetchCollectionsStart
//next yield waits for previous yield
//not concurrent
yield fetchCollectionsStart
yield fetchCollectionsStart

//all runs them concurrrently

*/