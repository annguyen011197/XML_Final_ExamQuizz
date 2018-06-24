let utils = require('../XuLy/Utils')

'use strict';
module.exports =  class Exam{
    constructor(){
        this.id = ''
        this.name = ''
        this.time = 0
        this.content =  []
    }
    get Id(){
        return this.id.toLowerCase()
    }

    set Id(ID){
        this.id = ID 
    }

    get Name(){
        return this.name.toLowerCase()
    }

    set Name(Name){
        this.name = Name ?  Name : ''
    }

    get Time(){
        return this.name.toLowerCase()
    }

    set Time(value){
        this.time = value ?  parseInt(value) : 0
    }

    addQuestion(value){
        this.content.push(value)
    }

    get Content(){
        return this.content
    }

    toJSON(){
        let res = {}
        let info = {}
        info.id = this.id
        info.name = this.name
        info.time =  utils.isNumber(this.time) ? parseInt(this.time) : 0
        res.info = info
        let questions = []
        let answers = []
        let temp = utils.shuffle(this.content)
        temp.forEach((e,i)=>{
            let w = e.toJSON()
            let q = {}
            let a = {}
            a.index = i
            a.text = w.result
            q.index = i
            q.question = {
                value: w.question,
                answers: w.answers
            }
            questions.push(q)
            answers.push(a)
            i++
        })
        res.questions = questions
        res.answers = answers
        return res
    }
}

