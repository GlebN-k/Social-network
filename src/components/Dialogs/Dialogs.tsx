import React from 'react'
import {DialogItem} from "../DialogItem/DialogItem";

const Dialogs = () => {
    return (
        <div>
            <div className="dialogsItem">
                <DialogItem pathId={1} name={'Alyona'} />
                <DialogItem pathId={2} name={'Lev'} />
                <DialogItem pathId={3} name={'John'} />
                <DialogItem pathId={4} name={'Sam'} />
                <DialogItem pathId={5} name={'Ramos'} />
                <DialogItem pathId={6} name={'Dreis'} />
                <DialogItem pathId={7} name={'Donald'} />
                <DialogItem pathId={8} name={'Alex'} />



            </div>
        </div>
    )
}

export default Dialogs