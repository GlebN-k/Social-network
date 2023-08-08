import {combineReducers, createStore} from "redux";
import postsReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    posts: postsReducer,
    messages: messagesReducer,
    dialogs: dialogsReducer
})

let store = createStore(reducers)

export default store
