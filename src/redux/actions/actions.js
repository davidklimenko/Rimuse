import {ADD_PLAYLIST} from '../types/actionTypes.js'

export function add_playlist(title){
    return {
        type : ADD_PLAYLIST,
        playlist_title : title
    }
}