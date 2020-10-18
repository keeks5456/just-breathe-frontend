import {FETCH_POST} from '../actions/user_blog_action'

const initialState = {
    blogs: []
}

export const blogsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POST:
            console.log('reducer')
            return{
                ...state,
               blogs: action.payload,
            }
        default: 
            return state
    }

}