import React, { Component } from 'react'
import {
    Paper,
    withStyles,
    Button,
    Divider,
    Typography,
    LinearProgress
} from '@material-ui/core'
import Question from './Question'
import info from '../assets/jss/info'
import utils from '../assets/jss/utils'
import Result from './Result'

export default class ExamContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionIndex: 0,
            map: new Map(),
            questions: [],
            id: null,
            fetch: true,
            result: null
        }
        this.questionCpn = React.createRef()
    }

    componentWillMount() {
        fetch(`${info.serverURL}/dethi?id=ZGV0aGkx`)
            .then(res => res.json())
            .then(data => {
                if (data.hasOwnProperty('questions')) {
                    this.setState({
                        questions: data.questions,
                        id: data.info.id,
                        fetch: false
                    })
                }
            })
    }
    clickNext() {
        const { questionIndex, map } = this.state
        let newIndex = questionIndex + 1
        let newMap = map
        let selected = map.get(newIndex)
        let answer = this.questionCpn.current.getAnswer()
        if (answer) {
            newMap.set(questionIndex, this.questionCpn.current.getAnswer())
            this.questionCpn.current.setAnswer(selected)
            this.setState({
                questionIndex: newIndex,
                map: newMap,
            })
        } else {
            this.questionCpn.current.setAnswer(selected)
            this.setState({
                questionIndex: newIndex,
            })
        }
    }
    clickPrev() {
        const { questionIndex, map } = this.state
        let newIndex = questionIndex - 1
        let newMap = map
        let selected = map.get(newIndex)
        let answer = this.questionCpn.current.getAnswer()
        console.log(selected)
        if (answer) {
            newMap.set(questionIndex, answer)
            this.questionCpn.current.setAnswer(selected)
            this.setState({
                questionIndex: newIndex,
                map: newMap,
            })
        } else {
            this.questionCpn.current.setAnswer(selected)
            this.setState({
                questionIndex: newIndex,
            })
        }
    }
    getAnswer() {
        const { questionIndex, map } = this.state
        let newMap = map
        let answer = this.questionCpn.current.getAnswer()
        if (answer) {
            newMap.set(questionIndex, answer)
            this.setState({
                map: newMap,
                fetch: true
            })
        } else {
            this.setState({
                fetch: true
            })
        }
        fetch(`${info.serverURL}/dapan`, {
            method: 'post',
            body: JSON.stringify({
                id: this.state.id,
                answer: utils.strMapToObj(this.state.map)
            })
        })
            .then(res => res.json())
            .then(data => {
                let q = this.state.questions
                if (data.hasOwnProperty('correct')
                    && data.hasOwnProperty('wrong')
                    && data.hasOwnProperty('answer')) {
                        console.log(data)
                    for (const key in q) {
                        if (q.hasOwnProperty(key)) {
                            if (data.correct[`${key}`]) {
                                q[key].check = true
                                q[key].selected = data.correct[`${key}`]
                            } else if (data.wrong[`${key}`]) {
                                q[key].check = false
                                q[key].selected = data.wrong[`${key}`]
                            }
                            q[key].result = data.answer[`${key}`]
                        }
                    }
                }
                this.setState({
                    fetch: false,
                    result: q
                })
            })
    }

    renderQuestion() {
        const { questionIndex, questions } = this.state
        return (
            <div
                style={this.props.style}
                elevation={4}
            >
                <Question
                    question={questions[questionIndex]}
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
                        {(questionIndex + 1).toString()}
                    </Typography>
                    <Button
                        onClick={questions.length == questionIndex + 1
                            ? this.getAnswer.bind(this)
                            : this.clickNext.bind(this)}
                    >
                        {questions.length == questionIndex + 1 ? 'Send Answer' : 'Next'}
                    </Button>
                </div>

            </div>
        )
    }
    renderProgress() {
        return (
            <LinearProgress variant="query" />
        )
    }

    renderResult() {
        return (
            <div
                style={this.props.style}
            >
                {this.state.result.map((x,i)=> {
                    return (
                        <div key={i}>
                            <Result
                                question={x}
                            />
                            <Divider />
                        </div>
                    )
                })}
            </div>
        )
    }
    render() {
        let main = this.renderProgress()
        if(this.state.result){
            main = this.renderResult()
        }else{
            if(this.state.fetch){
                main = this.renderProgress()
            }else{
                main = this.renderQuestion()
            }
        }
        return (
            <div>
                {main}
            </div>
        )
    }
}
