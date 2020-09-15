import {combineReducers} from "redux"



const imgsArr = []

const imgsReducer = (imges =imgsArr , action)=>{
    if (action.type === 'SET_IMGS') {
        //return just new imgs list
        return action.payload
    }
    return imges
}


const selectedImgReducer = (img = null , action) =>{
    if (action.type === 'SELECT_IMG') {
        // return which img is selected
        return action.payload
    }
    return img
}


//we get them as a obj
export default combineReducers({
    images : imgsReducer,
    selectedImage : selectedImgReducer
})