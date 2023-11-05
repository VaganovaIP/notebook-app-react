import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAdd, faTrash} from '@fortawesome/free-solid-svg-icons'

function NoteActions({  note, addNote, deleteNote, setActiveNote}){
    const [search, setSearch] = useState('');

    return (

        <div className="menu-list">
            <div className="search-add" >
                <input
                    className="input-search"
                    placeholder="поиск"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="button-add" onClick={addNote}>
                    <FontAwesomeIcon icon={faAdd}/>
                </button>
            </div>

            <ul className="list">
                {
                    note.map(item => (
                        <div key = {item.id}
                             onClick={() => setActiveNote(item.id)} >
                                {
                                    item.title.startsWith(search) === false ?
                                        <div className="item">
                                            <strike>{item.title}</strike>
                                            <button  className = "delete-button" onClick={(e) => deleteNote(item.id)}> 
                                                <FontAwesomeIcon icon={faTrash}/>
                                            </button>
                                        </div> :
                                         <div className="item">
                                             <li >{item.title}</li>
                                            <button  className = "delete-button" onClick={(e) => deleteNote(item.id)}>
                                                <FontAwesomeIcon icon={faTrash}/>
                                            </button>
                                         </div>
                                }
                        </div>
                    ) )}
            </ul>
        </div>
    );
}

export default NoteActions;