import { NEW_POST } from '../actions/types.js'


const initialState = {
   contents: [],
};

 export const usersReducer = (state = initialState, action) => { switch(action.type){
        case NEW_POST:
            return{
                ...state,
                contents: action
            }
        default:
            return state
    }
}