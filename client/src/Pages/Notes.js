import React, {Component} from "react";
import '../styles/Notes.scss';

class Notes extends Component{
    render(){
        return(
            <>
            <h1 className="noteTitle">Notes</h1>
            <div className="noteBox">
                <div className="note">
                    <h2>Create a Note</h2>
                    <div className="new">
                        <label>
                            Practitioner
                        </label>
                        <input type="text" name="doctor" placeholder="Name or type is okay..."></input>
                        <label>
                            Note
                        </label>
                        <textarea type="text" name="note"></textarea>
                    </div>
                    <h2>Find a Note</h2>
                    <div className="old">
                        <div>
                            <label>
                                Search
                            </label>
                            <input type="text" name="search" placeholder="Search by keywords..."></input>
                        </div>
                    </div>
                </div>
                <div className="note2">
                    <h2>Note Board</h2>
                </div>
            </div>
            </>
        )
    }
}

//https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/


export default Notes;