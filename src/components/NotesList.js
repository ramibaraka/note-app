import React from 'react';
import Note from '../components/Note';
import '../App.css';

class NotesList extends React.Component {
    
    shouldComponentUpdate(nextProps, nextState){
        return this.props !== nextProps
    }

    render() {
        var notes = this.props.notes;
        var items = notes.map((note, key) => {
            return <Note key={note.id} note={note} updateNote={this.props.updateNote} deleteNote={() => { this.props.deleteNote(note.id) }} />
        })
        return (
            <div className="NotesList">
                {items}
            </div>
        );
    }
};

export default NotesList;