const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

eventEmitter.on('tutorial',()=>{
    console.log('tutorial event has occurred');
})

eventEmitter.emit('tutorial',1,2);


class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }

    get name(){
        return this._name;
    }
}

let Sharif=new Person("Shariful Islam");
let Adiayt=new Person("Hi Adiyat");

Adiayt.on('name',()=>{
    console.log('My name is '+Adiayt.name);
});
Sharif.on('name',()=>{
    console.log('My name is '+Sharif.name);
});

Sharif.emit('name');
Adiayt.emit('name');
