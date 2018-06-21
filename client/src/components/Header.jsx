import React, { Component } from 'react'
import {
    AppBar,
    Toolbar,
    withStyles,
    Typography,
    Avatar,
    IconButton, Button
} from '@material-ui/core'

const styles = {
    root: {
        flexGrow: 1,
      },
      flex: {
        flex: 1,
      },
    logoBrand: {
        marginLeft: -12,
        marginRight: 20
    }
}

class Header extends Component {
    onMenuClick(){
        this.props.parent.openMenu()
    }
    render() {
        const { classes } = this.props
        return (
            <div>
                <AppBar
                    position="sticky"
                    color="primary"
                >
                    <Toolbar>
                        <IconButton
                        className={classes.logoBrand}
                        onClick={this.onMenuClick.bind(this)}
                        >
                            <Avatar
                                alt="none"
                                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
                            />
                        </IconButton>
                        <Typography
                            variant="display1"
                            color="inherit" 
                            className={classes.flex}
                        >
                            {this.props.title}
                        </Typography>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Sign Up</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header)
