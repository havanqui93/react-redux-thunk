import React from 'react';
import styled from 'styled-components';

const PostBoxItem = styled.div`
   background : tomato;
   padding: 10px;
   margin : 5px;
   text-align: left;
   color: white;
`;

const PostBoxBody = styled.div`
    font-style: italic;
`;

const H5 = styled.h5`
    font-size: 14px;
    margin-block-start: 0px;
`;

function PostItem({ item }) {
    const { id, title , body } = item;

    return (
        <PostBoxItem>
            <H5>{id}) {title}</H5>
            <PostBoxBody>{body}</PostBoxBody>
        </PostBoxItem>
    );
}

export default PostItem;