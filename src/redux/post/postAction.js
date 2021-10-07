import axios from 'axios';
import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE
} from './postType';

export const fetchPostsRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}

export const fetchPostsSuccess = posts => {
    return {
        type: FETCH_POST_SUCCESS,
        payload : posts
    }
}

export const fetchPostsFailure = error => {
    return {
        type: FETCH_POST_FAILURE,
        payload : error
    }
}

export const fetchPosts = () => async(dispatch) => {
        dispatch(fetchPostsRequest())
        await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data;
            dispatch(fetchPostsSuccess(posts));
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchPostsFailure(errorMsg));
        });
}