import React, {useEffect} from "react";
import s from './Users.module.css'
import {unfollowAC} from "../../redux/users-reducer";

type UserType = {
    id: number,
    photoUrl: string
    followed: boolean,
    fullName: string,
    status: string,
    location: { city: string, country: string }
}

type UsersType = {
    users: UserType[]
    follow: any
    unfollow: any
    setUsers: any
}

const Users: React.FC<UsersType> = (props) => {
    // const unfollowHandler = (userId: number) => {
    //     unfollow(userId)
    //     console.log('works')
    // }
    console.log(props)

    const initialState = [{
        id: 1,
        photoUrl: 'https://uznayvse.ru/images/catalog/2022/1/brad-pitt_24.jpg',
        followed: true,
        fullName: 'Gleb',
        status: 'FullStack Developer',
        location: {city: "Odesa", country: 'Ukraine'}
    },
        {
            id: 2,
            photoUrl: 'https://uznayvse.ru/images/catalog/2022/1/brad-pitt_24.jpg',
            followed: false,
            fullName: 'Alyona',
            status: 'Manager',
            location: {city: "Apolda", country: 'Germany'}
        },
        {
            id: 3,
            photoUrl: 'https://uznayvse.ru/images/catalog/2022/1/brad-pitt_24.jpg',
            followed: false,
            fullName: 'Lev',
            status: 'Student',
            location: {city: "NY", country: 'Greece'}
        },]

    if(props.users.length === 0) {
        props.setUsers(initialState)
    }


    return (
        <div>{props.users.map(u => (
            <div key={u.id}>
                <div>
                    <img className={s.userPhoto} src={u.photoUrl} alt=""/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                <div>
                    <span>{u.fullName}</span>
                </div>
                <div>
                    <span>{u.status}</span>
                </div>
            </div>
        ))}</div>
    )
}
export default Users