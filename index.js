const redux =require('redux')
const createStore=redux.createStore
const BUY_CAKE='BUY_CAKE';
// action define
function buyCake(){
    return {
        type:BUY_CAKE,
        info:"first react action"
    }
}

// define state
const initialState={
    numOfCakes:10
}

// Define Reducer function
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }

        default: return state
    }
}

// create store from redux liibrery
const store= createStore(reducer)
console.log("initial state",store.getState());

// Subscribe
const unsubscribe=store.subscribe(()=>console.log("Updated state",store.getState()))

// Dispatch method
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()