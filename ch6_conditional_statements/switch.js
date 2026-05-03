let age = 14
 
  switch (true) {
    case (age >= 0 && age <= 4):
      console.log("Go to Nursery");
      break;

    case (age >= 5 && age <= 11):
      console.log("Go to Primary School");
      break;

    case (age >= 12 && age <= 18):
      console.log("Go to Secondary School / College");
      break;

    case (age >= 19):
      console.log("Go to University");
      break;

    default:
      console.log("Too young for school");
  }


// Example tests
schoolLevel(4);
schoolLevel(8);
schoolLevel(15);
schoolLevel(20);