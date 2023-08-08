import React from "react";
// import {NavLink} from "react-router-dom";

type MessageItemProps = {
    message: string
}

export const MessageItem: React.FC<MessageItemProps> = ({message}) => {
    return (
        <div>
            {message}
        </div>
    )
}