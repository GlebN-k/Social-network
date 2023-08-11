import React, {ChangeEvent, useState} from 'react'
import {DialogItem} from "../DialogItem/DialogItem";
import {MessageItem} from "../MessageItem/MessageItem";
import s from './Dialogs.module.css'
import {addMessageActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
// import {ActionPostType} from "../Profile/MyPosts/MyPosts";

type UserType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type ActionMessageType = {
    type: string
    message: string | undefined
}

type DialogsProps = {
    stateDialogs: UserType[]
    stateMessages: MessageType[]
    dispatch: (newMessage: ActionMessageType)=> void
}
const DialogsContainer: React.FC<DialogsProps> = ({stateDialogs, stateMessages, dispatch}) => {

    const addMessageHandler = (textArea: string) => {
        let newMessage = addMessageActionCreator(textArea)
        dispatch(newMessage)
        // setTextArea('')
    }

    return (
        <div className={s.container}>
            <Dialogs stateDialogs={stateDialogs} stateMessages={stateMessages} callBack={addMessageHandler} />
        </div>
    )
}

export default DialogsContainer