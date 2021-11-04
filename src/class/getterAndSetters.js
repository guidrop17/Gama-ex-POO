class Person {
    constructor(name, occupation){
        this._name = name;
        this._occupation = occupation

    }

    speak(){
        return `${this._name} trabalha com ${this.occupation}`
    }
    set name(string){
        this._name = string.toUpperCase()
    }
    // set name(name){
    //     return this._name = name
    // }

}

let mariane = new Person('Mariane', 'Dev')

mariane.name = 'MariAne'

module.exports = mariane