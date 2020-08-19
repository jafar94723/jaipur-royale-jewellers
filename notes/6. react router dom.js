/*

exact path = "/"
exact path ="/topics"
path ="/topics/:topicID"


Every component gets three props from Route

1. history
        push : 
        onClick={()=> props.history.push('/topics')}
        we can use this in lifecycle methods 
        but we can't use Link in lifecycle methods

2. location
    where we are currently
    pathname: full url even though match may not be exact

3. match : 
"path":"/shop/:categoryId", (user given)
"url":"/shop/hats"
        url : 
         The matched portion of the URL. Useful for building nested <Link>s
        path : path
        isExact : 
                true if path matches exactly . ex : /topics in localhost:3000/topics
                false if path matches but not exactly . ex : / in localhost:3000/topics
        params: url parameter : dynamic parameter
        ex : for fetching data for :topicID


        2. Another use of match
        (Good for reusability)
        will work for both!!
        fdfsdfsdf/dfsdfsd/topics onwards 
        fdfsdfsdf/topics

        <Link to={`${props.match.url}/13`}>To topic 13</Link>
        <Link to={`${props.match.url}/13`}>To topic 13</Link>
        <Link to={`${props.match.url}/13`}>To topic 13</Link>

        localhost:3000/fdfsdfsdf/dfsdfsd/topics/17
        will lead to topic 17s
        topic list doesn't need to be aware
        of entire URL

two ways to navigate in React Router
1. dynamically update url and go to different page
2. Link Component : acts like an anchor tag
Ex: 
import {Link} from 'react-router-dom';
<Link to="/topics">Topics</link>
(other way to do this navigation is to
use the history prop)


Remember with url
1. we are not fetching pages.
2. we are re-rendering components and fetching data.


Oft-used
Link + match.url
history + match.url
*/