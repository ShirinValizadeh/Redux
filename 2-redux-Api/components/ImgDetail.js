import React from 'react';
import {connect} from "react-redux"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {selectSinglImg} from "../actions"

class ImgDetail extends React.Component {

  toggle = () => {
    this
      .props
      .selectSinglImg(null)
  }

  render() {
    const {toggle} = this
    if (this.props.selectedImage) {

      return (
        <div>

          <Modal isOpen={true} toggle={toggle} size="lg" >
            <ModalHeader toggle={toggle}>{this.props.selectedImage.tags}</ModalHeader>
            <ModalBody>
              <img className="w-100"  src={this.props.selectedImage.largeImageURL}/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>close</Button>

            </ModalFooter>
          </Modal>
        </div>
      )
    }else{
        return null
    }

  }
}

// convert state to props
const mapStateToProps = (state) => {
  // console.log(state);
  return {selectedImage: state.selectedImage}
}

export default connect(mapStateToProps, {selectSinglImg})(ImgDetail)