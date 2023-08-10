import React from "react";
// import Post from "../../Post/Post";
import {addPostActionCreator} from "../../../redux/posts-reducer";
import MyPosts from "./MyPosts";

type PostType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsType = {
    statePosts: PostType[]
    dispatch: (newPost: ActionPostType) => void
}

export type ActionPostType = {
    type: string
    text?: string | undefined
    message?: string | undefined
}


const MyPostsContainer: React.FC<MyPostsType> = ({statePosts, dispatch}) => {
    let addPost = (textPost: string | undefined) => {
        dispatch(addPostActionCreator(textPost))
    }
    return (
        <div>
            <MyPosts statePosts={statePosts} callBack={addPost} />
        </div>
    )
}

export default MyPostsContainer