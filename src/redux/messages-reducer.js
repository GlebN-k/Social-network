const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = [
    {id: 1, message: 'HTML'},
    {id: 2, message: 'Grath'},
    {id: 3, message: 'Hello'},
    {id: 4, message: 'Hello'},
    {id: 5, message: 'Hello'},
]
 const messagesReducer = (state = initialState, action) => {
// debugger
    if (action.type ===  ADD_MESSAGE) {
        let newMessage = {id:6, message: action.message}
        state.push(newMessage)
    }

    return state
}

export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message:message || ''})

export default messagesReducer