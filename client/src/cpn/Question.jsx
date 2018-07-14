import React, { Component } from 'react'
import {
    withStyles,
    Typography,
    Divider,
    List,
    ListItem
} from '@material-ui/core'
import Answer from './AnswerOptions'


class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null,
            question: null,
            map: new Array()
        }
    }

    handleClick(key) {
        this.setState({
            selected: key
        })
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

    getAnswer() {
        return this.state.selected
    }

    setAnswer(a) {
        this.setState({
            selected: a
        })
    }

    componentWillMount() {
        this.handleForRender(this.props)
    }

    componentWillReceiveProps(props) {
        this.handleForRender(props)
    }
    render() {
        const { question, map } = this.state

        const style = {

        }
        return (
            <List>
                <ListItem>
                    <Typography
                        variant='headline'
                        color='inherit'
                    >
                        {question ? question.value : 'null'}
                    </Typography>
                </ListItem>

                <Divider />
                {map.map(x => {
                    return (
                        <Answer
                            value={question.answers[x]}
                            index={x}
                            selected={this.state.selected}
                            click={this.handleClick.bind(this)}
                            key={x}
                        />
                    )
                })}
            </List>
        )
    }
}


export default Question
