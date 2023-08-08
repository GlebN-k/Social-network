import React, {ChangeEvent, useState} from 'react'
import {DialogItem} from "../DialogItem/DialogItem";
import {MessageItem} from "../MessageItem/MessageItem";
import s from './Dialogs.module.css'
import {addMessageActionCreator} from "../../redux/state";
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
const Dialogs: React.FC<DialogsProps> = ({stateDialogs, stateMessages, dispatch}) => {
    const [textArea, setTextArea] = useState('')

    // const addMessageActionCreator = () => ({type: })

    const dialogs = stateDialogs.map(d => <DialogItem pathId={d.id} name={d.name} key={d.id} />)
    const messages = stateMessages.map(m => <MessageItem key={m.id} message={m.message}/> )

    const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => setTextArea(e.currentTarget.value)
    const addMessageHandler = () => {
        debugger
        let newMessage = addMessageActionCreator(textArea)
        dispatch(newMessage)
        setTextArea('')
    }

    return (
        <div className={s.container}>
            <div className="dialogsItem">
                {dialogs}
            </div>
            <div>
                <div>{messages}</div>
                <div>
                    <textarea value={textArea} onChange={changeTextArea}></textarea>
                    <button onClick={addMessageHandler}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs