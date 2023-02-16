const incrementAction = (value)=>{
    return {type: 'INCREMENT', payload: value}
}

const decrementAction = {type: 'DECREMENT', payload: 1};

module.exports = {
    incrementAction,
    decrementAction
}