import { ADD_TODO } from "../action/default-action";

const initialState = [{description:"Redux",completed:false}]

function todoReducer(state=initialState,action){
    switch(action.type){
        case ADD_TODO:
            return[
                ...state,
                action.payload
            ]
        default:
            return state
    }
}
 export default todoReducer