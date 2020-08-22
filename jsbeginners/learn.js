//var MyGlobal = {};


// ini adalah operator boolean 
// boolean value nya true atau false 
// ==
// !=  NOT 
// < <=
// > >=
// && AND
// ||


if () {
	console.log("bener");
}
else {
    console.log("salah");
}




// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  // typeof fungsinya untuk mengetahui tipe dari suatu variable 
  var typeMyGlobal = typeof myGlobal;// "number"
  var typeOopsGlobal = typeof oopsGlobal; // "number" 


  // typeMyGlobalnya "number" tidak sama dengan maka "undifined" hasilnya benar 
  if (typeMyGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }

  if (typeOopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }

  console.log(output);
}

if ("number" === "number") {

}


fun1();
fun2();


// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
    // outerWear Variable lebih diutamakan dari variable global karena variable ini di dalem lokal
    var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();