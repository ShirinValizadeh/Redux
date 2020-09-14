import React from 'react';
import {connect} from "react-redux" ; // connect this component to main state

//the component get data from outside as a "props" and there is no othere way
class SongsList extends React.Component{
   
    render(){
        console.log(this.props);
        return(
            <div className="col-md-6">
                SONGS LIST
                </div>
        )
    }
}


//!Get PROPS
//this function is to convert some data from main state(reducers) to props to be passed to a component using "connect" methode
//convert some data from main state(reducer) to props
const mapStateToProps = (state)=>{
    return ({songs : state.songs})
}


// call function inside function
export default connect(mapStateToProps)(SongsList)