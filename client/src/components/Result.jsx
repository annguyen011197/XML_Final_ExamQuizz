import React, { Component } from 'react'
import {
    withStyles,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText
} from '@material-ui/core'
import Answer from './AnswerOptions'

class AnswerResult extends Component {
    componentWillMount() {

    }
    constructor(props) {
        super(props)

        let link = ''
        if (props.selected != props.index) {
            link = '/square.svg'
        } else {
            if (props.selected != props.result) {
                link = '/error.svg'
            } else {
                link = '/success.svg'
            }
        }

        if (props.result == props.index) {
            link = '/success.svg'
        }
        this.state = {
            icon: link,
            checked: props.checked
        }
    }

    render() {
        const { classes, value, checked } = this.props;
        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={this.state.icon} />
                </ListItemAvatar>

                <ListItemText
                    primary={value}
                />
            </ListItem>
        )
    }
}

class Result extends Component {
    constructor(props) {
        super(props)
        let q = props.question
        console.log(props)
        this.state = {
            selected: null,
            question: null,
            map: new Array(),
            checked: q.check,
            result: q.result,
            selected: q.selected,
            index: props.question.index
        }
    }

    handleForRender(props) {
        let question = props.question
        let temp = new Array()
        if (question) {
            question = question.question
            for (let k of Object.keys(question.answers)) {
                temp.push(k)
            }
            this.setState({ question: question, map: temp })
        }

    }

    componentWillMount() {
        this.handleForRender(this.props)
    }

    render() {
        const { question, map, selected, result, checked,index } = this.state
        console.log(this.state)
        return (
            <List>
                <div style={{
                    backgroundColor: checked ? '#FFFFFF' : '#ff6666'
                }}>
                    <ListItem>
                        <Typography
                            variant='headline'
                            color='inherit'
                        >
                            {question ? `${index+1}. ${question.value}` : 'null'}
                        </Typography>
                    </ListItem>

                </div>

                <Divider />
                {map.map(x => {
                    return (
                        <AnswerResult
                            value={question.answers[x]}
                            index={x}
                            selected={selected}
                            key={x}
                            result={result}
                            checked={checked}
                        />
                    )
                })}
            </List>
        )
    }
}


export default Result
