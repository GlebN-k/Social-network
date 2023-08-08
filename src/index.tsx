import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import store from "./redux/store";
import store from "./redux/redux-store";
// import {addPost} from "./redux/state";
// import reportWebVitals from './reportWebVitals';

console.log(store.getState())

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// let result = store.getState()
let rerenderEntireTree = (state: any) => {
    // debugger
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
// console.log(store.getState())

rerenderEntireTree(store.getState())

// store.subscribe(rerenderEntireTree)
store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state)
})
// store.subscribe(() => {
//     const state = store.getState(); // Обновляем состояние при вызове подписчика
//     rerenderEntireTree(state); // Передаем обновленное состояние в функцию rerenderEntireTree
// });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
