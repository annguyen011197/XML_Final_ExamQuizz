import React, { Component } from 'react';
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
import info from '../assets/jss/info'
export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            username: '',
            password: '',
            repassword: ''
        }
    }
    open() {
        this.setState({ open: true })
    };

    close() {
        this.setState({ open: false })
    }
    onTest = () => {
        if(this.state.password!=this.state.repassword){
            alert('Mật khẩu không trùng nhau')
            return
        }

        fetch(`${info.serverURL}/user`, {
            method: 'post',
            body: JSON.stringify({
                username:this.state.username,
                password:this.state.password,
                accounttype:0,
                method:"signup"
            })
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
        })

    }
    render() {
        const { fullScreen } = this.props
        return (
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
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
                            ref="username"
                            label="Username"
                            type="text"
                            fullWidth
                            value={this.state.username}
                            onChange={e => this.setState({ username: e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            label="Re Password"
                            type="password"
                            fullWidth
                            value={this.state.repassword}
                            onChange={e => this.setState({ repassword: e.target.value })}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            color="primary"
                            onClick={this.onTest}
                        >
                            {this.props.name}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
