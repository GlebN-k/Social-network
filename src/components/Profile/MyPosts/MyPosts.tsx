import React, {useRef} from "react";
import Post from "../../Post/Post";

type PostType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsType = {
    statePosts:PostType[]
    addPost: (newPost: string | undefined) => void
}

const MyPosts: React.FC<MyPostsType> = ({statePosts, addPost:addPostProps}) => {
    let postsElement = statePosts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    // const name = useRef<HTMLTextAreaElement>(null)
    let newPostElement = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {
        let text = newPostElement.current?.value
        console.log(text)
        addPostProps(text)
        // alert(newPostElement.current?.value)
    }

    // console.log(name)
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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