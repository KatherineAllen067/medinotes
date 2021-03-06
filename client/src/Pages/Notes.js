import React, {useState, useEffect, useRef} from "react";
import { useHistory } from 'react-router-dom';
import Searchbar from '../Components/Search/Search.js';
import Create from '../Components/Create/Create.js';
import '../styles/Notes.scss';
import Back from '../styles/assets/icons/back-icon.png';
import NoteItem from '../Components/NoteItem/NoteItem.js';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const authToken=() => localStorage.getItem('userAuthToken');

function Notes(){
    const [ notesData, setNotesData ] = useState([]);
    const text = useRef('')
    let history = useHistory();
    //make sure the date shown is a readable date not JS date object
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
        console.log('new note is: ', newNote);
        //if newNote empty don't update "" else not empy string check docs
        if(newNote === ""){
            console.log("nothing to change")
        }else{
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
    }

    return(
    <>
    <div className="note__container">
                <img src={Back}
                alt="arrow back"
                className="note__top__arrow"
                onClick={goBack} 
                />
        <div className="note__top">
                <Searchbar 
                dateFormat={formatDate}
                />
        </div>
        <div className="note__bottom">
                <Create 
                notes={notesData}
                setNotes={setNotesData}
                />
            <div className="note__bottom__column">
            { notesData.map(note=>
                    <NoteItem
                    key={uuidv4()}
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

export default Notes;