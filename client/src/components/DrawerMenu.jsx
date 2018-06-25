import React, { Component } from 'react'
import {
    SwipeableDrawer,
    IconButton
} from '@material-ui/core'
import {
    Close as CloseIcon
} from '@material-ui/icons'
import NestedList from './NestedList'

let width = window.innerWidth

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
                    <NestedList/>
                </div>
            </SwipeableDrawer>
        )
    }
}
