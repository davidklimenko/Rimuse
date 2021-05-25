export function find_favorites(state, data){
    let [favorites] = state.catalog.filter(elem => elem.id == `favorites`)
    let song = favorites.songs.filter(elem => elem.id == data.id)
    if(song.length){
        return {
            ...state,
            catalog : [...state.catalog, 
                {   
                    ...state.catalog[1],
                    ...state.catalog[1].songs,
                    data
                }
            ] 
            
        }
    }
    console.log(data)
    console.log(state)
    console.log(state.catalog.filter(elem => elem.id == `favorites`))
    return state
}
