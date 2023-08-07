import React from 'react';

type PostType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostType> = ({message, likesCount}) => {
    return (
        <div>{message}</div>
    );
}

export default Post;