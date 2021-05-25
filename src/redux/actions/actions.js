import {ADD_PLAYLIST, ADD_LOCAL, GET_FROM_LOCAL, ADD_FAVORITE} from '../types/actionTypes.js'

export function add_playlist(title){

    return {
        type : ADD_PLAYLIST,
        playlist_title : title
    }
}

export function add_local(){
    return {
        type : ADD_LOCAL
    }
}

export function get_from_local(){
    return {
        type : GET_FROM_LOCAL
    }
}

export function add_favorites(data){
    return {
        type : ADD_FAVORITE,
        favorite_data : data
    }
}