const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = [
    {id: 1, name: 'Alyona'},
    {id: 2, name: 'Lev'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Barbara'},
    {id: 5, name: 'Glen'},
    {id: 6, name: 'Peter'},
    {id: 7, name: 'Thomas'},
    {id: 8, name: 'Michael'},
]
 const dialogsReducer = (state = initialState, action) => {
// debugger
    if (action.type ===  ADD_MESSAGE) {
        let newMessage = {id:6, message: action.message}
        state.push(newMessage)
    }

    return state
}

export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message:message || ''})

export default dialogsReducer