import {ADD_PLAYLIST, ADD_LOCAL, GET_FROM_LOCAL, ADD_FAVORITE} from '../types/actionTypes.js'
import {find_favorites} from '../../utils/index.js'
// schema catalog = [ {playlistName, songs: [] }, {playlistName, songs: [] } ... ]
let state = [
    {
        id : `main`,
        type : 'MAIN-PLAYLIST',
        playlistName : 'My song',
        songs : [
            {
                id : `#song1$1`,
                songName : 'melody1',
                src : '/music/',    
                properties : {
                  size : '15MB'
                }
            },
            {
                id : `#song$2`,
                songName : 'melody2',
                src : '/music/',    
                properties : {
                  size : '15MB'
                }
            },
            {
                id : `#song$3`,
                songName : 'melody3',
                src : '/music/',    
                properties : {
                  size : '15MB'
                }
            },
            {
                id : `#song$4`,
                songName : 'melody4',
                src : '/music/',    
                properties : {
                  size : '15MB'
                }
            },
            {
                id : `#song$5`,
                songName : 'melody5',
                src : '/music/',    
                properties : {
                  size : '15MB'
                }
            },
            {
                id : `#song$6`,
                songName : 'melody6',
                src : '/music/',    
                properties : {
                  size : '15MB'
                }
            },
            {
                id : `#song$7`,
                songName : 'melody7',
                src : '/music/',    
                properties : {
                  size : '15MB'
                }
            },
            {
                id : `#song$8`,
                songName : 'melody8',
                src : '/music/',    
                properties : {
                  size : '15MB'
                }
            },
            

        ]
    },
    {
        id : `favorites`,
        type : 'FAVORITES-PLAYLIST',
        playlistName : 'Favorites',
        songs : [
            {
                id : `#song$2`,
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
        
        case ADD_PLAYLIST : 
            return {
                ...state, 
                catalog : [...state.catalog, {
                id : `custom${Date.now()}`,
                type : 'CUSTOM-PLAYLIST',
                playlistName : action.playlist_title,
                songs : []
            }]
        }
        case ADD_LOCAL :  localStorage.setItem('addlocal', JSON.stringify(state))
           return state
        case GET_FROM_LOCAL : state = JSON.parse(localStorage.getItem('addlocal'))
            return state
        case ADD_FAVORITE : return find_favorites(state, action.favorite_data)
        default : return state
    }
}

export default catalogReducer