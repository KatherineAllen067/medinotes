import React, { useState } from "react";
import Search from '../../styles/assets/icons/search-icon.png';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const authToken=() => localStorage.getItem('userAuthToken');

function Searchbar({ dateFormat }){
    const [ result, setResult ] = useState([]); 

    //show search results 
    const findNote = (e)=>{
        e.preventDefault();
        let word = e.target.search.value;
        console.log(word)
        axios.get('http://localhost:8080/notes', {
            headers: { authorization: `Bearer ${authToken()}` }
        })
        .then(sear=>{
            console.log(sear.data)
            //filter to display any notes with the word in the note
                sear.data.filter(s=>{
                   if(s.note.includes(word)){
                   console.log('contains word');
                   return setResult([...result, {
                    id: uuidv4(),
                    practitioner: s.practitioner,
                    note: s.note,
                    date: s.date
                   }]);
                }
                else{ return console.log('no note found'); } 
            })
            console.log(result)
        });
    }

    return(
        <>
        <div className="search">
            <div className="search__box">
                <h3 className="search__header">
                Find a Note
                </h3>
                <form onSubmit={findNote}>
                <div className="search__form">
                    <input 
                    type="text" 
                    name="search" 
                    placeholder="Search by keywords..." 
                    className="create__input--search"
                    >
                    </input>
                    <button 
                    type="submit"
                    className="create__btn"
                    >
                    <img 
                    src={Search}
                    alt="search-icon"
                    className="icon__2"
                    />
                    </button>
                </div>
                </form>
            </div>
            {/* if there is a result present show the result if not don't show anything */}
            { result ? 
            <div className="search__note">
                {result.map(r=>
                    <div className="search__result"key={uuidv4()}>
                        <div className="note__details">
                            <span className="note__cell">{r.practitioner}</span>
                            <span className="note__cell">{dateFormat(r.date)}</span>
                        </div>
                        <div>
                            <p>{r.note}</p>
                        </div>
                </div>)}
                </div>:
                <>
                </>}
        </div>
        </>
    )
}

export default Searchbar;