// import def, {named} from './mymodule'

function walkF() {
  console.log(this)
}

const person = {
  name: 'Ra',
  walk() {
    console.log(this)
  },
  talk() {
    //const self = this
    setTimeout(function() {
      console.log(this) //self
    })
  },
  talkArrow() {
    //arrow func dont rebind this
    setTimeout(() => {
      console.log(this)
    })
  },
}
//obj[walk]

person.walk() //! this -ref> object this method is called on

walkF() //! this -> undefined in strict mode else
walkF() //! this -not called on a object> window obj
person.talk() //! this -> window, strict or not
person.talkArrow() //! -> this person 

//!Set this permanently
const walk = person.walk.bind(person) //arg -> this
walk() // -> person

const jobs = [
  {id:1, isActive: true},
  {id:2, isActive: true},
  {id:3, isActive: false}
]

jobs.filter((j) => j.isActive)

const p = {
  talk() {
    console.log('this', this)
  }
}

const {name: username} = person
console.log(username)

const f = [1,2,3]
const s = [4,5,6]
const comb = [...f,'mid',...s,'last']

const fo = {name:'rrr'}
const so = {job: 'penguin'}
const c = {...fo,...so,location:'Romania'}
const co = {...fo}

class Pet {

  constructor(name) {
    this.name = name
  }

  walk() {
    console.log(this)
  }
}

const p1 = new Pet

class Dog extends Pet{
  
  constructor(name, type) {
    super(name)
    this.type = type
  }

  bark() {
    console.log('woof')
  }
}

const pablo = new Dog('Pablo','Fighter')

//! DOM
const body = document.body
const div = document.createElement('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')
// div.append('yo')
// div.innerText="Hola"
// div.textContent="Hola2"
// body.append(div)

console.log(div.textContent) //also prints spacing and identation
console.log(div.innerText) //only visible text on the page


//div.innerHTML="<strong>strrr8</strong>" //!Can be insecure
const strong = document.createElement('strong') //!secure
strong.innerText = 'hola23'
body.append(strong)

spanBye.remove() //!perm delete
//.removeChild()
// console.log(spanHi.getAttribute('title'))
console.log('title', spanHi.title)
spanHi.setAttribute('title', 'holaaa')
console.log('newtitle', spanHi.title)
spanHi.removeAttribute('title')