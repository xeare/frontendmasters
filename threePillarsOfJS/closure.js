//function expressions these two lets are the same
// second is more expressive and preferred
let ids = people.map(person => person.id)
let ids = people.map(function getID(person){
return person.id;
})


get Person().then(person => getData(person.id)).then(renderData)

getPerson().then(function getDataFrom(person){
return getData(person.id)
})
.then(renderData)


//IFFEs funtion scoping

let teacher  = 'kyle'
(function AnotherTeacher(){
let teacher = 'suzy'
console.log(teacher)
})()

console.log(teacher)


//closure

function ask(question){
return function holdYourQuestion(){
console.log(question)
}
}

let myQuestion = ask('closure is confusing')

myQuestion()

//this :dynamic context
let workshop {
	teacher: 'kyle',
ask(question){
console.log(this.teacher, question)
}
}

workshop.ask('what is implicit binding?")

//another example
function ask(question){

console.log(this.teacher, question)}

function otherClass(){
let myContext = {
acher: 'suzy'
}
ask.call(myContext, 'why tho?)
}
otherclass()


// prototypes just as confusing? class is better
function Workshop(teacher){
this.teacher = teacher
}
Workshop.protoype.ask = function(question){
console.log(this.teacher, question)
}

let deepJS = new Workshop('kyle')
let reactJS = new Workshop('suzy')

deepJS.ask('is prototype a class?')

reactJS.ask('isn\'t a prototype ugly?')

//class

class Workshop{
constructor(teacher){
this.teacher = teacher
}
ask(question){
console.log(this.teacher, question)}
}

let deepJS = new Workshop('kyle')
let reactJS = new Workshop('suzy')

deepJS.ask('is class a class?')

reactJS.ask('isn\'t a class better than prototyping?')

do three pillars of js exersice in runJS or something