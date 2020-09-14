//***************action 7*/

// to run action we need to use dispatch()
// to get or to change selectedSong
export const selectSong = (song)=>{
    return {
        type:'SONG_SELECTED',
        payload : song
    }
}



