import React, { useState } from 'react';


function NoteActions({  note, addNote, deleteNote, setActiveNote}){
    const [search, setSearch] = useState('');

    return (

        <div className="menu-list">
            <div className="search-add" >
                <input
                    className=""
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={addNote}>Add</button>
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
                                            <button className="" onClick={(e) => deleteNote(item.id)}> delete</button>
                                        </div> :
                                         <div className="item">
                                             <li className="">{item.title}</li>
                                            <button className="" onClick={(e) => deleteNote(item.id)}> delete</button>
                                         </div>
                                }
                        </div>
                    ) )}
            </ul>
        </div>
    );
}

export default NoteActions;