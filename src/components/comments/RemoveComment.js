import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { CommentAction } from './CommentAction';
import RemoveButton from 'material-ui/svg-icons/action/delete-forever';
import { store } from './../../store';

export class RemoveComment extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleConfirm = () => {
    this.setState({open: false});
    store.removeComment(this.props.id);
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleConfirm}
      />,
    ];

    return (
      <div style={{ display: 'inline-block' }}>

        <CommentAction>
          <RemoveButton onTouchTap={this.handleOpen} />
        </CommentAction>

        <Dialog
          title="Remove comment"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Are you sure you want to remove this comment ?
        </Dialog>
      </div>
    );
  }
}
