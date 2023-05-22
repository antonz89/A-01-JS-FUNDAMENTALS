
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function sumFunc(num1,num2) {
  let sum_func = num1+num2
      let x_func = x
          return {sum: sum_func, x: x_func};
}
console.log("---#1--")
console.log(sumFunc(2,8));

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const sumArrow=(num1,num2)=>{
  let sum_func = num1+num2
      let x_func = x
      return {sum: sum_func, x: x_func};
}
console.log("---#2--")
console.log(sumArrow(2,5));
// 3. Write a function that returns another function. (use arrow functions please)
const func1=()=>{
  const func2=()=>{
      let x = "AAAA";
      return x
  }
  return func2();
}

console.log("---#3--")
console.log(func1());


// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};
console.log("---#4--")
console.log(getFunction()(2))
console.log("that's how scope works, const y and insideFunc live on the same floor and have an access to each other") 

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  try {
  
      if(Math.ceil(Math.random() * 2) < 2){
      throw new Error("Error was thrown");
  }
  } catch (e) {
      return "sorry, there was an error";
  }
  return 'success';
}

const func=(x)=>{
  console.log(x)
}

console.log("---#5--")
func(couldThrowError());


////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]
let finalData = new Array
  
userData.map((e)=>{
    let data = {
        id: e.id,
        favoriteFoods: e.favorites.food.length
    }
  finalData.push(data)
  })
  console.log("---#5--")
  console.log(finalData);


// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

let foodData = new Array
  
userData.reduce(((total,element)=>{
  return element.favorites.food.includes("pizza") ? foodData.push(element.name) : null
  
}),0)
console.log("---#6--")
console.log(foodData);

// 7. Show an an example of a switch statement being used
const switchFunc = (arr)=>{
  return arr.map ( e=>{
      switch (true){  //here is what case needs to equal to in order to return
          case e.name==="John":
              return 'ID: '+ e.id
          case e.name==="Peter":
              return 'ID: '+ e.id
          case e.name==="Mary":
              return 'ID: '+ e.id
          default:
              return e;
      }
  })
}
console.log("---#7--")
console.log(switchFunc(userData));

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

let userObj = {
  ...userPersonalData,
  ...userGameData
}


console.log("---#8--")
console.log(userObj);


// 9. Make a copy of your new user object but override the birthday to december 31st
let userCopy = {
  ...userObj,
  birthday: "Dec 31"
}

console.log("---#9--")
console.log(userCopy)
 

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

let xxx = [...userGameData.accomplishments]

console.log("---#10--")
console.log(xxx)




//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };

let foood = [...user.favoriteThings.food]

console.log("---#11--")
console.log(foood)

 
// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //
const destructuredFood = (arr)=>{
  let x = new Array
  for (let index = 0; index < 2; index++) {
    x.push(arr[index])
  }
  return x 
} 

console.log("---#12--")
console.log(destructuredFood(foood))

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

let name,age,food;
[name,age,...food]=data

console.log("---#13--")
console.log(name, age,food)



// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};
let userName, favoriteFood,favoriteThing,secondfavoriteThing;
[userName,favoriteFood,[favoriteThing,secondfavoriteThing]] = [userInfo.name, userInfo.favorites.needs.food, ...[userInfo.favorites.wants.things,userInfo.favorites.wants.things] ]

console.log("---#14--")
console.log(userName, favoriteFood,favoriteThing,secondfavoriteThing )






var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000)
}).then(resolve => console.log(resolve));;




// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000)
}).then(resolve => console.log(resolve));;

console.log("---#15--")
console.log(fetchData() )

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////