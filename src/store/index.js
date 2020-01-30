import { createStore } from "redux"

const INITIAL_STATE = {
    data: [
      
    ]
}

function items(state = INITIAL_STATE, action) {

    
    var _state = state;

    console.log(action);

    switch(action.type){
        case "ADD_ITEM" :

            if(!exists(state,action.title)){
                _state = { ...state , data: [ ...state.data, {title: action.title}]}
            }

            return _state;
        case "REMOVE_ITEM":

            _state.data =  state.data.filter(item =>  item.title !== action.title );
            return _state;

        case "COMPLETE_ITEM":

            _state.data = _state.data.map(item => {
                return item.title === action.title ? { ...item, completed: action.completed } : item
            })
        
            return _state;

        default:
            return state;
    }
}

function exists(state,key){
    
    const exists = state.data.filter(item => item === key);
    return (exists.length === 0) ? false : true;

}

const store = createStore(items);

export default store;