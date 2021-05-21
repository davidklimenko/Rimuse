

// schema catalog = [ {playlistName, songs: [] }, {playlistName, songs: [] } ... ]

let arr = [
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

console.log(arr)

const initialState = {
    catalog : arr
}

const catalogReducer = (state = initialState, action) => {

    switch (action.type) {
        default : return state
    }
}

// const foo = (a, b) => () => {
//     a + b
// }

// console.log(foo(2, 3))



export default catalogReducer