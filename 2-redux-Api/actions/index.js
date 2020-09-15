
//set imgs list in main state
export const setImgs = (images)=>{
    return{
        type:'SET_IMGS',
        payload : images
    }
}




export const selectSinglImg = (img) =>{
    return {
        type : 'SELECT_IMG',
        payload : img
    }
}