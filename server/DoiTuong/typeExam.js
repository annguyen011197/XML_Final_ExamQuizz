module.exports = class TypeExam {
    constructor() {
        this.id = ''
        this.name =''
        this.content = []
    }

    get Id() {
        return this.id.toLocaleLowerCase()
    }
    set Id(ID) {
        this.id = ID
    }

    get Name(){
        return this.name.toLowerCase()
    }

    set Name(Name){
        this.name = Name ?  Name : ''
    }
    addExam(value){
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
        res.info = info
        res.exam={}
        let exam = {}
        for (let i = 0; i < this.content.length; ++i) {
            exam[toChar(i)] = this.content[i].text
            if(this.content[i].correct){
                res.content = toChar(i)
            }
        }
        res.exam = exam
        return res
    }

}