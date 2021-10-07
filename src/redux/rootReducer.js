import { combineReducers } from 'redux'
import postReducer from './post/postReducer'

const rootReducer = combineReducers({
    posts: postReducer
});

export default rootReducer;