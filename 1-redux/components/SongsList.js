import React from 'react';
import {connect} from "react-redux"; // connect this component to main state 8
import {selectSong} from "../actions" //9.1



//the component get data from outside as a "props" and there is no othere way
class SongsList extends React.Component {

    //!action because we want to do something
    onSelectBtnClick = (song)=>{
      // to run action we need to use dispatch()
       //  this.props.dispatch(selectSong(song))   or

       // pass  {selectSong}  in exporte 
       // it will go to reducer to find action
       this.props.selectSong(song)
    }



  render() {
    //console.log("props : ", this.props);
    const songsItems = this.props.songs.map((song , idx)=>{
        return(
            <li key={idx} className="list-group-item">{song.title}
            <button onClick={()=>{this.onSelectBtnClick(song)}} className="btn btn-primary float-right">show</button>
          </li>
        )
    })

    return (
      <div className="col-md-6 mt-3">
        <ul className="list-group">
          {songsItems}
        </ul>
      </div>
    )
  }
}

// !Get PROPS this function is to convert some data from main state(reducers) to
// props to be passed to a component using "connect" methode convert some data
// from main state(reducer) to props 9
const mapStateToProps = (state) => {
    console.log("state :" , state);
  return ({songs: state.songs})
}



// call function inside function  10
export default connect(mapStateToProps , {selectSong})(SongsList)