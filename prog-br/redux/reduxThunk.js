const redux = require('redux')
const createStore = redux.createStore
const thunk = require('redux-thunk').default
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const initialState = [
    {
        id: 0,
        title: "Tarefa",
        completed: false
    }
]

function addItem(item){
    return {type: "ADD_ITEM", payload: item}
}

function loadItemAndAdd(){
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(
            res=>res.json()
        ).then(
            json=>{
                dispatch(addItem(json))
            }
        )
    }
}

function listReducer(state= initialState, action){
    switch(action.type){
        case "ADD_ITEM":
            return [...state, action.payload]
        default:
            return state
    }
}

const store = createStore(listReducer, redux.applyMiddleware(thunk))

console.log(store.getState())

store.dispatch(addItem(
    {
        id: 1,
        title: "Novo Item",
        completed: true
    }
))

console.log(store.getState())

store.dispatch(addItem(
    loadItemAndAdd()
))

console.log(store.getState())

store.subscribe(()=>{console.log(store.getState())})