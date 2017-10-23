import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function noteReducer(state = initialState.notes, action) {
  switch (action.type) {
    case types.LOAD_NOTES_SUCCESS:
      return action.notes
    case types.DELETE_NOTE_SUCCESS:
      return state
    case types.NOTE_UPDATE_SUCCESS:
      return state
    case types.NOTE_POST_SUCCESS:
      return state
    default:
      return state;
  }
}