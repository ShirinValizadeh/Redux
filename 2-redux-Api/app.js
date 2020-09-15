import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import {createStore} from "redux"


import SearchBar from "./components/SearachBar"
import ShowImgs from "./components/ShowImgs"
import ImgDetail from "./components/ImgDetail"
import reducers from "./reducers"

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchBar/>
          <ShowImgs/>
          <ImgDetail/>
        </div>

      </div>
    )
  }
}

ReactDOM.render(
    <Provider store={createStore(reducers)}>
       <App/> 
    </Provider>
  , document.querySelector('#root'))
