import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Modal,ModalManager, Effect } from 'react-dynamic-modal';
import {connect} from 'react-redux'
const modalStyles = {
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    zIndex          : 99999999,
    overflow        : 'hidden',
    perspective     :  1300,
    backgroundColor : 'rgba(140,137,136, 0.8)',
  },

  content: {
    position                : 'relative',
    margin                  : '15% auto',
    width                   : '60%',
    border                  : 'none',
    background              : 'rgba(140,137,136, 0)',
    overflow                : 'auto',
    outline                 : 'none',
    boxShadow               : 'none',
  }
}

export class ModalOverlayScreen extends Component {
   render(){
      return (
         <Modal
            style = {modalStyles}
            onRequestClose={this.props.onRequestClose}
            effect={Effect.SuperScaled} >
            {this.props.children}
            <button onClick={ModalManager.close}>Close Modal</button>
         </Modal>
      );
   }
}
export default connect()(ModalOverlayScreen);