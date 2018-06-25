import React, { Component } from 'react'
import {
    AppBar,
    Toolbar,
    withStyles,
    Typography,
    Avatar,
    IconButton, Button
} from '@material-ui/core'
import info from '../assets/jss/info'

const styles = {
    root: {
        flexGrow: 1,
        top: 0
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
    constructor(props) {
        super(props)
        this.state = {
            info: {
                name: this.props.title,
                logo: './null.svg'
            }
        }
    }
    componentWillMount() {
        fetch(`${info.serverURL}/thongtin`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    info: {
                        name: data.name,
                        logo: `${info.mediaURL}/${data.logo}`
                    }
                })
            })
    }
    onMenuClick() {
        this.props.parent.openMenu()
    }
    render() {
        const { classes } = this.props
        return (
            <AppBar
                position="fixed"
                color="primary"
                className={classes.root}
                id={this.props.id}
            >
                <Toolbar>
                    <IconButton
                        className={classes.logoBrand}
                        onClick={this.onMenuClick.bind(this)}
                    >
                        <Avatar
                            alt="none"
                            src={this.state.info.logo}
                        />
                    </IconButton>
                    <Typography
                        variant="display1"
                        color="inherit"
                        className={classes.flex}
                    >
                        {this.state.info.name}
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Sign Up</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header)