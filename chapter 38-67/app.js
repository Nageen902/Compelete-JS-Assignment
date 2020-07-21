//chapter 38-44
//task 1
function q1(){
function power(a,b){
    var result = 1;
    if(b == undefined)
       b = 2;
    for(var i=1; i <=b; i++){
        result = result * a;
    }
    return result;
    }
    alert(power(2,4));
}

//chapter 38-44
//task 2
function check_leapyear(){
    var year;
    year = document.getElementById("year").value

    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
    {
        alert(year+" is a leap year");  
    }
    else
    {
        alert(year+" is not a leap year");  
    }
}

//chapter 38-44
// task 3
function area(){
    var a = prompt("enter your value");
    var b = prompt("enter your value");
    var c = prompt("enter your value");
    var s = (a + b + c)/2;
    var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
    alert(area);
}

//chapter 38-44
// task 4
function Marks(){
    var eng,urdu,maths;
    eng=parseInt(prompt("enter 1st no."));
    urdu=parseInt(prompt("enter 2nd no."));
    maths=parseInt(prompt("enter 3rd no."));
    var average = (eng + urdu + maths)/3;
    totalmarks=eng + urdu + maths;
    Percentage=(totalmarks/300)*100;
    document.write("<h1>MARKSHEET" + "<br></h1>");
    document.write("English Marks: " + eng + "<br>");
    document.write("Urdu Marks: " + urdu + "<br>");
    document.write("Maths Marks: " + maths + "<br>");
    document.write("The total marks is: " + totalmarks + "<br>");
    document.write("The total percentage is: " + Percentage + "%" + "<br>");
    document.write("The average of subjects marks is : " + average + "<br>");
}

//chapter 38-44
// task 5
function indexOf() {
    var str = "Hello world, welcome to the universe.";
    var n = str.indexOf("welcome");
    alert (n);
}

//chapter 38-44
// task 6
function str(){
    var string = prompt();
string = string.replace( /[aeiou]/g, '' );
alert(string);
}

//chapter 38-44
// task 7
function vowel(){
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
alert(vowel_count("Pleases read this application and give me gratuity"));
}

//chapter 38-44
// task 8
function LengthConverter(valNum) {
    document.getElementById("outputFeet").innerHTML=valNum/3280.8;
}
function LengthConverterm(valNum) {
    document.getElementById("outputMeters").innerHTML=valNum*1000;
}
function LengthConverterin(valNum) {
    document.getElementById("outputInches").innerHTML=valNum*39370;
}
function LengthConvertercm(valNum) {
    document.getElementById("outputcm").innerHTML=valNum*100000;
}

//chapter 38-44
// task 10

function currencyDenomination() {
    var cash = +prompt("Enter amount to withdraw ");
    var hundred = cash / 100;
    var fifty = cash / 50;
    var ten = cash / 10;
    alert (hundred,fifty,ten);
}

//chapter 38-44
// task 9
function question9(){
function OverTime(){
  var ovr_rate =12;
  var std_hr = 40;
  var hr_worked;
  var ovr_hr;
  var count = 1;
  var pay;
  var hr_worked = +prompt("Enter The Hours Worked : ");
  ovr_hr = hr_worked - std_hr;
  if(ovr_hr > 0)
  {
    pay =  ovr_hr*ovr_rate;
    alert("The over time pay is : " + pay);
  }
  else alert ("Not eligible for overtime pay");
  count = count + 1;
  return 0;
}
OverTime();
}

//chapter 43-48
//task 4
function changePic1() {
    document.getElementById("myImg").src = "https://i.ytimg.com/vi/NtnojwJ_vrg/hqdefault.jpg";
}
function changePic22(){
    document.getElementById("myImg").src = "https://i.pinimg.com/originals/d6/29/6e/d6296ea7bdc6e1d2ffacc60fcc6b29a2.jpg";
}

//chapter 43-48
//task 5
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }
 
//chapter 43-48
//task 3
  function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }

//chapter 43-48
//task 1
function popup(message) {
     alert(message);
}

//chapter 43-48
//task 2
function popup(message) {
    alert(message);
}
   
//chapter 49-52
//task 1
function submit(){
  var username = document.getElementById('username').value;

   var Password = document.getElementById('Password').value;

   var email = document.getElementById('email').value;
    //email.value;

  $("#exampleModal").modal("hide");

    document.write(username);
    document.write("<br>");
    document.write(email);
    document.write("<br>");
    document.write(Password);

}


//chapter 49-52
//task 2
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
//chapter 49-52
//task 3
var userData = new function () {

  // AN ARRAY OF JSON OBJECTS WITH VALUES.
  this.myBooks = [
      { ID: '1', Book_Name: 'Computer Architecture', Category: 'Computers', Price: 125.60 },
      { ID: '2', Book_Name: 'Asp.Net 4 Blue Book', Category: 'Programming', Price: 56.00 },
      { ID: '3', Book_Name: 'Popular Science', Category: 'Science', Price: 210.40 }
  ]

  this.category = ['Business', 'Computers', 'Programming', 'Science'];
  this.col = [];

  this.createTable = function () {

      // EXTRACT VALUE FOR TABLE HEADER.
      for (var i = 0; i < this.myBooks.length; i++) {
          for (var key in this.myBooks[i]) {
              if (this.col.indexOf(key) === -1) {
                  this.col.push(key);
              }
          }
      }

      // CREATE A TABLE.
      var table = document.createElement('table');
      table.setAttribute('id', 'booksTable');     // SET TABLE ID.

      var tr = table.insertRow(-1);               // CREATE A ROW (FOR HEADER).

      for (var h = 0; h < this.col.length; h++) {
          // ADD TABLE HEADER.
          var th = document.createElement('th');
          th.innerHTML = this.col[h].replace('_', ' ');
          tr.appendChild(th);
      }

      // ADD ROWS USING JSON DATA.
      for (var i = 0; i < this.myBooks.length; i++) {

          tr = table.insertRow(-1);           // CREATE A NEW ROW.

          for (var j = 0; j < this.col.length; j++) {
              var tabCell = tr.insertCell(-1);
              tabCell.innerHTML = this.myBooks[i][this.col[j]];
          }

          // DYNAMICALLY CREATE AND ADD ELEMENTS TO TABLE CELLS WITH EVENTS.

          this.td = document.createElement('td');

          // *** CANCEL OPTION.
          tr.appendChild(this.td);
          var lblCancel = document.createElement('label');
          lblCancel.innerHTML = '✖';
          lblCancel.setAttribute('onclick', 'userData.Cancel(this)');
          lblCancel.setAttribute('style', 'display:none;');
          lblCancel.setAttribute('title', 'Cancel');
          lblCancel.setAttribute('id', 'lbl' + i);
          this.td.appendChild(lblCancel);

          // *** SAVE.
          tr.appendChild(this.td);
          var btSave = document.createElement('input');

          btSave.setAttribute('type', 'button');      // SET ATTRIBUTES.
          btSave.setAttribute('value', 'Save');
          btSave.setAttribute('id', 'Save' + i);
          btSave.setAttribute('style', 'display:none;');
          btSave.setAttribute('onclick', 'userData.Save(this)');       // ADD THE BUTTON's 'onclick' EVENT.
          this.td.appendChild(btSave);

          // *** UPDATE.
          tr.appendChild(this.td);
          var btUpdate = document.createElement('input');

          btUpdate.setAttribute('type', 'button');    // SET ATTRIBUTES.
          btUpdate.setAttribute('value', 'Edit');
          btUpdate.setAttribute('id', 'Edit' + i);
          btUpdate.setAttribute('style', 'background-color:#44CCEB;');
          btUpdate.setAttribute('onclick', 'userData.Update(this)');   // ADD THE BUTTON's 'onclick' EVENT.
          this.td.appendChild(btUpdate);

          // *** DELETE.
          this.td = document.createElement('th');
          tr.appendChild(this.td);
          var btDelete = document.createElement('input');
          btDelete.setAttribute('type', 'button');    // SET INPUT ATTRIBUTE.
          btDelete.setAttribute('value', 'Delete');
          btDelete.setAttribute('style', 'background-color:#ED5650;');
          btDelete.setAttribute('onclick', 'userData.Delete(this)');   // ADD THE BUTTON's 'onclick' EVENT.
          this.td.appendChild(btDelete);
      }


      // ADD A ROW AT THE END WITH BLANK TEXTBOXES AND A DROPDOWN LIST (FOR NEW ENTRY).

      tr = table.insertRow(-1);           // CREATE THE LAST ROW.

      for (var j = 0; j < this.col.length; j++) {
          var newCell = tr.insertCell(-1);
          if (j >= 1) {

              if (j == 2) {   // WE'LL ADD A DROPDOWN LIST AT THE SECOND COLUMN (FOR Category).

                  var select = document.createElement('select');      // CREATE AND ADD A DROPDOWN LIST.
                  select.innerHTML = '<option value=""></option>';
                  for (k = 0; k < this.category.length; k++) {
                      select.innerHTML = select.innerHTML +
                          '<option value="' + this.category[k] + '">' + this.category[k] + '</option>';
                  }
                  newCell.appendChild(select);
              }
              else {
                  var tBox = document.createElement('input');          // CREATE AND ADD A TEXTBOX.
                  tBox.setAttribute('type', 'text');
                  tBox.setAttribute('value', '');
                  newCell.appendChild(tBox);
              }
          }
      }

      this.td = document.createElement('td');
      tr.appendChild(this.td);

      var btNew = document.createElement('input');

      btNew.setAttribute('type', 'button');       // SET ATTRIBUTES.
      btNew.setAttribute('value', 'Create');
      btNew.setAttribute('id', 'New' + i);
      btNew.setAttribute('style', 'background-color:#207DD1;');
      btNew.setAttribute('onclick', 'userData.CreateNew(this)');       // ADD THE BUTTON's 'onclick' EVENT.
      this.td.appendChild(btNew);

      var div = document.getElementById('container');
      div.innerHTML = '';
      div.appendChild(table);    // ADD THE TABLE TO THE WEB PAGE.
  };

  // ****** OPERATIONS START.

  // CANCEL.
  this.Cancel = function (oButton) {

      // HIDE THIS BUTTON.
      oButton.setAttribute('style', 'display:none; float:none;');

      var activeRow = oButton.parentNode.parentNode.rowIndex;

      // HIDE THE SAVE BUTTON.
      var btSave = document.getElementById('Save' + (activeRow - 1));
      btSave.setAttribute('style', 'display:none;');

      // SHOW THE UPDATE BUTTON AGAIN.
      var btUpdate = document.getElementById('Edit' + (activeRow - 1));
      btUpdate.setAttribute('style', 'display:block; margin:0 auto; background-color:#44CCEB;');

      var tab = document.getElementById('booksTable').rows[activeRow];

      for (i = 0; i < this.col.length; i++) {
          var td = tab.getElementsByTagName("td")[i];
          td.innerHTML = this.myBooks[(activeRow - 1)][this.col[i]];
      }
  }


  // EDIT DATA.
  this.Update = function (oButton) {
      var activeRow = oButton.parentNode.parentNode.rowIndex;
      var tab = document.getElementById('booksTable').rows[activeRow];

      // SHOW A DROPDOWN LIST WITH A LIST OF CATEGORIES.
      for (i = 1; i < 4; i++) {
          if (i == 2) {
              var td = tab.getElementsByTagName("td")[i];
              var ele = document.createElement('select');      // DROPDOWN LIST.
              ele.innerHTML = '<option value="' + td.innerText + '">' + td.innerText + '</option>';
              for (k = 0; k < this.category.length; k++) {
                  ele.innerHTML = ele.innerHTML +
                      '<option value="' + this.category[k] + '">' + this.category[k] + '</option>';
              }
              td.innerText = '';
              td.appendChild(ele);
          }
          else {
              var td = tab.getElementsByTagName("td")[i];
              var ele = document.createElement('input');      // TEXTBOX.
              ele.setAttribute('type', 'text');
              ele.setAttribute('value', td.innerText);
              td.innerText = '';
              td.appendChild(ele);
          }
      }

      var lblCancel = document.getElementById('lbl' + (activeRow - 1));
      lblCancel.setAttribute('style', 'cursor:pointer; display:block; width:20px; float:left; position: absolute;');

      var btSave = document.getElementById('Save' + (activeRow - 1));
      btSave.setAttribute('style', 'display:block; margin-left:30px; float:left; background-color:#2DBF64;');

      // HIDE THIS BUTTON.
      oButton.setAttribute('style', 'display:none;');
  };


  // DELETE DATA.
  this.Delete = function (oButton) {
      var activeRow = oButton.parentNode.parentNode.rowIndex;
      this.myBooks.splice((activeRow - 1), 1);    // DELETE THE ACTIVE ROW.
      this.createTable();                         // REFRESH THE TABLE.
  };

  // SAVE DATA.
  this.Save = function (oButton) {
      var activeRow = oButton.parentNode.parentNode.rowIndex;
      var tab = document.getElementById('booksTable').rows[activeRow];

      // UPDATE myBooks ARRAY WITH VALUES.
      for (i = 1; i < this.col.length; i++) {
          var td = tab.getElementsByTagName("td")[i];
          if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') {  // CHECK IF ELEMENT IS A TEXTBOX OR SELECT.
              this.myBooks[(activeRow - 1)][this.col[i]] = td.childNodes[0].value;      // SAVE THE VALUE.
          }
      }
      this.createTable();     // REFRESH THE TABLE.
  }

  // CREATE NEW.
  this.CreateNew = function (oButton) {
//      alert('aa')
  
      var activeRow = oButton.parentNode.parentNode.rowIndex;
      var tab = document.getElementById('booksTable').rows[activeRow];
      var obj = {};

      // ADD NEW VALUE TO myBooks ARRAY.
      for (i = 1; i < this.col.length; i++) {
          var td = tab.getElementsByTagName("td")[i];
          if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') {      // CHECK IF ELEMENT IS A TEXTBOX OR SELECT.
              var txtVal = td.childNodes[0].value;
              if (txtVal != '') {
                  obj[this.col[i]] = txtVal.trim();
                  console.log(obj)
              }
              else {
                  obj = '';
                  alert('all fields are compulsory');
                  break;
              }
          }
      }
      obj[this.col[0]] = this.myBooks.length + 1;     // NEW ID.

      if (Object.keys(obj).length > 0) {      // CHECK IF OBJECT IS NOT EMPTY.
          this.myBooks.push(obj);             // PUSH (ADD) DATA TO THE JSON ARRAY.
          this.createTable();                 
      }
  }

}

userData.createTable();
//chapter 52-57

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//chapter 58-67
//task 2
//question 1
// function myFunction() {
//      var y= document.getElementById("form-content").nodeType;
//      console.log(y);
//  }

// //chapter 58-67
// //task 2
// //question 2


// function myFunction() {
//  var x = document.getElementById('lastName').nodeType;
//    console.log(x);
//   var c = document.getElementById('lastName')
//    console.log(c.childNodes[2]);
// }

//chapter 58-67
//task 2
//question 4

// function myFunction() {
//   var x = document.getElementById('main-content').nodeType;
//     console.log(x);
//    var c = document.getElementById('main-content')
//     console.log(c.firstChild);
//     console.log(c.lastChild);
//  }

//chapter 58-67
//task 2
//question 5

// function myFunction() {
//   var firstEl = document.getElementById("lastName");
//   secondEl = firstEl.nextSibling;
//   console.log(secondEl);
//   var firstEl = document.getElementById("lastName");
//    var nonexistentEl = firstEl.previousSibling;
//    console.log(nonexistentEl);
//  }

//chapter 58-67
//task 2
//question 6

//  function myFunction() {
//   var x = document.getElementById('email').nodeType;
//     console.log(x);
//    var c = document.getElementById('email')
//     console.log(c.parentNode);
//  }

//chapter 58-67
//task 1
//question 1

//  function myFunction() {
//   var x = document.getElementById("main-content");
//     console.log(x);
// }

//chapter 58-67
//task 1
//question 2

function myFunction() {
    var c= document.getElementById("main-content")
    console.log(c.children);
}

//chapter 58-67
//task 1
//question 4/5

function myFunction() {
document.getElementsByClassName("first-name").value="Nageen";
}
function myFunction() {
  document.getElementsByClassName("first-name").value;
}
  function myFunction() {
    document.getElementsByClassName("first-name").value;
}

