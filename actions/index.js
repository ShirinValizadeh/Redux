//***************action */


// to get or to change selectedSong
export const selectSong = (song)=>{
    return {
        type:'SONG_SELECTED',
        payload : song
    }
}



