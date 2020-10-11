import React from "react";
import Delete from '../../styles/assets/icons/delete-icon.png';
import ContentEditable from 'react-contenteditable'

function NoteItem(props){
    return(
        <>
        <div className="note">
            <div className="note__details">
                <span className="note__cell">{props.practitioner}</span>
                <span className="note__cell">{props.date}</span>
            </div>
            <div className="note__blurb">
                {/* library on change to listen to change can edit inline */}
                <ContentEditable 
                className="edit__text"
                html={props.note}
                onBlur={()=>{props.editFunction(props.id)}}
                onChange={props.changeHandler}
                />
            </div>
            <div className="note__btn">
            <button  
            className="note__btn--1"  
            onClick={()=>{props.deleteFunction(props.id)}}>
            <img src={Delete}
            alt="trash can"
            className="icon__1"
            />
            </button>
            </div>
        </div>
        </>
    )
}

export default NoteItem;