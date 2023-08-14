//https://jsonplaceholder.typicode.com/comments/1
//ReactDOM.render(<ul><li>Thing 1</li><li>Thing 2</li></ul>,document.getElementById("root"))


const player = {
  name: 'Donald Duck',
  club: 'English club',
  favs: {
    city: 'Los Angeles',
  },
};

let names = ['Beauty', 'and the', 'Beast']
console.log(names)
const {name, club, favs:{city}} = player;
console.log(`${name} is in ${club} and lives in ${city}`)


//spread operator [...contact]
let contact = ['a','b', 'c'];
let cool = [...contact, "Lily"];
contact.push("John");
console.log(cool)

let character = {
    ...player,
    salary: 40000
}
console.log(character)

//constructor

class Animal{
    constructor(type,legs){
        this.type = type;
        this.legs = legs;
        
    }
    
    makeNoise(sound = 'Loud Noise'){
        console.log(sound);
    }
    get metaData(){
        return `Type: ${this.type}  `
    }


    static return10(){
        return 10;
    }
}

class Dog extends Animal{
    makeNoise(sound = "woof"){
        console.log(sound);
    }

}
let cat = new Animal('cat',4);
console.log(cat.metaData)
let dog = new Dog('Dog',4);
console.log(dog.metaData);

function getAge(date) {
    console.log(date.toDateString())
    var birthDate = date;
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    var day = 0
    let currentDate = new Date(today.getFullYear(), today.getMonth(),today.getDate());
    const oneDay = 1000 * 60 * 60 * 24;
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;  
       
       
            let temp = new Date(today.getFullYear(),birthDate.getMonth(),birthDate.getDate());
           
            console.log(temp)
           let diff =  temp.getTime()-currentDate.getTime();
           // One day in milliseconds
           
           let diffInDays = Math.round(diff/oneDay);
            console.log(`${diffInDays} days`)
           // console.log(`${m *-1} months and ${day} days left till Birthday`)
            
      
    }
    else{
        let temp = new Date(today.getFullYear()+1,birthDate.getMonth(),birthDate.getDate());
        let diff =  temp.getTime()-currentDate.getTime();
        let diffInDays = Math.round(diff/oneDay);
        console.log(`Already passed. ${diffInDays} days until next year ${today.getFullYear()+1}`)
    }
    console.log(age)
    var word = `${birthDate} and ${today.getFullYear()}-${birthDate.getMonth()+1}-${birthDate.getDate()}`
    console.log(word)
    //var testDate = new Date(`$`)
    //console.log(today.getFullYear())
    return age;
}
class person {
    constructor(name,birthday){
        this.name = name;
        this.birthday = birthday;
        
    }
}


let today = new Date();
let myBirthday = new person("Ella", new Date(1992,8,9));



//var mydate = new Date(1992,8,9);
//console.log(mydate.toDateString());
//console.log(myBirthday)
let dj = new person("DJ",new Date(1994,9,18));
let clara = new person("Clara",new Date(1966,6,20));
let bdayArray = [myBirthday,dj,clara]
//let age = getAge(myBirthday);

let showBtn = document.getElementById("show-btn");
let resultAge = document.getElementById("result-age");

function show(){
   if(showBtn.textContent != "HIDE") {
         resultAge.textContent = "";
        for(var i = 0; i <bdayArray.length;i++){
            let user = bdayArray[i];
            let line = user.name + " ⚡ " + getAge(user.birthday);
            resultAge.innerHTML += ('<li>' + line + '</li>'); //+"\n" + "DJ => " + getAge(dj) +"\n" + "Clara => " + getAge(clara) 
        }
        showBtn.textContent = "HIDE";
        showBtn.style.background = "#40E0D0"
    }
    else{
        hide();
       
    }
}
function hide(){
    resultAge.textContent = "";
    showBtn.textContent ="SHOW"
    showBtn.style.background = "#e251ff"
    
}


//Black Jack functions

let player1 = {
    name: "Per",
    chips: 145
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player1.name + ": $" + player1.chips;
function getRandom(){
    // Returns a random integer from 1 to 11:
    let min = 1
    let max = 13
    let num = Math.floor(Math.random() * (max - min + 1) + min)
    if (num === 1){
        return 11;
    }else if(num > 10){
        return 10;
    } else
    {
        return num;
    }
}
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el");
let sumEl    = document.getElementById("sum-el");

let card =[];
let sum = 0;
let started = false

function startGame(){
    card =[];
    cardsEl.textContent = "Cards: ";
    let firstCard = getRandom();
    let secondCard = getRandom();
    card.push(firstCard);
    card.push(secondCard);
    checkGame();
    started = true;

}
function checkGame(){
    cardsEl.textContent = "Cards:";
    sum =0;
    for (let i in card){
        cardsEl.textContent += card[i] + " ";
        sum += card[i]
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum === 21){
        messageEl.textContent = "You won!!"
        started = false;
    }else if (sum >21){
        messageEl.textContent = "Bust -_- You lose"
        started = false;


    }else{
        messageEl.textContent = "Do you want to pick new card?"
    }
}

function newCard(){
    if(started === false){
        messageEl.textContent = "Starting new game"
        startGame();
    }else{
    let newCard = getRandom();
    card.push(newCard);
    checkGame();
    }
}