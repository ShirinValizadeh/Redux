import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux" // has access to main store1
import {createStore} from "redux"    // function to creatStore (we make it in reducers)2



import SongsList from "./components/SongsList"
import SongDetail from "./components/SongDetail"
import reducers from "./reducers"
import AddSong from "./components/AddSong"


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <AddSong />

          <SongsList/>
          <SongDetail/>
        </div>

      </div>
    )
  }
}


//any component inside provider gonna have access to mainStore
//!provider needs store which gonna be build using redux creatingStore
// creatStore need reducer to organise data inside store 3
ReactDOM.render(
  <Provider store={createStore(reducers)}>
  <App/>
</Provider>, document.querySelector('#root'))