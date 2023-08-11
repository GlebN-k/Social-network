import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import users from "./Users";


let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

// const UsersContainer: React.FC<UsersType> = () => {
//     return (
//         <div><Users/></div>
//     )
// }

export default connect(mapStateToProps, mapDispatchToProps)(Users)