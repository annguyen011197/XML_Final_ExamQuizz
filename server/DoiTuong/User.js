var bcrypt = require('bcrypt')

module.exports = class User {
    constructor() {
        this.username = ''
        this.password = ''
        this.accountType = 0
    }

    toXML(){
        let xmldoc = 
        `
        <User>
        <Username value='username' id='username'/>
        <Password value='password'/>
        <Type value='type'/>
        </User>
        `
        return xmldoc
        .replace(new RegExp('username','g'),this.username)
        .replace(new RegExp('password','g'),this.password)
        .replace(new RegExp('type','g'),this.accountType.toString())
    }

    hash_password(Password)
    {
        this.password = bcrypt.hashSync(Password,10)
    }

    comparePassword(Password){
        return bcrypt.compareSync(Password, this.password)
    }
}

