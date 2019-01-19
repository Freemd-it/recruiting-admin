import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import './Modal.scss';

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class CustomModal extends React.Component {
  state = {
  } 

  componentDidMount() {
  }

  render() {
    const { 
      classes, 
      open, 
      onModal, 
      title, 
      contents, 
      confirmMessage = '확인',
      cencleMessage = '취소',
      confirmFun = () => { onModal() },
      isCancel = true 
    } = this.props;
    return (
      <Modal
        open={open} 
        onClose={(e) => onModal()} 
      >
        <div className={`CustomModal ${classes.paper}`}>
          <div className={`CustomModal__title`}>
            {title != null ? title : ''}
            <CloseIcon className={`CustomModal__closeIcon`} onClick={() => onModal()}/>
          </div>
          {contents}
          <div className={`CustomModal__footer`}>
            <Button 
              variant="contained" 
              color="primary" 
              className={`${isCancel ? 'CustomModal__footer__confirm' : 'CustomModal__footer__shadow'}`} 
              onClick={confirmFun}
            >
              {confirmMessage}
            </Button>
            {
              isCancel && 
              <Button 
                variant="contained" 
                color="primary" 
                variant="outlined" 
                onClick={() => {onModal()}}
              >
                {cencleMessage}
              </Button>
            }
          </div>
        </div>
      </Modal>
    );
  }
}

CustomModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ModalWrapped = withStyles(styles)(CustomModal);

export default ModalWrapped;