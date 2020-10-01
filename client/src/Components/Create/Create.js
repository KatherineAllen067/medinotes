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
            setNotes(post.data);
        })
        .catch(error =>{
            console.log('error with post', error)
        });
    };

    return(
        <div className="create">
            <form onSubmit={publishNote}>
                <h3 className="create__header">
                Create a Note</h3>           
                <div className="create__new">
                    <div className="create__new--top">
                        <label className="create__label">
                        Practitioner
                        </label>
                        <input type="text"
                        name="practitioner" 
                        placeholder="Name or type is okay..."
                        className="create__input"
                        >
                        </input>
                        <label className="create__label">
                        Note
                        </label>
                        <textarea 
                        type="text" 
                        name="note"
                        className="create__add"
                        >
                        </textarea> 
                    </div>
                    <div className="create__btn">
                        <button 
                        type="submit" 
                        className="create__btn">
                        <img src={Add}
                        alt="page with plus sign"
                        className="icon__2"
                        />
                        </button>
                    </div>
                </div>   
            </form> 
        </div>
    )
}

export default Create;