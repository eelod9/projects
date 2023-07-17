//https://jsonplaceholder.typicode.com/comments/1
ReactDOM.render(<ul><li>Thing 1</li><li>Thing 2</li></ul>,document.getElementById("root"))


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
console.log(dog.metaData)