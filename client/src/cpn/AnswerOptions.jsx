import React, { Component } from 'react'
import {
    Typography,
    withStyles,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar
} from '@material-ui/core'

import CheckBox from 'react-animated-checkbox'

let style = {
    root: {
        display: 'flex',
        flexDirection: 'row'
    }
}




export default class AnswerOptions extends Component {
    componentWillMount(){
        console.log(this.props.index)
    }
    constructor(props) {
        super(props)
        this.state = {
            check: false
        }
    }

    handleClick= ()=>{
        this.props.click(this.props.index)
    }
    render() {
        const { classes, value, checked } = this.props;
        return (
            <ListItem>
                <ListItemAvatar>
                    <CheckBox
                        checked={this.props.index === this.props.selected}
                        checkBoxStyle={{
                            checkedColor: "#34b93d",
                            size: 30,
                            unCheckedColor: "#b8b8b8"
                        }}
                        duration={400}
                        onClick={this.handleClick.bind(this)}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={value}
                />
            </ListItem>
        )
    }
}
