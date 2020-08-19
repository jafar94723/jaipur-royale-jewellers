/*
Route takes mostly 3 args:-


1. exact : boolean  default true, means path must be exactly equal to value
2. path : string for url
3. component : what to render?





for exact = false
localhost:3000/hats would also be true
for path = "/"
and it will render both hats and homepage



Switch : renders the first matching Route
(even in absence of exact)

*/