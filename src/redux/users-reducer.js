// import exp from "constants";

// const ADD_POST = "ADD-POST"
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://uznayvse.ru/images/catalog/2022/1/brad-pitt_24.jpg',
        //     followed: true,
        //     fullName: 'Gleb',
        //     status: 'FullStack Developer',
        //     location: {city: "Odesa", country: 'Ukraine'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://uznayvse.ru/images/catalog/2022/1/brad-pitt_24.jpg',
        //     followed: false,
        //     fullName: 'Alyona',
        //     status: 'Manager',
        //     location: {city: "Apolda", country: 'Germany'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://uznayvse.ru/images/catalog/2022/1/brad-pitt_24.jpg',
        //     followed: false,
        //     fullName: 'Lev',
        //     status: 'Student',
        //     location: {city: "NY", country: 'Greece'}
        // },

    ]
}
const usersReducer = (state = initialState, action) => {
    debugger

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)]
            }

        case SET_USERS: {
            return {...state, users: [ ...action.users]}
            // return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }


    // let newState = [...state]


    // return state
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer