import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Error404 from "./components/Error/Error404";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {ActionPostType} from "./components/Profile/MyPosts/MyPosts";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

type PostType = {
    id: number
    message: string
    likesCount: number
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type AppStateType = {
    posts: PostType[]
    dialogs: DialogType[]
    messages: MessageType[]
}

type PropsType = {
    state: AppStateType
    dispatch: (newPost: ActionPostType) => void
}

const App: React.FC<PropsType> = ({state, dispatch}) => {
    return (
    <div className="app-wrapper">
      {/* <Header /> */}

      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path={'/profile'} element={<Profile statePosts={state.posts} dispatch={dispatch} />} />
          <Route path={'/dialogs/*'} element={<DialogsContainer stateDialogs={state.dialogs} stateMessages={state.messages} dispatch={dispatch} />} />
          <Route path={'/users'} element={<UsersContainer />} />
          <Route path={'/*'} element={<Error404 />} />
        </Routes>
      </div>

      {/* <div className="content">Content</div> */}
    </div>
  );
};

export default App;
