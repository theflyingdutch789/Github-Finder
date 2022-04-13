const alertReducer = (state, action) => {
    console.log("Control in reducer");
    switch(action.type){
        case 'SET_ALERT':
            return action.payload;
        case 'REMOVE_ALERT':
            return null;
        default:
            return state;
    }
}

export default alertReducer;