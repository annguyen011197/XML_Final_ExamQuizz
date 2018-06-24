module.exports = class Question {
    constructor() {
        this.content = ''
        this.result = []
    }

    get Content() {
        return this.content
    }

    set Content(value) {
        this.content = value ? value : ''
    }

    addResult(value) {
        this.result.push(value)
    }

    toJSON() {
        let res = {}
        res.question = this.content
        res.answers={}
        let answers = {}
        for (let i = 0; i < this.result.length; ++i) {
            answers[toChar(i)] = this.result[i].text
            if(this.result[i].correct){
                res.result = toChar(i)
            }
        }
        res.answers = answers
        return res
    }
}

let toChar = (n) => {
    return String.fromCharCode(97 + n).toUpperCase()
}