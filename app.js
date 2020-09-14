import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux" // has access to main store
import {createStore} from "redux"    // function to creatStore (we make it in reducers)



import SongsList from "./components/SongsList"
import SongDetail from "./components/SongDetail"
import reducers from "./reducers"



class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <SongsList/>
          <SongDetail/>
        </div>

      </div>
    )
  }
}


//any component inside provider gonna have access to mainStore
//!provider needs store which gonna be build using redux creatingStore
// creatStore need reducer to organise data inside store
ReactDOM.render(
  <Provider store={createStore(reducers)}>
  <App/>
</Provider>, document.querySelector('#root'))