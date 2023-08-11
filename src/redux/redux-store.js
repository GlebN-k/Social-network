import {combineReducers, createStore, legacy_createStore} from "redux";
import postsReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    posts: postsReducer,
    messages: messagesReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer
})

let store = legacy_createStore(reducers)


export default store
