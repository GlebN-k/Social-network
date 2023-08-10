import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts, {ActionPostType} from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfileProps = {
    statePosts:PostType[]
    dispatch: (newPost: ActionPostType)=> void
}
const Profile = (props: ProfileProps) => {
    console.log(props)
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer statePosts={props.statePosts} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile