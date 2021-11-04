class Person{
    constructor(name, occupation, age ){
        this._name = name;
        this._occupation = occupation;
        this._age = age
    }

    Hello (name, occupation, age){
        if (occupation === "dev"){
            return `Fala ${occupation} seu nome é ${name} e você tem ${age} anos`
        } else {
            return `Fala ${name}, você tem ${age} e sua profissão é ${occupation}`
        }

    }

}

const Pessoa = new Person;

module.exports = Person;