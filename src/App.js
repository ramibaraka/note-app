import React, { Component } from 'react';
import NotesList from './components/NotesList';
import './App.css';
import { connect } from 'react-redux';
import * as noteActions from './actions/noteActions';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      creating: false,
    }
  }

  componentWillMount() {
    this.props.dispatch(noteActions.loadNotes())
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState
  }

  onAdddPressed() {
    var title = this.state.title
    let description = this.state.desc
    if (title !== '' && description !== '') {
      let data = {
        title: title,
        description: description,
      }
      this.props.dispatch(noteActions.postNote(data))
      this.setState({ creating: false })
    }
  }

  deletePost(id) {
    this.props.dispatch(noteActions.deleteNote(id))

  }

  updatePost(id, data) {
    this.props.dispatch(noteActions.updateNote(id, data))
  }

  toggleCreating() {
    var val = this.state.creating ? false : true
    this.setState({
      creating: val
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  renderForm() {
    return (
      <div className="Form">
        <input name="title" type="text" placeholder="Enter Title" onChange={this.handleChange.bind(this)} />
        <input name="desc" type="text" placeholder="Enter Description" onChange={this.handleChange.bind(this)} />
        <input defaultValue="Create" type="button" onClick={this.onAdddPressed.bind(this)} />
        <input defaultValue="Cancel" type="CanButton" onClick={this.toggleCreating.bind(this)} />
      </div>
    );
  }
  renderNewBtn() {
    return (
      <input type="button" value="New" onClick={this.toggleCreating.bind(this)} />
    );
  }

  render() {
    let notes = this.props.notes
    notes.sort((a, b) => a.id - b.id).reverse();
    return (
      <div className="App">
        <h1 className="App-title">My notes</h1>
        {<NotesList notes={notes} updateNote={this.updatePost.bind(this)} deleteNote={this.deletePost.bind(this)} />}
        {this.state.creating ? this.renderForm() : this.renderNewBtn()}
      </div>
    );
  }
}

App.propTypes = {
  notes: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps)(App); 