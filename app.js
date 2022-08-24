// // ************************************    CHAPTERS 20-25   **************************************************************
// // ************************************    Question No 01 **************************************************************

// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name");
// var fullName = firstName + " " +lastName;
// document.write("Hello! "+fullName+" Welcome to our Website");


// // ************************************    Question No 02 **************************************************************
// var userPhone = prompt("Enter your favourite mobile model");
// var phoneLength = userPhone.length;
// document.write("My favorite Phone is : " + userPhone +"<br>"+"Length of string: "+phoneLength) 


// // ************************************    Question No 03 **************************************************************
// var nationality = "Pakistani";
// var find_Index = nationality.indexOf('n');
// document.write("String: "+nationality +"<br> Index of 'n' : "+ find_Index);


// // // ************************************    Question No 04 **************************************************************
// var lastFind = "Hello World";
// var last_Index = lastFind.lastIndexOf('l');
// document.write("String: "+lastFind +"<br> Index of 'l' : "+ last_Index);

// // // ************************************    Question No 05 **************************************************************
// var myCountry = "Pakistani";
// var find_Character = myCountry.charAt(3);
// document.write("String: "+myCountry +"<br> Charater at index '3'  : "+ find_Character);

// // // ************************************    Question No 06 **************************************************************
// var first_Name = prompt("Enter your first Name");
// var last_Name = prompt("Enter your last Name");
// var full_Name = first_Name.concat(last_Name);
// document.write("Hello! "+full_Name+" Welcome to our Website");


// // // // ************************************    Question No 07 **************************************************************
// var hyderCity = "Hyderabad";
// var afterReplacement = hyderCity.replace('Hyder','Islam')
// document.write("City: "+hyderCity+"<br>After Replacement: "+afterReplacement);

// // // // ************************************    Question No 08 **************************************************************
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace_and = message.replace(/and/g,"&");
// // Another Method
// // var replace_and = message.replaceAll("and","&")
// document.write("Before Replacement: "+message + '<br> After Replacement: '+replace_and)

// // // // ************************************    Question No 09 **************************************************************
// var strign = '472';
// var tonumber = parseFloat(strign);
// document.write("value: " + strign+"<br>Type: "+typeof(strign)+"<br>Value: "+tonumber+"<br>Type: " +typeof tonumber)

// // // // ************************************    Question No 10 **************************************************************
// var userToUpper = prompt("Enter a word to convert into Upper Case");
// var uppserCase = userToUpper.toUpperCase();
// document.write("User Input:  " + userToUpper +"<br>Upper Case: "+uppserCase)

// // // // ************************************    Question No 10 **************************************************************
var userToTitle = prompt("Enter a Sentence to convert into Capitalize Case");
var titleCase = userToTitle.split(' ');
var totitlecase =[];
for(var i=0; i<titleCase.length; i++){
    var a = titleCase[i];
    var b = a.charAt(0).toUpperCase();
    var c = a.replace(a.charAt(0),b)
    // second method (using slice)
    // var c = a.slice(1);
    // var d= b+c;
    // totitlecase.push(d);
    totitlecase.push(c);
}
var finaltitleCase = totitlecase.join(" ");
document.write(" <h1>User Input:  " + userToTitle +"<br>Title or Capitalize Case: "+ finaltitleCase +"</h1>")
// document.write("<br>"+totitlecase);
// document.write("<br> asdasda"+finaltitleCase +"</h1>");