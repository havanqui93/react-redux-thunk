import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const PostTitle = styled.h2`
    color : white;
    background-color: blue;
    text-align: center;
    width: 50%;
    margin: 10px auto;
    padding : 20px;
`;
const PostBox = styled.div`
    display : grid;
    grid-template-columns : auto auto auto auto;
    padding : 10px;
`;

function PostList({ posts }) {
    return (
        <div>
        <PostTitle>Post List</PostTitle>
        <PostBox>
            {
                posts.map((post) => <PostItem key={post.id} item={post} />)
            }
        </PostBox>
        </div>
        
    );
}

export default PostList;