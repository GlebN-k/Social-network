import React, {useRef} from "react";
import Post from "../../Post/Post";
// import {addPostActionCreator} from "../../../redux/posts-reducer";

type PostType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsType = {
    statePosts: PostType[]
    callBack: (newPostElement: string | undefined) => void
    // dispatch: (newPost: ActionPostType) => void
}

export type ActionPostType = {
    type: string
    text?: string | undefined
    message?: string | undefined
}



const MyPosts: React.FC<MyPostsType> = ({statePosts, callBack}) => {
    let postsElement = statePosts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        callBack(newPostElement.current?.value)
        if(newPostElement.current) {
            newPostElement.current.value = ''
        }
    }
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}

export default MyPosts