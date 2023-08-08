const ADD_POST = "ADD-POST"
const ADD_MESSAGE = "ADD-MESSAGE"

let store = {
    _state: {
        posts: [
            {id: 1, message: 'Hello', likesCount: 12},
            {id: 2, message: 'WTF', likesCount: 15},
            {id: 3, message: 'Go to learn', likesCount: 1},
            {id: 4, message: 'Have a nice day', likesCount: 7},
        ],
        dialogs: [
            {id: 1, name: 'Alyona'},
            {id: 2, name: 'Lev'},
            {id: 3, name: 'John'},
            {id: 4, name: 'Barbara'},
            {id: 5, name: 'Glen'},
            {id: 6, name: 'Peter'},
            {id: 7, name: 'Thomas'},
            {id: 8, name: 'Michael'},
        ],
        messages: [
            {id: 1, message: 'HTML'},
            {id: 2, message: 'Grath'},
            {id: 3, message: 'Hello'},
            {id: 4, message: 'Hello'},
            {id: 5, message: 'Hello'},
        ]
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    // _addPost(text) {
    //      let newPost = {
    //        id: 5, message: text, likesCount: 0
    //      }
    //     this._state.posts.push(newPost)
    //     this._callSubscriber()
    // },


    dispatch(action) {
        if (action.type === ADD_POST) {

            let newPost = {
                id: 5, message: action.text, likesCount: 0
            }
            this._state.posts.push(newPost)
            this._callSubscriber()

        } else if (action.type ===  ADD_MESSAGE) {
            let newMessage = {id:6, message: action.message}
            this._state.messages.push(newMessage)
            this._callSubscriber()
        }
        else {
            console.log(new Error('Problems with actions'))
        }

    },


}

export const addPostActionCreator = (text) => ({type: ADD_POST, text: text || ''})
export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message:message || ''})




window.store = store

export default store
