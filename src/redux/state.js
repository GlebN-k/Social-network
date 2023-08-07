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
    addPost(text) {
        let newPost = {
            id: 5, message: text, likesCount: 0
        }
        this._state.posts.push(newPost)
        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}



window.store = store

export default store
