import React, {useRef} from "react";
import Post from "../../Post/Post";
import {addPostActionCreator} from "../../../redux/state";

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



const MyPosts: React.FC<MyPostsType> = ({statePosts, dispatch}) => {
    let postsElement = statePosts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    // const name = useRef<HTMLTextAreaElement>(null)
    let newPostElement = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {
        let text = newPostElement.current?.value
        // let action = {type: "ADD-POST", text: text};
        dispatch(addPostActionCreator(text))
        if (newPostElement.current) {
            newPostElement.current.value = ''
        }

        // alert(newPostElement.current?.value)
    }

    // console.log(name)
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