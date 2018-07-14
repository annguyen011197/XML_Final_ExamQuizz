import React, { Component } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    CardActions,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider
} from '@material-ui/core'
import {
    FiberManualRecord as CircleIcon
} from '@material-ui/icons'

let question = {
    name: 'Exam 1',
    id: 'ewewe',
    description: 'Mootj hai ba bon nawm sau bay tamhcinhmuo mot hai ba bon nawm sau balbadajda hahaha',
    question: {
        value: "asdasdsadasdwdw",
        answers: {
            A: 'Saying',
            B: 'sdad',
            C: 'ewqeqwe',
            D: 'ewewew'
        }
    }
}

export default class ShowQuizz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answers: [],
            isHovering: false
        }
        this.handleMouseHover = this.handleMouseHover.bind(this)
    }
    componentWillMount() {
        let temp = new Array()
        for (let k in question.question.answers) {
            temp.push(question.question.answers[k])
        }
        this.setState({
            answers: temp
        })
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
      }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }
    renderHover() {
        return (
            <Card>
                <CardHeader
                    title={question.name}
                />
                <CardContent>
                    <Typography component="p"
                        style={{
                            width: '80%',
                            lineHeight: '1.8em',
                            maxHeight: '3.6em',
                            wordWrap: 'break-word',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                    >{question.description}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" >
                        Take Quizz
                    </Button>
                </CardActions>
            </Card>
        )
    }
    renderNotHover() {
        return(
            <Card>
            <CardHeader
                title={question.question.value}
            />
            <Divider />
            <CardContent>
                <List>
                    {this.state.answers.map(e => {
                        return (
                            <ListItem>
                                <ListItemAvatar>
                                    <CircleIcon />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={e}
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </CardContent>
        </Card>
        )

    }
    render() {
        console.log(this.state)
        return (
            this.renderHover()
        )
    }
}
