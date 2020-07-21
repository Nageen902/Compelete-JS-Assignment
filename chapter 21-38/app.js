
//chapter 21-25
// task 1
function answer1(){
    var first = prompt("Enter Your Firts Name");
    var last =prompt("Enter Your Last Name")
    var fullName = first + " " + last
    document.write("<h1><center>Hello<br> Welcome to my App : "  + fullName + "</h1>");
   }
//chapter 21-25
// task 2
function answer2(){
    var txt=prompt("Enter your favorite mobile here");
    document.write("<h1>My favorite phone is : " + txt + "<br>");
    document.write("<h1>Length of string " + txt.length);
}
//chapter 21-25
// task 3
function answer3(){
    var str = "Pakistani"
    var n = str.indexOf("n");
    document.write("<h1><center>String : " + str + "<br>");
    document.write("Index of 'n' : " + n);
}
//chapter 21-25
// task 4
function answer4(){
    var str = "Hello World"
    var n = str.lastIndexOf("l");
    document.write("<h1><center>String : " + str + "<br>");
    document.write("Index of 'l' : " + n);
}
//chapter 21-25
// task 5
function answer5() {
    var str = "Pakistani";
    var res = str.charAt(3);
    document.write("<h1><center>String : " + str + "<br>");
    document.write("Character of Index 3 : " + res);
}
//chapter 21-25
// task 6
function answer6() {
    var str1 = prompt("Enter Your Firts Name");;
    var str2 = prompt("Enter Your Last Name");
    var res = str1.concat(str2);
    document.write("<center><h1>Welcome " + res);
  }
//chapter 21-25
// task 7
function answer7() {
    var str = "Hyderabad" 
    var res = str.replace("Hyder" , "Islam");{
    }
    document.write("<h1><center>City : " + str + "<br>");
    document.write("After Replacement : " + res);
}
//chapter 21-25
// task 8
function answer8() {
    var str = "Ali and Sami are best friends. They play cricket and football together."; 
    var res = str.replace(/and/g, "&");{
    }
    document.write("<h1><center>City : " + str + "<br>");
    document.write("After Replacement : " + res);
}
//chapter 21-25
// task 9
function answer9(){
    var x = 472;
    document.write("<center> <h1> Value : " + x + "<br>");
    document.write("Type : " + typeof "Value" + "<br>");
    document.write("Value : " + x.toString() + "<br>");
    document.write("Type : " + typeof 472 + "<br>");
}
//chapter 21-25
// task 10
function answer10() {
    var str = prompt("Enter your value");
    var res = str.toUpperCase();
    document.write("<center> <h1> User Input : " + str + "<br>");
    document.write("Upper Case : " + res);
}
//chapter 21-25
// task 11
function answer11() {
    var str = prompt("Enter your value");
    var res = str.toUpperCase();
    document.write("<center> <h1> User Input : " + str + "<br>");
    document.write("Tittle Case : " + res);
}
//chapter 21-25
// task 12
function answer12() {
    var str = "35.36";   
    var res = str.replace(/\./g, ""); 
    document.write("<center><h1>Number : " + str); 
    document.write("<br>Result : " + res); 
}
//chapter 21-25
// task 17
function answer13() {
    var str = "Pakistan"; 
    var res = str.charAt(str.length-1);          
    document.write("<center><h1>User Input : " + str + "<br>");
    document.write("Last character of input : " + res);
} 
//chapter 21-25
// task 18
function answer14() {
    function countOccurences(string, word) {
        return string.split(word).length - 1;
     }
     var text="the quick brown fox jumps over the lazy dog"; 
     var count=countOccurences(text,"the");
     document.write("<center><h1>Text : " + text + "<br>");
     document.write("There are " + count + " occurence(s) of the word 'the'");
}
//chapter 26-30
// task 1
function answer15() {
  var Number = prompt();
  var x = (Math.round(Number));
  var y = (Math.floor(Number));
  var z = (Math.ceil(Number));
  document.write("<center><h1>Number: " + Number + "<br>");
  document.write("Round off value: " + x + "<br>");
  document.write("floor value: " + y + "<br>");
  document.write("Ceil value: " + z + "<br>");
}
//chapter 26-30
// task 2
function answer16() {
    var Number = prompt();
    var x = (Math.round(Number));
    var y = (Math.floor(Number));
    var z = (Math.ceil(Number));
    document.write("<center><h1>Number: " + Number + "<br>");
    document.write("Round off value: " + x + "<br>");
    document.write("floor value: " + y + "<br>");
    document.write("Ceil value: " + z + "<br>");
}
//chapter 26-30
// task 3
function answer17() {
    var Number = prompt();
    var x = (Math.abs(Number));
    document.write("<center><h1>Number: " + Number + "<br>");
    document.write("The Absolute value of" + Number + " is :"  + x + "<br>");
}
//chapter 26-30
// task 4
function answer18() {
    var diceRoll = Math.floor( Math.random() * 6 ) +1;
    alert("random Dice Value : " + diceRoll);
}
//chapter 26-30
// task 5
function answer19() {
    var heads = 0;
    var tails = 0;
        x = (Math.floor(Math.random() * 2) == 0);
        if(x){
            flip("heads");
        }else{
            flip("tails");
        }
    function flip(coin) {
        alert("Random Coin value : " + coin);
    };
}
//chapter 26-30
// task 6
function answer20() {
 var x = Math.floor((Math.random() * 100) + 1);
 alert ("Random Number Between 1 to 100 : " + x);
}
//chapter 26-30
// task 8
function answer21() {
    var p = prompt();
    var y = Math.floor(Math.random() * 10 + 1); 
      

    var guess = 1; 
   if(p == y)
   {     
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS "); 
   } 
   else if(p > y)
   {     
       alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
   } 
   else
   { 
       alert("OOPS SORRY!! TRY A GREATER NUMBER") 
   } 
} 
//chapter 31-34
// task 1
function answer22() {
    var d = new Date();
    document.write("<cente><h1>:"+d);
}
//chapter 31-34
// task 2
function answer23() {
    var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  document.write("<center><h1>Current Month : " + n);
}
//chapter 31-34
// task 3
function answer24() {
    var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Monday";
  weekday[1] = "Tuesday";
  weekday[2] = "Wednesday";
  weekday[3] = "Thursday";
  weekday[4] = "Friday";
  weekday[5] = "Saturday";
  weekday[6] = "Sunday";

  var n = weekday[d.getDay()];
  document.write("<center><h1>Today is : " + n);
}
//chapter 31-34
// task 4
function answer25() {
    var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Monday";
  weekday[1] = "Tuesday";
  weekday[2] = "Wednesday";
  weekday[3] = "Thursday";
  weekday[4] = "Friday";
  weekday[5] = "Saturday";
  weekday[6] = "Sunday";
  var n = weekday[d.getDay()];
  if (n === "Saturday") {
    document.write("<h2><center>It's a Fun Day</h2>");
  } 
  else if (n === "Sunday"){
    document.writeln("<h2><center>It's a Fun Day</h2>");
  }
  document.write("<center><h1>Today is : " + n);
}
//chapter 31-34
// task 5
function answer26() {
    var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2020,0,31);

if (someday > today) {
  text = "first fiftten Day Of The Month";
} else if(someday < today){
  text = "last Fifteen Day of The Month";
}
document.write("<center><h1>" + text);
}
//chapter 31-34
// task 7
function answer27() {
  var myDate = new Date();
  var hrs = myDate.getHours();
  if (hrs >=12){
      alert("Its AM");
  }
  else if (hrs <= 12){
       alert("Its PM");
  }
}
//chapter 31-34
// task 8
function answer28() {
    var d = new Date(2020,11,31);
    document.write("<cente><h1>Later Date :"+d);
}
//chapter 31-34
// task 11
function answer29() {
    var d = new Date(2015,11,5)
    d.setHours(23,08,16);
    var e = new Date(2015,11,5)
    e.setHours(22,08,16);
    document.write("<cente><h1>Current Date :"+d + "<BR>");
    document.write("1 hour ago : " + "it was " +e);
}
//chapter 31-34
// task 12
function answer30() {
    var d = new Date(2015,11,5)
    d.setHours(23,09,37);
    var e = new Date(1915,11,5)
    e.setHours(23,09,37);
    document.write("<cente><h1>Current Date :"+d + "<BR>");
    document.write("100 Years Back : " + "it was " +e);
}
//chapter 31-34
// task 12
function answer30() {
    var d = new Date(2015,11,5)
    d.setHours(23,09,37);
    var e = new Date(1915,11,5)
    e.setHours(23,09,37);
    document.write("<cente><h1>Current Date :"+d + "<BR>");
    document.write("100 Years Back : " + "it was " +e);
}
//chapter 31-34
// task 14
function answer31() {
    var tittle = ("K-Electric Bill");
    var customername = ("Abdul Rasheed");
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
  
    var d = new Date();
    var n = month[d.getMonth()];
    var num = (410);
    var charges = (16);
    var netamount = (num*charges);
    var late = (350);
    var gross = (netamount+late);

    document.write("<h1>" + tittle + "<br></h1>");
    document.write("<justify><h2>Customer name : " + customername + "<br>");
    document.write("Current Month : " + n + "<br>");
    document.write("Number of Unit : " + num + "<br>");
    document.write("Charges per unit : " + charges + "<br><br><br>");
    document.write(" Net Amount Payable (within Due Date) : " + netamount + "<br>");
    document.write("Late Payment Surcharge : " + late + "<br>");
    document.write(" Gross Amount Payable (after Due Date) : " + gross + "<br>");
}
//chapter 31-34
// task 6
function answer32() {
    var d = new Date();
    var n = d.getTime();
    var minutesconvert = n/(1000*60*60);
   
  
    document.write("<cente><h1>Current Date :"+ d + "<BR>");
    
    document.write("Elapsed millisecond since Juanary 1, 1970 :"+ n + "<BR>");

    document.write("Elapsed millisecond since Juanary 1, 1970 :"+ minutesconvert + "<BR>");
}
//chapter 31-34
// task 9
function answer36(){
    function days_passed(dt) {
        var oneday = 24 * 60 * 60 * 1000;
        var current = new Date(2020,4,23);
        var previous = new Date(2015,6,18);
        return Math.ceil((current - previous) / oneday);
    } 
    alert(days_passed() +" "+ "Day Passedsince 1st Ramadan 2015")
    console.log(days_passed(new Date(2015,11,14)));
}
//chapter 31-34
// task 10
function answer33() {
    var y =new Date("dec 31 2014");
    var L = new Date ("Dec 5 2015" );
    var i = L.getTime();
    var P = y.getTime();
    var w = i - P;
    var d = w/(1000*60)
    var n = d;
    document.write("<h2>On reference date " + L + "<br>");
    document.write(n + " Second had been passed since beginning of 2015");
}
//chapter 31-34
// task 10
function answer37(){
    function get_birthyear(age){
        var getYear = new Date().getFullYear() - age;
        return getYear;
    }
    var age = +prompt("type your age");
    alert("Your birth Year Is : " + get_birthyear(age));
}
//chapter 35-38
// task 1
function answer34(){
    var d = new Date();
    document.write("<h1>" + d);
}
//chapter 35-38
// task 1
function answer35(){
    var firstname=prompt();
    var lastname=prompt();
    document.write("<h1><center> welcome <br> I hope today is good day for you" + "<br>" + firstname + "" + lastname);
}
//chapter 35-38
// task 3
//function calc(num1,opr,num2){
// if (opr === "+"){
// return num1 + num2
// }
// else if (opr === "-"){
//    return num1 - num2
//    }
//    else if (opr === "*"){
//        return num1 * num2
//    }
//    else if (opr === "/"){
//        return num1 / num2
//    }else{
//        return "Incorrect Operator"
//   }
//}
//var Result = calc(5, "-" ,10);
//var Result1 = calc(10,"+",10);
//var Result2 = calc(6,"*",3);
//console.log(Result);
//console.log(Result1);
//console.log(Result2);

//chapter 35-38
// task 13
// function char_count(str, letter) 
// {
// var letter_Count = 0;
// for (var position = 0; position < str.length; position++) 
// {
//    if (str.charAt(position) == letter) 
//      {
//      letter_Count += 1;
//      }
//  }
//  return letter_Count;
// }

// console.log(char_count( 'JSResourceS.com', 'o'));

//chapter 35-38
// task 12
// function find_longest_word(str)
//{
//  var array1 = str.match(/\w[a-z]{0,}/gi);
//  var result = array1[0];

//  for(var x = 1 ; x < array1.length ; x++)
//  {
//    if(result.length < array1[x].length)
//    {
//    result = array1[x];
//    } 
//  }
//  return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

//chapter 35-38
// task 11

//function uppercase(str)
//{
//  var array1 = str.split(' ');
//  var newarray1 = [];
    
//  for(var x = 0; x < array1.length; x++){
//      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//  }
//  return newarray1.join(' ');
//}
//console.log(uppercase("the quick brown fox"));

//chapter 35-38
// task 10

// Write a JavaScript function that checks whether a passed string is palindrome or not? 
//function check_Palindrome(str_entry){
//     var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//        var ccount = 0;
//       if(cstr==="") {
//            console.log("Nothing found!");
//            return false;
//        }
//        if ((cstr.length) % 2 === 0) {
//            ccount = (cstr.length) / 2;
//        } else {
// 
//            if (cstr.length === 1) {
//                console.log("Entry is a palindrome.");
//                return true;
//            } else {
//                ccount = (cstr.length - 1) / 2;
//            }
//        }
//        for (var x = 0; x < ccount; x++) {
//    
//            if (cstr[x] != cstr.slice(-1-x)[0]) {
//                console.log("Entry is not a palindrome.");
//                return false;
//            }
//        }
//        console.log("The entry is a palindrome.");
//       return true;
//    }
//    check_Palindrome('madam');
//    check_Palindrome('nurses run');
//   check_Palindrome('fox');

//chapter 35-38
// task 3
//function myFunction(num1, sign , num2){
//    var num1=prompt("Enter your first value");
//    var sign=prompt("Enter yor operator");
//    var num2= prompt("Enter your second value");
//    
//    if (sign === "+"){
//        return ((+num1)+(+num2));
//    }
//    else if (sign === "-"){
//       return (num1-num2);
//    }
//    else if (sign === "/"){
//       return (num1/num2);
//    }
//    else if (sign === "*"){
//       return (num1*num2);
//    }
//  }
//  console.log(myFunction());
 
//chapter 35-38
// task 6
//function factorial(n){
//    let answer = 1;
//    if (n == 0 || n == 1){
//      return answer;
//    }else{
//      for(var i = n; i >= 1; i--){
//        answer = answer * i;
//      }
//      return answer;
//    }  
//  }
//  let n = prompt();
//  answer = factorial(n)
//  console.log("The factorial of " + n + " is " + answer);

//chapter 35-38
// task 14
//function calcCircumfrence(radius) {
//    var y = (Math.PI * radius) * 2;
//  console.log("The circumfrence is " + y + ".");
//  }
//  function calcArea(radius) {
//    var x = (Math.PI * radius) * radius;
//  console.log("The area is " + x + ".");
//  }
//  calcCircumfrence(30);
//  calcArea(10);

//chapter 35-38
// task 9
//function area(width,height){
//    var y = width * height
//console.log("The area of your rectangle is " + y);
//}
//area(45,60);

//chapter 35-38
// task 9
//function squares() {
//    var a = Math.sqrt(9);
//    var b = Math.sqrt(64);
//    var c = Math.sqrt(8);
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }

//chapter 35-38
// task 7
// var num = 0
// var counter = 0;
// function add() {
//  counter += 1;
// }
//add();
//add();
//add();
//add();
//add();
//add();
//add();
//add();
//console.log(num);
//console.log("The counter is: " + counter);

//chapter 35-38
// task 8

function answer38(){
    function calchypotenus(base , per){
        alert(Math.sqrt(base*base + per*per));
        function calcsquare()
        {
            alert("Base square : " + " " + (base*base)+" "+ "Perpendicular Square :" + (per*per));
        }
        calcsquare();
    }
    var base = +prompt("Enter base number");
    var per = +prompt("Enter perpendicular number");
    calchypotenus(base , per);
}