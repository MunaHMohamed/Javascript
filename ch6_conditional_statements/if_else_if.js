let age = 40;

  if (age >= 0 && age <= 4) {
    console.log("Go to Nursery");
  } 
  else if (age >= 5 && age <= 11) {
    console.log("Go to Primary School");
  } 
  else if (age >= 12 && age <= 18) {
    console.log("Go to Secondary School / College");
  } 
  else if (age >= 19) {
    console.log("Go to University");
  } 
  else {
    console.log("Too young for school");
  }

// Example tests
schoolLevel(4);
schoolLevel(8);
schoolLevel(15);
schoolLevel(20);