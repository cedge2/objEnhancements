//Object Enhancements Exercise - refractor ES6 into ES2015


//Same keys and values:
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//Computed Property Names:
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;

const instructor = {
    fistName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object Methods
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  const instructor = {
    fistName: "Colt",
    sayHi(){
        return "HI!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
  }

  //createAnimal Function
  //write a funcition that generates an animal function
  //and accepts 3 arguments, species, verb, and noise. Use object enhancements.

  const d = createAnimal("dog", "bark", "Woooof!")
  //{species: "dog", bark: ƒ}
  
  d.bark() //"Woooof!"

  const s = createAnimal("sheep", "bleet", "BAAAaaa")
  //{species: "sheep", bleet: ƒ}
  s.bleet() //"BAAAaaa"

  function createAnimal(species, verb, noise) {
    return {
        [verb](){
            return noise;
        }
    }
  }