import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { CommentAction } from './CommentAction';
import EditButton from 'material-ui/svg-icons/editor/mode-edit';
import { store } from './../../store';

export class EditComment extends React.Component {
  state = {
    open: false,
    text: ''
  };

  componentDidMount() {
    this.state.text = this.props.comment.comment;
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleConfirm = () => {
    this.setState({open: false});
    store.editComment(this.props.comment.id, this.state.text);
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
          <EditButton onTouchTap={this.handleOpen} />
        </CommentAction>

        <Dialog
          title="Edit comment"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <textarea style={{ width: '100%', height: '100px' }} value={ this.state.text } onChange={ (e) => this.setState({ text: e.target.value }) } />
        </Dialog>
      </div>
    );
  }
}
