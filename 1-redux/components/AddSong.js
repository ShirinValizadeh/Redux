import React from "react"
import {connect} from "react-redux"; // connect this component to main state
import {addSong} from "../actions"

class AddSong extends React.Component{

    state = {
        songTitle : '',
        songDuration : ''
    }

    onDurationChange = (e)=>{
        this.setState({songDuration:e.target.value})
    }
    onTitleChange = (e)=>{
        this.setState({songTitle:e.target.value})
    }
    onAddBtnClick= ()=>{
        this.props.addSong({
            title : this.state.songTitle,
            duration : this.state.songDuration
        })
    }


    render(){

        const {songTitle,songDuration} = this.state
        const {onTitleChange ,onDurationChange ,onAddBtnClick} = this

        return(
            <div className="col-md-12 mt-3">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" >Song Title</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Song Title"
                value={songTitle}
                onChange={onTitleChange}
                />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Song Duration</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Song Duration"
                value={songDuration}
                onChange={onDurationChange}

                />
            </div>
            <button onClick={onAddBtnClick} className="btn btn-success">Add</button>
          </div>
        )
    }
}



// dont need props
// need to connect to action "addsong"
export default connect(null , {addSong})(AddSong) 