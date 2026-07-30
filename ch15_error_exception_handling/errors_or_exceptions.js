/* compile time errors
run time errors
IDE - integrated development environment
exampl:
visual studio Code 
intelliJ IDEA 
sublime Text
atom 
Eclipse
Netbeans
PyCharm
android studio 
Webstorm  */

try {
   /*  open database connection
    let firstName = "Muna"
    console.log (firstName.toUpperCase())
    console.log ("hello")
    console.log("hello2") */
    let dbError = new Error ("could not connect to the database")
    throw dbError
}
catch (error) {
    /* console.log("You have an error in your code fix it , I will not crash") */
    console.log (error.message)
} finally {
    console.log ("This code will run regardless of error")
  /*   close database connection */
}

