const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const counterReducer = require('./reducers/CounterReducer');
const {incrementAction, decrementAction} = require('./actions/CounterActions');
const listReducer = require('./reducers/ListReducer');
const {addItemAction} = require('./actions/ListActions');


const allReducers = combineReducers(
    {
        counter: counterReducer,
        list: listReducer
    }
)

const store = createStore(allReducers);

console.log(store.getState());

store.subscribe(
    ()=>{
        console.log(store.getState().list)
        console.log(store.getState().counter)
    }
);

store.dispatch(addItemAction('Um novo item'));
store.dispatch(incrementAction(1));
store.dispatch(decrementAction);