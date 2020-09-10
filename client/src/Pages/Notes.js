import React, {useState, useEffect} from "react";
// import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header.js';
import Footer from '../Components/Footer/Footer.js';
import '../styles/Notes.scss';
import Add from '../styles/assets/icons/add-note.png';
import Edit from '../styles/assets/icons/edit-icon.png';
import Delete from '../styles/assets/icons/delete-icon.png';
import Search from '../styles/assets/icons/search-icon.png';
import axios from 'axios';
const authToken = localStorage.getItem('userAuthToken');

function Notes(){
    const [ notesData, setNotesData ] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/notes', {
            headers: { authorization: `Bearer ${authToken}` }
        })
        .then(res=>{
            console.log(res.data)
            // var active = res.data.filter(user=> user.username === Emily)
            setNotesData(res.data)
        })
    }, [])
//working in the backend but not catching the specific id 
    const deleteNote=(e)=>{
        e.preventDefault();
        axios.delete(`http://localhost:8080/notes`,{
            headers: { authorization: `Bearer ${authToken}`}
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{ console.log('error with delete', err)});
    }

    const publishNote=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8080/notes/`,{ 
            headers: { authorization: `Bearer ${authToken}`}
        })
        // practitioner: e.target.practitioner.value,
        // note: e.target.note.value,
        .then(post=>{
            console.log(post.data);
        })
        .catch(error =>{
            console.log('error with post', error)
        });
    };

    return(
        <>
        <Header />
        <div className="noteBox">
            <div className="notes">
                <form onSubmit={publishNote}>
                    <div className="notes__bottom">
                        <h3 className="notes__header">
                            Create a Note</h3>
                        <button 
                        type="submit" 
                        className="notes__btn">
                        <img src={Add}
                        alt="add icon"
                        className="icon-add"
                        />
                        </button>
                    </div>             
                <div className="notes__new">
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
                    >
                    </textarea> 
                <div className="old">
                    <div className="notes__search">
                    <div className="notes__bottom--1">
                        <h3 className="notes__header">
                            Find a Note</h3>
                        <button 
                        type="submit"
                        className="notes__btn"
                        >
                        <img 
                        src={Search}
                        alt="search-icon"
                        className="icon-search"
                        />
                        </button>
                    </div>
                        <label>
                        Search
                        </label>
                        <input type="text" 
                        name="search" 
                        placeholder="Search by keywords..." 
                        className="notes__input"
                        >
                        </input>
                </div>
                    </div>
                </div>
                </form>
            </div>
            <div className="note2">
                <h3>Note Board</h3>
                <div className="note2__column">
                { notesData.map(note=>
                <div className="note">
                    <div className="note__row">
                        <button 
                        type="submit" 
                        className="notes__btn" 
                        key={note.id} 
                        onClick={deleteNote}>
                        <img src={Delete}
                        alt="delete icon"
                        className="icon-delete"
                        />
                        </button>
                        <button
                        type="submit"
                        className="notes__btn"
                        >
                        <img 
                        src={Edit}
                        alt="edit-icon"
                        className="icon-edit"
                        />
                        </button>
                        <div>
                            <span className="note__cell">{note.practitioner}</span>
                            <span className="note__cell">{note.date}</span>
                        </div>
                    </div>
                    <div>
                        <p className="note__blurb">{note.note}</p>
                    </div>
                </div>
                )}
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
//https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/


export default Notes;