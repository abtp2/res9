var scrollDirection = 1000;
var f=document.getElementById('full'); 
 function pageScroll() { f.scrollBy(0,scrollDirection);
  scrolldelay = setTimeout('pageScroll()',1); 
  if ( (f.scrollY === 0) || (f.innerHeight + f.scrollY) >= document.body.offsetHeight) { scrollDirection = 1*scrollDirection; } } pageScroll();




const a =document.getElementById("first");
const b =document.getElementById("second");
function get() {
const x =document.getElementById("tog").value;
if (x === null) {
history.back();
document.getElementsByTagName("body")[0].style.display ="none";
}
else{
const node = document.createElement("div");
const textnode = document.createTextNode("Are you a student or any other ?");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first");
}
}



function sub() {
const x =document.getElementById("int-main").value;
const node = document.createElement("div");
const textnode = document.createTextNode(x);
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "second");
document. getElementById("int-main"). value = "";



if (x.indexOf('tude') > -1) { 
const node = document.createElement("div");
const textnode = document.createTextNode("Ok, which class are you in ?");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first");
 }
 else if (x.indexOf('Hello') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Hey👋, are you a student or any other");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 } 
 else if (x.indexOf('hello') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Hey👋, are you a student or any other");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 } 
 else if (x.indexOf('hi') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Hey👋, are you a student or any other");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 } 
 else if (x.indexOf('Hi') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Hey👋, are you a student or any other");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 } 
 else if (x.indexOf('Stude') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Ok, which class are you in ?");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 } 
else if (x.indexOf('stude') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Ok, which class are you in ?");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }  
 else if (x.indexOf('10th') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Ok, which subject you like most ?");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 } 
 else if (x.indexOf('ten') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Ok, which subject you like most ?");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 } 
else if (x.indexOf('10') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Ok, which subject you like most ?");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }  
else if (x.indexOf('10Th') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Ok, which subject you like most ?");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }  
 else if (x.indexOf('Ten') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Ok, which subject you like most ?");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 } 
else if (x.indexOf('Tenth') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Ok, which subject you like most ?");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }  
else if (x.indexOf('tenth') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Ok, which subject you like most ?");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }  
 else if (x.indexOf('omp') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("I think you will become a web developer 😃");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }  
 else if (x.indexOf('ind') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("I think you will become a government teacher 🥰");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }  
else if (x.indexOf('ath') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("I think that you will become an Engineer 🙂");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }   
else if (x.indexOf('enc') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("I think you will become a Software engineer 😉");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }   
 else if (x.indexOf('cc') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("I think that you will become an Army commando 😃");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }  
else if (x.indexOf('CC') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("I think that you will become an Army commando 😃");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }   
else if (x.indexOf('lis') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("I think that you will become a government teacher ☺");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }    
else if (x.indexOf('cial') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("I think that you will become an IAS officer");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }    
 else if (x.indexOf('st') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("I think that you will become an IAS officer");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }    
 else if (x.indexOf('ST') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("I think that you will become an IAS officer");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }    
else if (x.indexOf('ank') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Welcome, Do study hard and you will get your goal 😀");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }    
else if (x.indexOf('ok') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Thank you for talking with me. Have a nice day 🥰");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }   
else if (x.indexOf('Ok') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Thank you for talking with me. Have a nice day 🥰");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }      
else if (x.indexOf('OK') > -1)  {
const node = document.createElement("div");
const textnode = document.createTextNode("Thank you for talking with me. Have a nice day 🥰");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first"); 				
 }    
  else { 
const node = document.createElement("div");
const textnode = document.createTextNode("Sorry this is not allowed 😔");
node.appendChild(textnode);
document.getElementById("full").appendChild(node);
node.setAttribute("id", "first");
 }
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function clos() {
 document.getElementById("menu").style.display ="none";
 }
 function ope() {
 document.getElementById("menu").style.display ="flex"; 				
 }
 
 
function da() {
var v =document.getElementById("logos");
var w =document.getElementById("sender");
var x =document.getElementById("menu");
var y =document.getElementById("follow");
var z =document.getElementById("body");

const nodeList = document.querySelectorAll(".menu-link");


if(x.style.width ==="250px") {
x.style.width ="249.9px";
x.style.borderLeft ="6px double #8419e5";
x.style.borderBottom ="6px double #8419e5";
x.style.borderRight ="6px double #4740ff";
x.style.borderTop ="6px double #4740ff";

z.style.backgroundImage ="url('bg.jpg'),linear-gradient(45deg, #4740ff, #8419e5 60%)";
y.style.backgroundImage ="linear-gradient(45deg, #4740ff, #8419e5 60%)";
w.style.backgroundColor ="#3223d3";
v.style.color ="#000";
}
else {
x.style.width ="250px";
x.style.borderLeft ="6px double #fff100";
x.style.borderBottom ="6px double #fff100";
x.style.borderRight ="6px double #7bff55";
x.style.borderTop ="6px double #7bff55";

z.style.backgroundImage ="url('bg.jpg'),linear-gradient(45deg, #7bff55, #fff100 60%)";
y.style.backgroundImage ="linear-gradient(45deg, #7bff55, #fff100 90%)";
w.style.backgroundColor ="#0dc100";
v.style.color ="#000";
}				
}



function remo() {
const d = new Date();
let hour = d.getHours();
var x =document.getElementById("tog").value;
document.getElementById("loader").style.display ="none"; 
document.getElementById("name").innerHTML ="@" + x +hour;
document.getElementById("name2").innerHTML =x;
document.getElementById("int-main").click();
}