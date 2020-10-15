import { NEW_POST } from "../actions/user_actions";


const initialState = {
   content: [],
   user: {}
};

 export const usersReducer = (state = initialState, action) => { 
     switch(action.type){
        case NEW_POST:
            return{
                ...state,
                content: action.content
            }
        default:
            return state
    }
}