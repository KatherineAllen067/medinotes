import React, {useState, useEffect, useRef} from "react";
import { useHistory } from 'react-router-dom';
import ContentEditable from 'react-contenteditable'
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

    function formatDate(t){
    let time = t
    var myDate = new Date(time);
    var year = myDate.getFullYear()
    var month = myDate.getMonth()+1;
    var date = myDate.getDate();
    var dateFormat = date +"/" + month + "/" + year;
    return dateFormat
    }

	function goBack(){
		history.push("/home")
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
            setNotesData(res.data)
        })
    }, [])

    //deleting a note
    const deleteNote=(id)=>{
        axios.delete(`http://localhost:8080/notes/${id}`,{
            headers: { authorization: `Bearer ${authToken()}`}
        })
        .then(res=>{
            console.log(res)
            setNotesData(res.data)
        })
        .catch(err=>{ console.log('error with delete', err)});
    }

    //handling a note edit
    const editNote=(id)=>{
        let newNote = text.current;
        //if newNote empty don't update "" else not empy string  
        console.log('new note is: ', newNote);
        axios.put(`http://localhost:8080/notes/${id}`,{
                note: newNote
        },{
            headers: { authorization: `Bearer ${authToken()}`}
        })
        .then(edit=>{
            setNotesData(edit.data)
        })
        .catch(err=>{
            console.log('error with edit request', err)
        });
    }

    return(
    <>
    <div className="note__container">
        <div className="note__top">
        <div className="note__top__nav">
            <img src={Back}
            alt="arrow back"
            className="note__top__arrow"
            onClick={goBack} 
            />
        </div>
            <Searchbar 
            dateFormat={formatDate}
            />
            <Create 
            notes={notesData}
            setNotes={setNotesData}
            />
        </div>
        <div className="note__bottom">
            <div className="note__bottom__column">
            { notesData.map(note=>
                    <NoteItem
                    key={uuid()}
                    id={note.id}
                    note={note.note}
                    practitioner={note.practitioner}
                    date={formatDate(note.date)}
                    deleteFunction={deleteNote}
                    editFunction={editNote}
                    changeHandler={handleChange}
                     />
            )}
            </div>
            </div>
        </div>
    </>
    )
}

//notes edit click inital value of ref

function NoteItem(props){
    return(
        <>
        <div className="note">
            <div className="note__details">
                <span className="note__cell">{props.practitioner}</span>
                <span className="note__cell">{props.date}</span>
            </div>
            <div className="note__blurb">
                {/* library on change to listen to change */}
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

export default Notes;