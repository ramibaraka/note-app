import axios from 'axios'


class NoteApi {

    static getNotes() {
        return fetch('https://timesheet-1172.appspot.com/17e29963/notes').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static deleteNote(id) {
        let apiURL = 'https://timesheet-1172.appspot.com/17e29963/notes' + "/" + id
        return axios.delete(apiURL).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static updateNote(id, data) {
        let apiURL = 'https://timesheet-1172.appspot.com/17e29963/notes' + "/" + id
        return axios.put(apiURL, data).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static postNote(data) {
        let apiURL = 'https://timesheet-1172.appspot.com/17e29963/notes'
        return axios.post(apiURL, data).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}
export default NoteApi;


