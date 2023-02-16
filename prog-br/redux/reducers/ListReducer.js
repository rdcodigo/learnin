module.exports = (state= ['Um item padrao'], action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload]
        default:
            return state
    }
}