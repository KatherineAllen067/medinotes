import React, {useState, useEffect, useRef} from "react";
import { useHistory } from 'react-router-dom';
import ContentEditable from 'react-contenteditable'
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

const authToken=() => localStorage.getItem('userAuthToken');

function Notes(){
    const [ result, setResult ] = useState([]); 
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
            setNotesData(post.data);
        })
        .catch(error =>{
            console.log('error with post', error)
        });
    };

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
 
//show search results 
    const findNote = (e)=>{
        e.preventDefault();
        let word = e.target.search.value.toString();
        console.log(word)
        axios.get('http://localhost:8080/notes', {
            headers: { authorization: `Bearer ${authToken()}` }
        })
        //check the casing and both the WORD and the ARRAY 
        //refactor into a function instead of chaining 
        .then(sear=>{
            console.log(sear.data)
            sear.data.find(s=>{
                if(s.note.split(' ').includes(word) && s.practitioner.split(' ').includes(word)){
                    console.log('note & doctor contains word')
                    return setResult([...result, {
                        id: uuid(),
                        practitioner: s.practitioner,
                        note: s.note,
                        date: s.date
                    }]);  
                }
                else if(s.note.split(' ').includes(word)){
                    console.log('contains word in note')
                    return setResult([...result,{
                        id: uuid(),
                        practitioner: s.practitioner,
                        note: s.note,
                        date: s.date
                    }]);
                }else if(s.practitioner.split(' ').includes(word)){
                    console.log('contains word in doctor title')
                    return setResult([...result,{
                        id: uuid(),
                        practitioner: s.practitioner,
                        note: s.note,
                        date: s.date
                    }]);
                }else{ return console.log('no note found'); } 
            })
            console.log(result)
        })
    }

    return(
    <>
    <Header />
    <div className="noteBox">
            <img src={Back}
            alt="arrow back"
            className="icon-back__note"
            onClick={goBack} 
            />
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
                    className="note__add"
                    >
                    </textarea> 
                </div>   
            </form> 
            <div className="old">
                <div className="notes__search">
                    <div className="notes__bottom--1">
                        <h3 className="notes__header">
                        Find a Note
                        </h3>
                        <form onSubmit={findNote}>
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
                            <label>
                            Search
                            </label>
                            <input 
                            type="text" 
                            name="search" 
                            placeholder="Search by keywords..." 
                            className="notes__input"
                            >
                            </input>
                        </form>
                    </div>
                </div>
            </div>
            { result ? 
            <div>
            {result.map(r=>
                <div className="result"key={uuid()}>
                    <h4>{r.practitioner}</h4>
                    <h4>{r.date}</h4>    
                    <h4>{r.note}</h4>    
                </div>)}
            </div>:
            <>
            </>}
        </div>

        <div className="note2">
            <h3>Your Notes</h3>
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
    <Footer />
    </>
    )
}

function NoteItem(props){
    return(
        <>
        <div className="note__row">
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
                {/* library on change to listen to change */}
                <ContentEditable 
                className="note__blurb"
                html={props.note}
                onBlur={()=>{props.editFunction(props.id)}}
                onChange={props.changeHandler}
                />
            </div>
        </div>
        </>
    )
}

// function ResultItem(){
//     return(
//         <>
//         </>
//     )
// }
//https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/

export default Notes;