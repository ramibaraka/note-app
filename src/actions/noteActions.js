import * as types from './actionTypes';
import NoteApi from '../api/NoteApi';

export function loadNotesSuccess(notes) {
    return { type: types.LOAD_NOTES_SUCCESS, notes };
}

export function deleteNoteSuccess(notes) {
    return { type: types.DELETE_NOTE_SUCCESS };
}

export function noteUpdateSuccess(notes) {
    return { type: types.NOTE_UPDATE_SUCCESS };
}

export function notePostSuccess(notes) {
    return { type: types.NOTE_POST_SUCCESS };
}

export function loadNotes() {
    return function (dispatch) {
        return NoteApi.getNotes().then(notes => {
            dispatch(loadNotesSuccess(notes))
        }).catch(error => {
            throw (error);
        });
    };
}

export function deleteNote(id) {
    return function (dispatch) {
        return NoteApi.deleteNote(id).then(notes => {
            dispatch(deleteNoteSuccess(notes));
            setTimeout(function () {dispatch(loadNotes())}, 200)
        }).catch(error => {
            throw (error);
        });
    };
}

export function updateNote(id, data) {
    return function (dispatch) {
        return NoteApi.updateNote(id, data).then(notes => {
            dispatch(noteUpdateSuccess(notes));
            setTimeout(function () {dispatch(loadNotes())}, 200)
        }).catch(error => {
            throw (error);
        });
    };
}

export function postNote(data) {
    return function (dispatch) {
        return NoteApi.postNote(data).then(notes => {
            dispatch(notePostSuccess(notes));
            setTimeout(function () {dispatch(loadNotes())}, 200)
        }).catch(error => {
            throw (error);
        });
    };
}


