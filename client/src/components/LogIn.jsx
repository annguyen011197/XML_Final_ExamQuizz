import React, {Component} from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  IconButton,
} from '@material-ui/core'
import {
  Close as CloseIcon
} from '@material-ui/icons'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    };
}
open() {
  this.setState({ open: true });
};

close() {
  this.setState({ open: false });
};
  render() {
    const { fullScreen, classes } = this.props
    return (
      <div>
      <Dialog 
      fullScreen={fullScreen}
      open= {this.state.open}
      onClose={this.close.bind(this)}
        >
        <IconButton
        onClick={this.close.bind(this)}
        >
            <CloseIcon />
        </IconButton>
        <DialogTitle align="center">Account {this.props.name}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
          />
          <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
        </DialogContent>
        <DialogActions>    
          <Button
          color="primary" 
          onClick={this.close.bind(this)}
          >
          {this.props.name}
          </Button>        
        </DialogActions>
      </Dialog>
      </div>
    );
  }
}
