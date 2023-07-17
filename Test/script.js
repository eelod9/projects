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
let myBirthday = new person("Ella", new Date(1992,3,9));



//var mydate = new Date(1992,8,9);
//console.log(mydate.toDateString());
//console.log(myBirthday)
let dj = new person("DJ",new Date(1994,9,18));
let clara = new person("Clara",new Date(1966,6,20));
let bdayArray = [myBirthday,dj,clara]
//let age = getAge(myBirthday);


function show(){
    let showBtn = document.getElementById("result-age")
    showBtn.textContent = ""
    for(var i = 0; i <bdayArray.length;i++){
        let user = bdayArray[i];
        let line = user.name + " ⚡ " + getAge(user.birthday);
        showBtn.innerHTML += ('<li>' + line + '</li>'); //+"\n" + "DJ => " + getAge(dj) +"\n" + "Clara => " + getAge(clara) 
    }
}