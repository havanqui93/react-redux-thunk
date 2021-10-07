import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/post/postAction';
import PostList from './PostList';

function PostContainer() {
    const dispatch = useDispatch();
    const getPosts = useSelector((state) => state.posts);
    const { posts, error, loading } = getPosts;

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    return loading ? (
        <h2>Loading...</h2>
    ) : error ? (
        <h2>{error}</h2>
    ) : <div>
        <PostList posts={posts} />
    </div>
}


export default PostContainer;