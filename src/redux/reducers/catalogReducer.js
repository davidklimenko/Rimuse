import {ADD_PLAYLIST} from '../types/actionTypes.js'

// schema catalog = [ {playlistName, songs: [] }, {playlistName, songs: [] } ... ]
let state = [
    {
        id : `main`,
        type : 'MAIN-PLAYLIST',
        playlistName : 'My song',
        songs : [
            {
                id : `#song${Date.now()}`,
                songName : '123sdaf sdf',
                src : '/music/',    
                properties : {
                  size : '15MB'
                }
            }
        ]
    },
    {
        id : `favorites`,
        type : 'FAVORITES-PLAYLIST',
        playlistName : 'Favorites',
        songs : [
            {
                id : `#song${Date.now()}`,
                songName : 'song name 231',
                src : '/music/',
                properties : {
                  size : '15MB'
                }
            }
        ]
    },
    {
        id : `custom${3}`,
        type : 'CUSTOM-PLAYLIST',
        playlistName : 'Sad songs',
        songs : []
    },
    {
        id : `custom${4}`,
        type : 'CUSTOM-PLAYLIST',
        playlistName : 'American Jazz',
        songs : [
            {
                id : `#song${Date.now()}`,
                songName : 'song fsaf312  name 234',
                src : '/music/',
                properties : {
                  size : '15MB'
                }
            },
            {
                id : `#song${Date.now()}`,
                songName : 'song3 423 23 4 name 231',
                src : '/music/',
                properties : {
                  size : '15MB'
                }
            }
        ]
    },
]

const initialState = {
    catalog : state
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYLIST : return {
            ...state, 
            catalog : [...state.catalog, {
                id : `custom${Date.now()}`,
                type : 'CUSTOM-PLAYLIST',
                playlistName : action.playlist_title,
                songs : []
            }]
        }
        default : return state
    }
}

export default catalogReducer