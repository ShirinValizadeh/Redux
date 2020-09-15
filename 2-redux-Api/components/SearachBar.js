import React from 'react';
import {connect} from "react-redux"

import getData from "../services/pixabay"
import {setImgs , nextPage} from "../actions"

class SearchBar extends React.Component {
  state = {
    searchWord : '',
    page:1
  }

  onSearchInpChange = (e)=>{
    this.setState({
        searchWord: e.target.value
    }) 
  }


  //wenn click on btn >will get data
  onSearchBtnClick = ()=>{
    getData(this.state.searchWord , 10 , 1).then(data =>{
       // console.log(data);
        //take setImgs func from actions
        this.props.setImgs(data.hits)
    }).catch(err=>{
        console.log(err);
    })
  }

componentDidUpdate(){
    if (this.props.next) {
        getData(this.state.searchWord , 10 , this.state.page +1).then(data =>{
            this.setState({
                page:this.state.page +1
            })
            this.props.nextPage(false)
             this.props.setImgs([...this.props.images , ...data.hits])

         }).catch(err=>{
             console.log(err);
         })
    }
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


// convert state to props
const mapStateToProps = (state) =>{
   // console.log( 'state : ' , state);
    return {images: state.images , next:state.next}
}




export default connect(mapStateToProps , {setImgs , nextPage})(SearchBar) 