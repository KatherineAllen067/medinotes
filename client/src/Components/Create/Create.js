import React from "react";
import axios from 'axios';
import Add from '../../styles/assets/icons/add-note.png';

const authToken=() => localStorage.getItem('userAuthToken');

function Create({ notes, setNotes }){
     //creating a new note
     const publishNote=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8080/notes/',{
            note: e.target.note.value,
            practitioner: e.target.practitioner.value,
        },
        {headers: { authorization: `Bearer ${authToken()}`}
        })
        .then(post=>{
            console.log(post.data);
            setNotes(post.data);
        })
        .catch(error =>{
            console.log('error with post', error)
        });
    };

    return(
        <div className="notes">
            <form onSubmit={publishNote}>
                <div className="notes__bottom">
                    <h3 className="notes__header">
                    Create a Note</h3>
                </div>             
                <div className="notes__new">
                    <div className="notes__new--top">
                        <label>
                        Practitioner
                        </label>
                        <input type="text"
                        name="practitioner" 
                        placeholder="Name or type is okay..."
                        className="notes__input"
                        >
                        </input>
                        <label>
                        Note
                        </label>
                        <textarea 
                        type="text" 
                        name="note"
                        className="note__add"
                        >
                        </textarea> 
                    </div>
                    <div className="notes__btn--add">
                        <button 
                        type="submit" 
                        className="notes__btn">
                        <img src={Add}
                        alt="add icon"
                        className="icon-add"
                        />
                        </button>
                    </div>
                </div>   
            </form> 
        </div>
    )
}

export default Create;