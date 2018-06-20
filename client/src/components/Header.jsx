import React, { Component } from 'react'
import {
    AppBar,
    Toolbar,
    withStyles,
    Typography,
    Avatar,
    IconButton
} from '@material-ui/core'

const styles = {
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
                    color="secondary"
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
                            color="inherit"
                            variant="display1"
                        >
                            {this.props.title}
                </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header)
