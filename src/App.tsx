import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Error404 from "./components/Error/Error404";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

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
    addPost: (newPost: string | undefined) => void
}

const App: React.FC<PropsType> = ({state, addPost}) => {

    return (
    <div className="app-wrapper">
      {/* <Header /> */}

      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path={'/profile'} element={<Profile statePosts={state.posts} addPost={addPost} />} />
          <Route path={'/dialogs/*'} element={<Dialogs />} />
          <Route path={'/*'} element={<Error404 />} />
        </Routes>
      </div>

      {/* <div className="content">Content</div> */}
    </div>
  );
};

export default App;
