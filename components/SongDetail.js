import React from 'react';
import {connect} from "react-redux"; // connect this component to main state

class SongDetail extends React.Component {
    //just show details
  render() {
    if (this.props.selectedSong) {
      return (
        <div className="col-md-6 mt-3">
          <h5>SONG DETAIL</h5>
          <p>Song Title :{this.props.selectedSong.title}</p>
          <p>Song Duration :{this.props.selectedSong.duration}</p>

        </div>
      )
    } else {
        return(
            < h5 > No Song is selected </h5>
        ) 
        }
  }
}



// take props
const mapStateToProps = (state) => {
  return ({selectedSong: state.selectedSong})
}


// connect 
export default connect(mapStateToProps)(SongDetail)