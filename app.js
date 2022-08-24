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

// // // // ************************************    Question No 11 **************************************************************
// var userToTitle = prompt("Enter a Sentence to convert into Capitalize Case");
// var titleCase = userToTitle.split(' ');
// var totitlecase =[];
// for(var i=0; i<titleCase.length; i++){
//     var a = titleCase[i];
//     var b = a.charAt(0).toUpperCase();
//     var c = a.replace(a.charAt(0),b)
//     // second method (using slice)
//     // var c = a.slice(1);
//     // var d= b+c;
//     // totitlecase.push(d);
//     totitlecase.push(c);
// }
// var finaltitleCase = totitlecase.join(" ");
// document.write(" <h1>User Input:  " + userToTitle +"<br>Title or Capitalize Case: "+ finaltitleCase +"</h1>")

// // // // // ************************************    Question No 12 **************************************************************
// var num = 35.36 ;
// var numtostring = num.toString();
// var a =numtostring.replaceAll('.','');
// var b = Number(a);
// document.write("<h1>Number: "+ num +"<br> Result: "+ b)

// // // // ************************************    Question No 13 **************************************************************
// var userinput_name = prompt("Enter a username for checking ") ;
// // var a = userinput_name.charCodeAt(2)
// // document.write("<h1> character at : "+ typeof a)
// var match = false;
// for(var i=0; i<userinput_name.length; i++){
//     var check = userinput_name.charCodeAt(i);
//     if(check===33 || check===44 || check===46 || check===64){
//         match=true;
//     }
// }
// if(match){
//     alert("Please enter a valid username");
// }else{alert("Username correct!")}

// // // // ************************************    Question No 14 **************************************************************
// var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userCheck = prompt("Enter good for searching ").toLowerCase();
// for(var i=0; i<bakery.length; i++){
//     if(userCheck == bakery[i]){
//         document.write("<h1> "+ userCheck + " is <strong style='color:blue;'>available</strong> at index  "+ i + " in our bakery.</h1>")
//         break;
//     }else{if(i+1==bakery.length){
//         document.write("<h1>We are sorry. "+ userCheck + " is <strong style='color:blue;'>not available</strong> in our bakery.</h1>")
//     }}
// }

// // // // ************************************    Question No 15 **************************************************************
var userpassword = prompt("Enter your password.");
var matchP = true;
for(var i=0; i<userpassword.length; i++){
    var ifnumber = userpassword.charCodeAt(0);
    var numberCheck = userpassword.charCodeAt(i);
    if(ifnumber>=48 && ifnumber <=57){
        matchP = false;
        document.write("<h1> Entered password: "+ userpassword
        + "<br> Password can not begin with a number"
        +" <br> Please enter a valid password</h1>"
        )
        break;
    };
    if(userpassword.length < 7){
        matchP = false;
        document.write(
        "<h1> Entered password: "+ userpassword
        + "<br> Password at least 6 characters long."
        +" <br> Please enter a valid password</h1>"
        )
        break;
    }else if((numberCheck<48 && numberCheck >= 0) || (numberCheck>57 && numberCheck <65) || (numberCheck>91 && numberCheck <96) || (numberCheck>122 && numberCheck<128)){
        matchP = false;
        document.write(
            "<h1> Entered password: "+ userpassword
            + "<br> <br> Note:-"
            + "<br> 1) Password should contain only numbers and alphabets."
            +" <br> 2) Don't use space between characters."
            +" <br> 2) characters use among 0-9 or a-z or A-Z "
            +" <br> 3) Please enter a valid password</h1>"
            )
        break;
    }
    else if(numberCheck>=48 && numberCheck <=57 && numberCheck>=65 && numberCheck <=90 && numberCheck>=97 && numberCheck <=122){
        matchP = true;
    }
}
if(matchP){
    document.write(
        "<h1> Entered password: "+ userpassword
        + "<br> Your Password is match our requirements."
        +" <br> Your can go and enter our website.</h1>"
        )
}