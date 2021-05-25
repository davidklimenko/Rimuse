export function find_favorites(state, data){
    let [favorites] = state.catalog.filter(elem => elem.id == `favorites`)
    let song = favorites.songs.filter(elem => elem.id == data.id)
    if(song.length){
        return {
            ...state,
            catalog : [...state.catalog.filter(elem => elem.id == `favorites`), 

            ] 
            
        }
    }
    console.log(state.catalog.filter(elem => elem.id == `favorites`))
    return state
}
