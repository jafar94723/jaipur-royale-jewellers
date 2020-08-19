const INITIAL_STATE = {
    sections:[
        {
            title:'hats',
            imageUrl:'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
            id:1,
            linkUrl:'shop/hats'
        },
        {
            title:'jackets',
            imageUrl:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            id:2,
            linkUrl:'shop/jackets'
        },
        {
            title:'sneakers',
            imageUrl:'https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
            id:3,
            linkUrl:'shop/sneakers'
        },
        {
            title:'womens',
            imageUrl:'https://images.unsplash.com/photo-1575881122010-dfda094fb8b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
            size:'large',
            id:4,
            linkUrl:'shop/womens'
        },
        {
            title:'mens',
            imageUrl:'https://blog.pakistani.pk/wp-content/uploads/2016/02/Top-10-Pakistani-Male-Models-Jahan-e-Khalid.png',
            size:'large',
            id:5,
            linkUrl:'shop/mens'
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;