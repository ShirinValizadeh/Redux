import React from 'react';
import {connect} from "react-redux"

import getData from "../services/pixabay"
import {setImgs} from "../actions"

class SearchBar extends React.Component {
  state = {
    searchWord : ''
  }

  onSearchInpChange = (e)=>{
    this.setState({
        searchWord: e.target.value
    }) 
  }

  //wenn click on btn >will get data
  onSearchBtnClick = ()=>{
    getData(this.state.searchWord , 10 , 1).then(data =>{
        console.log(data);
        this.props.setImgs(data.hits)
    }).catch(err=>{
        console.log(err);
    })
  }



  render() {
      const {searchWord} =  this.state
      const {onSearchInpChange , onSearchBtnClick} = this


    return (

      <div className="input-group mb-3 mt-3">
        <div className="input-group-prepend">
          <button onClick={onSearchBtnClick} className="btn btn-outline-secondary" type="button">serach</button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search Word ..."
          value={searchWord}
          onChange={onSearchInpChange}
          />
      </div>

    )
  }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {images: state.images}
}




export default connect(mapStateToProps , {setImgs})(SearchBar) 