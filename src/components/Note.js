import React from 'react';
import '../App.css';

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            title: '',
            description: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps !== this.props || nextState !== this.state
    }

    toggleEditing() {
        var val = this.state.editing ? false : true
        this.setState({
            editing: val
        })
    }
    saveUpdate() {
        var that = this;
        let title = this.state.title;
        let description = this.state.description;
        let id = this.props.note.id;

        if (title !== '' && description !== '') {
            let data = {
                title,
                description
            }
            that.props.updateNote(id, data)
            that.toggleEditing()
        }

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    renderEditing() {
        return (
            <div className="Form">
                <input name="title" onChange={this.handleChange.bind(this)} value={this.state.title} placeholder={"Title"} type="text" />
                <input name="description" onChange={this.handleChange.bind(this)} value={this.state.description} placeholder="Description" type="text" />
                <input defaultValue="Save" type="button" onClick={this.saveUpdate.bind(this)} />
                <input defaultValue="Cancel" type="CanButton" onClick={this.toggleEditing.bind(this)} />
            </div>
        );
    }

    renderNote() {
        var note = this.props.note;
        return (
            <div className="Note">
                <div className="TextInfo">
                    <h5> {note.title} </h5>
                    <p> {note.description} </p>
                </div>
                <div className="BtnGroup">
                    <button className="EditButton" onClick={this.toggleEditing.bind(this)}>Edit</button>
                    <button className="DelButton" onClick={this.props.deleteNote}>Delete</button>
                </div>
            </div>
        );
    }

    render() {
        return (this.state.editing) ? this.renderEditing() : this.renderNote()
    }
};

export default Note;