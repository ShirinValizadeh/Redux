//*********  MAIN STORE */

import{combineReducers} from 'redux' ;


//MAIN DATA
const songReducer = ()=>{
    return [
        {titel:"1973" , duration:"5.20"},
        {titel:"Girl Like You" , duration:"3.00"},
        {titel:"Hello" , duration:"6.10"},
    ]
}


//! REDUCER
const selectedSongReducer = (selectedSong = null , action) =>{
    if (action.type === 'SONG_SELECTED') {
        //if action contains " payload" that means we are changing the main state
        return action.payload
    }

    return selectedSong
}


export default combineReducers({
    songs:songReducer,
    selectedSong : selectedSongReducer
})