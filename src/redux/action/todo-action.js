import { ADD_TODO } from "./default-action";

function addTodo(arg){
    return{
        type:ADD_TODO,
        payload:arg
    }
}

export default addTodo