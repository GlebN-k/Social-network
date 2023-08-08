const ADD_POST = "ADD-POST"

let initialState = [
    {id: 1, message: 'Hello', likesCount: 12},
    {id: 2, message: 'WTF', likesCount: 15},
    {id: 3, message: 'Go to learn', likesCount: 1},
    {id: 4, message: 'Have a nice day', likesCount: 7},
]
 const postsReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 5, message: action.text, likesCount: 0
        }
        state.push(newPost)

    }

    return state
}

export const addPostActionCreator = (text) => ({type: ADD_POST, text: text || ''})


export default postsReducer