import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfileProps = {
    statePosts:PostType[]
    addPost: (newPost: string | undefined)=> void
}
const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts statePosts={props.statePosts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile