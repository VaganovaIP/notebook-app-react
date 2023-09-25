import React from 'react';



function NoteEditor({activeNote, updateNote}){
    const onEditField = (field, value) => {
        updateNote({
            ...activeNote,
            [field]: value,
        });
    };

    if (!activeNote) return <div className="no-active-note">No Active Note</div>;
    return(
        <div className="content">
            <input
                className="title-input"
                id = "title"
                type = "text"
                value={activeNote.title}
                placeholder=""
                onChange={(e) => {
                    onEditField("title", e.target.value);
                }}
            />
            <label>
                <textarea
                    id="body"
                    className="text-edit"
                    value={activeNote.body}
                    onChange={(e) =>{
                        onEditField("body", e.target.value)
                    }
                    }
                />
            </label>
        </div>
    )
}

export default NoteEditor;