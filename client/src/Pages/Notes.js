import React, {useState, useEffect} from "react";
import 
{ useHistory,
    useLocation
} from 'react-router-dom';
import Header from '../Components/Header/Header.js';
import Footer from '../Components/Footer/Footer.js';
import '../styles/Notes.scss';
import Add from '../styles/assets/icons/add-note.png';
import Edit from '../styles/assets/icons/edit-icon.png';
import Delete from '../styles/assets/icons/delete-icon.png';
import Search from '../styles/assets/icons/search-icon.png';
import Back from '../styles/assets/icons/back-icon.png';
import axios from 'axios';
import { uuid } from 'uuidv4';
const authToken = localStorage.getItem('userAuthToken');

// problems 1. not authenticating a specfic user
function Notes(){
    const [ editting, setEditting ] = useState(false); 
    const [ notesData, setNotesData ] = useState([]);
    let history = useHistory();
    let location = useLocation();

	function goBack(){
		history.push("/")
	}

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

    //handling a note delete
    const deleteNote=(id)=>{
        axios.delete(`http://localhost:8080/notes/${id}`,{
            headers: { authorization: `Bearer ${authToken}`}
        })
        // console.log(location.pathname)
        .then(res=>{
            console.log(res)
            setNotesData(res.data)
        })
        .catch(err=>{ console.log('error with delete', err)});
    }

    //fails and says there are no auth headers provided 
    const publishNote=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8080/notes/',{
            note: e.target.note.value,
            practitioner: e.target.practitioner.value,
        },
        {headers: { authorization: `Bearer ${authToken}`}
        })
        .then(post=>{
            console.log(post.data);
            setNotesData(post.data);
        })
        .catch(error =>{
            console.log('error with post', error)
        });
    };

    //handling a note edit
    const editNote=()=>{
        axios.put(`http://localhost:8080${location.pathname}`,{
            headers: { authorization: `Bearer ${authToken}`}
        })
        .then(edit=>{
            console.log(edit.data)
            // setNotesData()
        })
        .catch(err=>{
            console.log('error with edit request', err)
        });
    }

    return(
        <>
        <Header />
        <div className="noteBox">
            <div className="notes">
            <img src={Back}
             alt="arrow back"
              className="icon-back"
              onClick={goBack} />
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
                    <NoteItem
                    key={uuid()}
                    id={note.id}
                    note={note.note}
                    practitioner={note.practitioner}
                    date={note.date}
                    deleteFunction={deleteNote}
                    editFunction={editNote}
                     />
                </div>
                )}
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

function NoteItem(props){
    return(
        <>
        <div className="note__row" >
            <div className="note__row-btn">
            <button  
            className="notes__btn"  
            onClick={()=>{props.deleteFunction(props.id)}}>
            <img src={Delete}
            alt="delete icon"
            className="icon-delete"
            />
            </button>
            <button
            className="notes__btn"
            >
            <img 
            src={Edit}
            alt="edit-icon"
            className="icon-edit"
            onClick={props.editFunction}
            />
            </button>
            </div>
            <div className="note__details">
                <span className="note__cell">{props.practitioner}</span>
                <span className="note__cell">{props.date}</span>
            </div>
            <div>
                <p className="note__blurb">{props.note}</p>
            </div>
        </div>
        </>
    )
}
//https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/

export default Notes;