function answer1(){
    alert("Welcome to my webpage");
}
function answer2(){
    document.write("<h2>Error!please enter a valid password.</h2>");
}
function answer3(){
    alert("welcome to my page \n Error!please enter a valid password.");
}
function answer4(){
    alert("welcome to my page");
    alert("Error!please enter a valid password.");
}
function answer5(){
    var a=50;
    var b=20;
    var c=a+b;
    console.log(c);
}
function answer8(){
 var username =("Nageen");
 alert(username);
}
function answer9(){
    var MyName=alert("Nageen");
    var first = prompt("Enter Your Firts Name");
    var last =prompt("Enter Your Last Name")
    var fullName = first + " " + last
    alert ("Your full name is"  + fullName);
   }
function answer10(){
    var Message="Hello World";
    alert (Message);
    }
function answer11(){
    var name="Nageen";
    var age="23 year";
    var study="Master in commerce";
    alert (name);
    alert (age);
    alert (study);
}
function answer12(){
    var Email=("Anbiashaikh321@gmail.com");
    alert ("My Email Address is"  +   Email);
}
function answer13(){
    var book=("A smarter way to learn JavaScript.");
    alert (book);
}
function answer14(){
    document.write("Yah! I can write content through javascript");
}
function answer15(){
    var char=("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
    alert (char);
}
function answer16(){
    var Message=(" PIIZA \n PIZZ \n PIZ \n PI \n P");
    alert (Message);
}
function answer17(){
    var age=("23 years old");
    alert ("I am" + age);
}
function answer18(){
    var birthyear=("1996");
    var Message=("Data type of my decleard variable is number");
    document.write("<h2>My birth year is" + birthyear);
}
function answer19(){
    var visitorname=("Name : Toba Fatima");
    var ordered=("Ordered : One Apple Laptop");
    var tittle=("Ali Express Co");
    document.writeln(visitorname  + ordered + tittle);

}
function answer20(){
    var visit=("10 times");
    alert ("You have visited this site" + visit);
}
function answerch3(){
    var n = localStorage.getItem('on_load_counter');

if (n === null) {
  n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);

nums = n.toString().split('').map(Number);
document.getElementById('CounterVisitor').innerHTML = '';
for (var i of nums) {
  document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item">' + i + '</span>';
  alert("You have visited this site " + n +  " times");
}

}
function answer21(){
var person = "Nageen",
    carName = "Suzuki",
    price = 9000000; 
    alert (person  + carName + price);
}
function answer22(){
    var message=("a) A heading stating Rules for naming JS variables <br> b) Variable names can only contain ______ ______ ______ and ____ For example $my_1stVariable <br> c) Variables must begin with a ______ ______ or _____. For example $name _name or name <br> d) Variable names are case ________ <br> e) Variable names should not be JS ________");
    document.writeln(message);
}
function answer23(){
    var a=23;
    var b=45;
    var c=a+b;
    document.write("<h2> Sum of 23 and 45 is" + c )
}
function answer24(){
    var a=23;
    var b=45;
    var c=a*b;
    document.write("<h2> Sum of 23 and 45 is" + c )
}
function answer25(){
    var a=23;
    var b=45;
    var c=a-b;
    document.write("<h2> Sum of 23 and 45 is" + c )
}
function answer26(){
    var a=23;
    var b=45;
    var c=a/b;
    document.write("<h2> Sum of 23 and 45 is" + c )
}
function answer27(){
    var a=23;
    var b=45;
    var c=a%b;
    document.write("<h2> Sum of 23 and 45 is" + c )
}
function answer28(){
    var x;
    if (typeof x === "undefined"){
        Text = "Value after variable decleartion is undefined";
    } 
    else {
        Text = "x is defined";
    }
    document.write(Text);
}
function answer29(){
    var x=5;
    if (typeof x === "5"){
        Text = "x is undefined";
    } 
    else {
        Text = "Initial value: 5";
    }
    document.write(Text);
}
function answer30(){
    var x=5;
        x++;
    var z=x;  
    document.write("<h2>Value after increment is : " + z);
}
function answer31(){
    var x=5;
        x++ + ++x + x++ + ++x + x++ + ++x + x++ + ++x;
    var z=x;  
    document.write("<h2>Value after increment is : " + z);
}
function answer32(){
    var x=5;
    x++ + ++x + x++ + ++x + x++ + ++x + x++ + ++x;
    x--;
    var z=x;  
document.write("<h2>Value after decrement is : " + z);
}
function answer33(){
var x = 12;
var y = 3;
var z = x % y;
document.write("<h2>The remainder is : " + z);
}
function answer34(){
    var a="600";
    var b=5;
    var c=a*b;
    document.write("<h2>total Cost to buy 5 tickets to a movie is : " + c + "PKR");
}
function answer35(){
var inputCelsius  = 25;
var outputFahrenheit = ("inputCelsius * 9")/5 + 32;
document.write(inputCelsius + "\u00B0 C is " + outputFahrenheit + "\u00B0 F");
}
function answer36(){
var inputFahrenheit  = 73;
var outputCelsius = ("inputFahrenheit - 32")/9 * 5;
document.write(inputFahrenheit + "\u00B0 F is " + outputCelsius + "\u00B0 C");
}
function answer37(){
    var heading=("<h1>Shopping Cart");
    var message=(" <h2> a) Price of item 1 : 650 <br> b) Ordered quantity of item 1 : 3 <br> c) Price of item 2 : 100 <br> d) Ordered Quantity of item 2 : 7 <br> e) Shipping charges : 100")
    var a=650;
    var b=3;
    var c=100;
    var d=7;
    var e=100;
    var f=a*b+c*d+e;
    document.write(heading);
    document.write(message);
    document.write("<br> <h2> total cost of Your order is : " + f);
}
function answer38(){
    var heading=("<h2>Table of 20");
  for (var i = 1; i <= 10; i++){
    document.write("20" + "x" + i + "=" + 20*i + "</br>" );
}
}
function answer39(){
    var tittle=("<h2>Marks Sheet</h2>");
    var totalMarks=980;
    var MarksObtained=804;
    var percentage=(totalMarks/MarksObtained)*100;
    document.write(tittle + "<br>" );
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + MarksObtained  + "<br>");
    document.write("Percentage : " + percentage + "%");
}
function answer40(){
    var a=5;
    var b=10;
    var f=5*10;
    var g=f/2;
    document.write("Add : " + a + "<br>");
    document.write("Multipply by : " + b + "<br>");
    document.write("Answer : " + f + "<br>");
    document.write("Divide the Reult by 2 : " + g);
}
function answer41(){
    var heading=("<h2>Calculate age</h2>");
var CurrentYear = 2020;
var BirthYear  = 1996;
var age  = CurrentYear - BirthYear;
document.write(heading + "<br>");
document.write("Current Year : " + CurrentYear + "<br>");
document.write("Bith Year : " + BirthYear + "<br>");
 document.write("Your Age is : " + age );
} 
function answer42(){
var tittle=("<h1>The Geometrizer</h1>");
var radius = 20;
var circumference = Math.PI * 2*radius;
document.write(tittle + "<br>");
document.write("Raduis of circle is : " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
var area = Math.PI * radius*radius;
document.write("The area is " + area);
}
function answer43(){
    var favourite="Wavy";
    var age = 24;
var maxAge = 100;
var numPerDay = 2;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = " You will need " + totalNeeded + " cups of tea to last you until the ripe old age of " + maxAge;
document.write("Favourite Snake : " + favourite + "<br>");
document.write("Current age : " + age + "<br>");
document.write("Estamated maximum age : " + maxAge + "<br>");
document.write("Amount of snake per day : " + numPerDay + "<br>");
document.write(message);
}
function answer44(){
    var tittle=("<h2>Result :</h2>")
    var message1="10";
    var a=10;
        ++a;
    var b=a; 
    var c=11;
        ++c; 
    var d=c; 
    var e=12;
        --e; 
    var f=e;
    var message=11;
    var g=12;
        g-- - --g; 
    var h=g;
    document.write(tittle + "<br>")
    document.write("The value of a is : " + message1 + "<br>");
    document.write("-------------------------" + "<br>");
    document.write("The Value of ++a is : " + b + "<br>")
    document.write("Now the value of a is : " + b + "<br>");
    document.write("-------------------------" + "<br>");
    document.write("The Value of a++ is : " + b + "<br>")
    document.write("Now the value of a is : " + c + "<br>");
    document.write("-------------------------" + "<br>");
    document.write("The Value of --a is : " + e + "<br>")
    document.write("Now the value of a is : " + f + "<br>");
    document.write("-------------------------" + "<br>");
    document.write("The Value of a-- is : " + message + "<br>")
    document.write("Now the value of a is : " + h + "<br>");
}
function answer45(){
    var a=2;
    var b=1;
    a = --a;
    a = --a - --b;
    a = --a - --b + ++b;
    a = --a - --b + ++b + b--;
    document.write("a is : " + a + "<br>");
    document.write("b is : " + b + "<br>");
    document.write("Result is  = ");
    result = ++a;
    document.write(result);
    document.write(linebreak);
}
function answer46(){
    var customerName = prompt("Please enter your name");

if (customerName!= null) {

    document.write("<h2> <center> welcome" + " Hello " + customerName + "! How are you today?</h1></center>"); 
}
}
function answer47(){
    var num = prompt("Enter Number") 

    var num = parseInt(num); 
    var i = 0;
    
    document.write('<table border="1" cellspacing="0">');
    for(i=1;i<10;i++) {
        document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
    } 
    
    document.write("</table>");
}
function answer49(){
    var name=prompt("Enter Your City Name");
    if (name === "Karachi"){
        Text = "Welcome to city of lights";
    } 
    else {
        Text = "Pakistan Every City Is Beuatifull";
    }
    alert (Text);
}
function answer50(){
    var name=prompt("What is Your Gender");
    if (name === "Male"){
        Text = "GooD Morning Sir";
    } 
    else {
        Text = " Good Morning Ma’am";
    }
    alert (Text);
}
function answer51(){
    var currentFuel="less than 0.25 liters";
    if (currentFuel = "0.25 liters"){
        Text = "Please refill the fuel in your car";
    } 
    else {
        Text = "Your Car is full of fuel";
    }
    alert (Text);
}
function answer52(){
    
    var a = 4;
if (++a === 5){
    Text = ("given condition for variable a is true");
}
         else var b = 82;
         if (b++ === 83){
         Text = ("given condition for variable b is true");
         }
         
         else var c = 12;
         if (c++ === 13){
         Text = ("condition 1 is true");
         }
         if (c === 13){
         Text = ("condition 2 is true");
         }
         if (++c < 14){
         Text = ("condition 3 is true");
         }
         if(c === 14){
          Text = ("condition 4 is true");
         }
         
        else var materialCost = 20000;
        var laborCost = 2000;
        var totalCost = materialCost + laborCost;
        if (totalCost === laborCost + materialCost){
        alert("The cost equals");
        }

        else if (true){
            Text = "True";
            }
            if (false){
            Text = "False";
            }
        else  if("car" < "cat"){
            Text = ("car is smaller than cat");
            }
            alert (Text);
        
}
function answer53(){
    var gusse=prompt("Enter your number");
    var num = (0,1,2,3,4,5,6,7,8,9,10);
    if (num === + gusse){
    Text = ("Bingo! Correct answer");
}
 else
 if (num !== + gusse){
 Text = ("Close enough to the correct answer");
 }
 alert (Text);
}
function answer54(){
    var num=prompt();
    var i =12;
if (i % 3 == 0) {
 alert("divisible by 3");
} else {
    alert("divisible not by 3");
} 
}
 function findOddEven(){
 var num = document.getElementById("num").value;
if ( num % 2 == 0) {
 document.getElementById('result').innerHTML = num +  "is an Even number";
}else{
document.getElementById('result').innerHTML = num + "is an Odd number";
 }
}
function answer55(){
   var temp = +prompt("Enter your temperature");
   if (temp >= 40){
       alert ("It is too hot outside.")
   }
   else if(temp >= 30) {
        alert ("The Weather today is Normal")
   }
   else if (temp >= 20) {
         alert ("Today’s Weather is cool.")
   }
   else if (temp >= 10){
       alert ("OMG! Today’s weather is so Cool")
   }
}
function answer56(){
    var a = + prompt("Enter Total marks in three subjects:")
var b = + prompt("Enter marks obtained in three subjects:");
var per = a * b / 100;
if(per>=80){
        document.write(" Marksheet Totalmarks: ", +a ,"Obtained marks: ",+b ,"percentage: ",+" ",+per,"Grade:  A+","Remarks: Excellent" );
}
  if( per<80 &&  per>=70){
    document.write(" Marksheet Totalmarks: ", +a ,"Obtained marks: ",+b ,"percentage: ",+" ",+per,"Grade:  A","Remarks: Good" );
    }
     else if( per>=60 && per<=69){
        document.write(" Marksheet Totalmarks: ", +a ,"Obtained marks: ",+b ,"percentage: ",+" ",+per,"Grade:  B","Remarks: you need to improve" );
    }
     else if(perc<59){
            document.write(" Marksheet Totalmarks: ", +a ,"Obtained marks: ",+b ,"percentage: ",+" ",+per,"Grade:  fail","Remarks: Sorry" );
            }
}
function answer57(){
    var num1=prompt("Enter your first value");
    var sign=prompt("Enter yor operator");
    var num2= prompt("Enter your second value");
     console.log(num1+sign+num2);
     if (sign === "+"){
         alert ((+num1)+(+num2));
     }
     else if (sign === "-"){
        alert (num1-num2);
     }
     else if (sign === "/"){
        alert (num1/num2);
     }
     else if (sign === "*"){
        alert (num1*num2);
     }
}
function answer58(){
    var color=prompt("Enter your color");
     if (color === "Red"){
         alert ("Must Stop");
     }
     else if (color === "Yellow"){
        alert ("Ready to move");
     }
     else if (color === "Green"){
        alert ("Move now");
     }
} 
function answer59(){	
    var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  alert ("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  alert ("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   alert ("The values "+ num1+ " and "+num2+ " are equal.");
  }
}
function answer60() {
    var greeting;
    var hour = 13;
    if (hour < 18) {
    greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    alert(greeting);
  }
  function answer61() {
    var greeting;
    var times = 1900;
    if (times >= 0000 && times < 1200) {
    greeting = "Good Morning!";
    } else if (times >= 1200 && times < 1700){
      greeting = "Good afternon!";
    } else if (times >= 1700 && times < 2100){
        greeting = "Good Evening!";
      }
      else if (times >= 2100 && times < 2359){
        greeting = "Good Night!";
      }
    alert(greeting);
  }
  function checkForm(form)
  {
    if(form.username.value == "") {
      alert("Error: Username cannot be blank!");
      form.username.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      form.username.focus();
      return false;
    }
    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(!checkPassword(form.pwd1.value)) {
        alert("The password you have entered is not valid!");
        form.pwd1.focus();
        return false;
      }
    } else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.pwd1.focus();
      return false;
    }
    return true;
  }
  function answer62(){
    var studentname = ["" , "Ahmed", "Faiza"];
    studentname[0] = "";
    alert (studentname);
  }
  function answer63(){
    var days_of_week = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    alert(days_of_week);
  }
  function answer64(){
    var points = [40, 100, 1, 5, 25, 10];
    alert(points[0]);
  }
  function answer65(){
    Boolean(10 > 9);
    alert(true);
  }
  function answer66(){

    var Qulification = new Array("Qulification : <br>1)SSC<BR>2)HSC<BR>3)BCS<br>4)BS<br>5)BCOM<br>6)MS<br>7)M.PHIL<br>8)PHD");
    document.write(Qulification);
  }
  function display() {
    var obj = document.getElementById("selectNow");
    document.write(obj.options[obj.selectedIndex].text);
 }
 function answer67(){
    var fruits = ["Keyboard", "Mouse", "Pointer"];
    alert(fruits);
    alert( fruits[0] ); 
    alert( fruits[1] ); 
    alert( fruits[2] ); 
 }
 function answer68(){
    var fruits = ["Keyboard", "Mouse", "Pointer"];
    alert(fruits);
    alert( fruits[2] ); 
    alert( fruits[1] ); 
    alert( fruits[0] ); 
 }
 function answer69(){
    var arr = ["<h1>Array: <br> This ",  "is", "my", "cat"];
    document.write(arr + "<br>");
    var arr2 =["<h1>String : <br>This is my cat"];
    document.write(arr2);

 }
 function answer70(){
    var arr = ["<h1> Cites List : <br> Karachi ",  "Lahore", "Islamabad", "Quetta", "Peshawar"];
    document.write(arr + "<br>");
    document.write("Slelected cites" + "<br>");
    document.write(arr[2]);
    document.write(arr[3]);
 }
 function answer71(){
    var fruits = ["380", "230", "480", "120"];
    document.write("Scorces of Student : " + fruits + "<br>");
      fruits.sort();
      document.write("Ordered Scores of student : " + fruits);
    }
    function answer72(){
        var input = 1;
        while (input <= 10) {
         document.write(input+ "<br>");
         input++;
        }
    }
    function answer73() {
        var A = [24, 53, 78, 91, 12]
        document.write("Array Items : " + A + "<br>");
        document.write("The Smaallest Items : " + Math.min(24, 53, 78, 91, 12));
      }
      function answer74() {
        var A = [24, 53, 78, 91, 12]
        document.write("Array Items : " + A + "<br>");
        document.write("The Largest Items : " + Math.max(24, 53, 78, 91, 12));
      }
