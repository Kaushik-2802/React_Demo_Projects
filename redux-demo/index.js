const redux= require("redux");
const createStore=redux.createStore
const bindActionCreators=redux.bindActionCreators
const combineReducers= redux.combineReducers
const reduxLogger= require("redux-logger")
const logger=reduxLogger.createLogger()
const applyMiddleware= redux.applyMiddleware

const CAKE_ORDERED= "CAKE_ORDERED";
const BAKE_CAKE="BAKE_CAKE";
const ICECREAM_ORDERED="ICECREAM_ORDERED";
const ICECREAM_ADDED="ICECREAM_ADDED";

function orderCake(){
  return {
    type: CAKE_ORDERED,
    payload: 1
  }
}

function bakeCake(qty=1){
    return{
        type: BAKE_CAKE,
        payload: qty
    }
}

function orderIceCream(){
    return{
        type: ICECREAM_ORDERED,
        payload: 1
    }
}

function addedIceCream(qty=1){
    return{
        type: ICECREAM_ADDED,
        payload: qty
    }
}

const initialCakeState={
    numOfCakes: 10,
}

const initialIceCreamState={
    numOfIceCreams: 20
}

const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes-action.payload,
            }
        default: return state
        case BAKE_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes+action.payload
            }
    }
}

const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type){
        case ICECREAM_ORDERED:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams-action.payload
            }
            default: return state
        case ICECREAM_ADDED:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams+action.payload
            }
    }
}

const rootReducer= combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store=createStore(rootReducer,applyMiddleware(logger))
console.log(store.getState())

store.subscribe(()=> console.log(store.getState()));

// store.dispatch(orderCake());
// store.dispatch(bakeCake(3));
// store.dispatch(orderCake());

const actions=bindActionCreators({orderCake,bakeCake,orderIceCream,addedIceCream},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.bakeCake(3)
actions.orderCake()
actions.orderIceCream()
actions.addedIceCream(3)
actions.orderIceCream()
