import React from "react";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    pathId: number
    name: string
}

export const DialogItem: React.FC<DialogItemProps> = ({pathId, name}) => {
    return (
        <div>
            <NavLink to={`/dialogs/${pathId}`}>{name}</NavLink>
        </div>
    )
}