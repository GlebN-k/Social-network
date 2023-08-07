import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts, {ActionPostType} from "./MyPosts/MyPosts";

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
    return (
        <div>
            <ProfileInfo/>
            <MyPosts statePosts={props.statePosts} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile