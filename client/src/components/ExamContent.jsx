import React, { Component } from 'react'
import {
    Paper,
    withStyles,
    Button,
    Divider,
    Typography
} from '@material-ui/core'
import Question from './Question'

let questions = [{
    question: {
        value: "Can you hear what he is .......",
        answers: {
            A: "Saying",
            B: "Speaking",
            C: "Telling",
            D: "Talking"
        }
    }
},{
    question: {
        value: "Can fuck  hear what he is .......",
        answers: {
            A: "Noen",
            B: "A",
            C: "SSSS",
            D: "CCCC"
        }
    }
},{
    question: {
        value: "eqweqweqwwweqwe",
        answers: {
            A: "312312312",
            B: "eqweqwe",
            C: "SSSS",
            D: "CCCC"
        }
    }
}]

export default class ExamContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionIndex: 0,
            question: questions[0],
            map: new Map()
        }
        this.questionCpn = React.createRef()

    }
    clickNext(){
        const { questionIndex, map  }=this.state
        let newIndex = questionIndex+1
        let newMap = map
        let selected = map.get(newIndex)
        newMap.set(questionIndex,this.questionCpn.current.getAnswer())
        this.questionCpn.current.setAnswer(selected)
        this.setState({
            questionIndex: newIndex,
            question: questions[newIndex],
            map: newMap,
        })
    }
    clickPrev(){
        const { questionIndex, map  }=this.state
        let newIndex = questionIndex-1
        let newMap = map
        let selected = map.get(newIndex)
        newMap.set(questionIndex,this.questionCpn.current.getAnswer())
        this.questionCpn.current.setAnswer(selected)
        this.setState({
            questionIndex: newIndex,
            question: questions[newIndex],
            map: newMap,
        })
    }
    getAnswer(){
        const { questionIndex, map  }=this.state
        let newMap = map
        newMap.set(questionIndex,this.questionCpn.current.getAnswer())
        this.setState({
            map: newMap 
        })
        console.log(this.state.map)
    }
    render() {
        const { questionIndex }= this.state
        return (
            <Paper
                style={this.props.style}
                elevation={4}
            >
                <Question
                    question={this.state.question.question}
                    ref={this.questionCpn}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Button
                        onClick={this.clickPrev.bind(this)}
                        disabled={questionIndex < 1}
                    >
                        Prev
                    </Button>
                    <Typography>
                        {(questionIndex+1).toString()}
                    </Typography>
                    <Button
                        onClick={questions.length==questionIndex+1 
                            ?this.getAnswer.bind(this) 
                            :this.clickNext.bind(this)}
                    >
                        {questions.length==questionIndex+1?'Send Answer':'Next'}
                    </Button>
                </div>

            </Paper>
        )
    }
}
