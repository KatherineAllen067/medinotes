import React, {useState, useEffect, useRef} from "react";
import Search from '../../styles/assets/icons/search-icon.png';
import axios from 'axios';
import { uuid } from 'uuidv4';

const authToken=() => localStorage.getItem('userAuthToken');

function Searchbar(){
    const [ result, setResult ] = useState([]); 

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
        <div className="search">
            <div className="search__box">
                <h3 className="notes__header">
                Find a Note
                </h3>
                <form onSubmit={findNote}>
                <div className="search__form">
                    <input 
                    type="text" 
                    name="search" 
                    placeholder="Search by keywords..." 
                    className="notes__input"
                    >
                    </input>
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
                </form>
            </div>
            { result ? 
            <div>
            {result.map(r=>
                <div className="search__result"key={uuid()}>
                    <div className="note__details">
                        <span className="note__cell">{r.practitioner}</span>
                        <span className="note__cell">{r.date}</span>
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