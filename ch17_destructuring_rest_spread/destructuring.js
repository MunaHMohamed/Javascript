/* Object */
let person = {
    firstName : "Ahmed",
    age : 40
}

console.log (person);
console.log (person .firstName);
console.log (person["age"]);

let {firstName,age} = person
console.log(firstName, age);

/* arrays */
let listOfStudents = ["Ahmed", "Mohamed", "Farah", "Fatima"]
console.log(listOfStudents[0] ,listOfStudents[1]);

let [firstPostion, secondPosition] = listOfStudents
console.log (firstPostion,secondPosition);

