import React from 'react';
import {connect} from "react-redux"

import {selectSinglImg , nextPage} from "../actions"

class ShowImgs extends React.Component {
  constructor(props) {
    super(props)
    this.ulRef = React.createRef()
  }

  scroll = () => {
    if (this.ulRef.current.getBoundingClientRect().bottom < window.innerHeight) {
      console.log('reach the end');
      this.props.nextPage(true)
    }
  }

  componentDidUpdate() {
    window.addEventListener('scroll', () => {
      this.scroll()
    })

  }

  onSelectImgBtnClick = (img) => {
    this
      .props
      .selectSinglImg(img)
  }

  render() {

    const imgsElements = this
      .props
      .images
      .map((img, idx) => {

        return (
          <li key={idx} className="list-group-item">
            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
              <div className="media-body order-2 order-lg-1">
                <h5 className="mt-0 font-weight-bold mb-2">Photographer : {img.user}</h5>
                <p className="font-italic text-muted mb-0 small">Tags : {img.tags}</p>
                <div className="d-flex align-items-center justify-content-between mt-1">
                  <button
                    onClick={() => {
                    this.onSelectImgBtnClick(img)
                  }}
                    className="btn btn-primary"
                    target="_blank">show large img</button>
                </div>
              </div><img
                src={img.previewURL}
                alt="Generic placeholder image"
                width="200"
                className="ml-lg-5 order-1 order-lg-2"/>
            </div>
          </li>
        )
      })

    return (
      <ul ref={this.ulRef} className="list-group col-md-12 shadow mb-3">
        {imgsElements}
      </ul>
    )
  }
}

// convert state to props
const mapStateToProps = (state) => {
 // console.log("selected", state.selectedImage);
  return {images: state.images}
}

export default connect(mapStateToProps, {selectSinglImg , nextPage})(ShowImgs)