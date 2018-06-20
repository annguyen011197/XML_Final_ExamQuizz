import React, { Component } from 'react'
import {
    SwipeableDrawer,
    Typography,
    Divider,
    IconButton
} from '@material-ui/core'
import {
    Close as CloseIcon
} from '@material-ui/icons'


let width = window.innerWidth
let height = window.innerHeight



export default class DrawerMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            screenwith: width <= 425 ? width : width / 3
        }
    }
    open() {
        this.setState({
            open: true
        })
    }
    close() {
        this.setState({
            open: false
        })
    }
    updateDimension() {
        let tempwidth = window.innerWidth
        if (tempwidth <= 425) {
            //mobile
            this.setState({
                screenwith: window.innerWidth
            })
        } else {
            this.setState({
                screenwith: window.innerWidth / 3
            })
        }

    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimension.bind(this));
    }

    componentWillUnMount() {
        window.addEventListener("resize", this.updateDimension.bind(this));
    }

    render() {
        const styles = {
            root: {
                width: this.state.screenwith,
                marginTop: 10
            }
        }
        return (

            <SwipeableDrawer
                open={this.state.open}
                onOpen={this.open.bind(this)}
                onClose={this.close.bind(this)}
            >
                <div
                    style={styles.root}
                >
                    <IconButton
                    onClick={this.close.bind(this)}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Typography
                        align='center'
                        gutterBottom={true}
                        variant='display1'
                    >
                        Free Quizz 24h
               </Typography>
                    <Typography
                        align='center'
                        variant='subheading'
                    >
                        v1.0
               </Typography>
                    <Divider />
                </div>
            </SwipeableDrawer>
        )
    }
}
