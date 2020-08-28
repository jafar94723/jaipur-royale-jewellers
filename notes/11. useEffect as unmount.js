/*
use only in components that
need lifecycle methods

WillUnMount

clean up code
useEffect(()=>{

    console.log('I am subscribing');
    const unsubscribe = firestore.collection('collections').onSnapshot(snapshot=>console.log)

    return ()=>{
        console.log('I am unsubscribing')
        unsubscribe()
    }
},[])

*/