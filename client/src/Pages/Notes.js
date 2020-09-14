import React, {useState, useEffect, useRef} from "react";
import { useHistory } from 'react-router-dom';
import ContentEditable from 'react-contenteditable'
import Header from '../Components/Header/Header.js';
import Footer from '../Components/Footer/Footer.js';
import Searchbar from '../Components/Search/Search.js';
import Create from '../Components/Create/Create.js';
import '../styles/Notes.scss';
import Delete from '../styles/assets/icons/delete-icon.png';
import Back from '../styles/assets/icons/back-icon.png';
import axios from 'axios';
import { uuid } from 'uuidv4';

const authToken=() => localStorage.getItem('userAuthToken');

function Notes(){
    const [ notesData, setNotesData ] = useState([]);
    const text = useRef('')
    let history = useHistory();

	function goBack(){
		history.push("/")
    }
    
    const handleChange =(e)=>{
        text.current= e.target.value;
    }  

    useEffect(()=>{
        //sorts the data in the backend to get active users notes
        axios.get('http://localhost:8080/notes', {
            headers: { authorization: `Bearer ${authToken()}` }
        })
        .then(res=>{
            console.log(res.data)
            setNotesData(res.data)
        })
    }, [])

    //deleting a note
    const deleteNote=(id)=>{
        axios.delete(`http://localhost:8080/notes/${id}`,{
            headers: { authorization: `Bearer ${authToken()}`}
        })
        // console.log(location.pathname)
        .then(res=>{
            console.log(res)
            setNotesData(res.data)
        })
        .catch(err=>{ console.log('error with delete', err)});
    }

    //handling a note edit
    const editNote=(id)=>{
        let newNote = text.current;
        console.log('new note is: ', newNote);
        axios.put(`http://localhost:8080/notes/${id}`,{
                note: newNote
        },{
            headers: { authorization: `Bearer ${authToken()}`}
        })
        .then(edit=>{
            console.log(edit.data)
            setNotesData(edit.data)
        })
        .catch(err=>{
            console.log('error with edit request', err)
        });
    }

    return(
    <>
    <Header />
    <div className="noteBox">
        <div className="note__nav">
            <img src={Back}
            alt="arrow back"
            className="icon-back__note"
            onClick={goBack} 
            />
        </div>
    <div className="noteBox__2">
        <div className="search__create">
            <Searchbar />
            <Create 
            notes={notesData}
            setNote={setNotesData}
            />
        </div>
        <div className="note2">
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
                    changeHandler={handleChange}
                     />
                </div>
            )}
            </div>
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
        <div className="note__row">
            <div className="note__details">
                <span className="note__cell">{props.practitioner}</span>
                <span className="note__cell">{props.date}</span>
            </div>
            <div>
                {/* library on change to listen to change */}
                <ContentEditable 
                className="note__blurb"
                html={props.note}
                onBlur={()=>{props.editFunction(props.id)}}
                onChange={props.changeHandler}
                />
            </div>
            <div className="note__row-btn">
            <button  
            className="notes__btn"  
            onClick={()=>{props.deleteFunction(props.id)}}>
            <img src={Delete}
            alt="delete icon"
            className="icon-delete"
            />
            </button>
            </div>
        </div>
        </>
    )
}

//https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/

export default Notes;