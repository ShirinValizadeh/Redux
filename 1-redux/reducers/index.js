//*********  MAIN STORE */

import{combineReducers} from 'redux' ;
 
const songsArry = [
    {title:"1973" , duration:"5.20"},
    {title:"Girl Like You" , duration:"3.00"},
    {title:"Hello" , duration:"6.10"},
]

//MAIN DATA 4
const songReducer = (songs = songsArry , action)=>{
       if (action.type === 'ADD_SONG') {
        songsArry.push(action.payload)
        return [...songsArry]
    }
    return songs
}



//! REDUCER 5
const selectedSongReducer = (selectedSong = null , action) =>{
    if (action.type === 'SONG_SELECTED') {
        //if action contains " payload" that means we are changing the main state
        return action.payload
    }
 

    return selectedSong
}



//6
export default combineReducers({
    songs:songReducer,
    selectedSong : selectedSongReducer
})