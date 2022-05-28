const x =document.getElementById("int-main").value;
function shor() { if (window.hasOwnProperty('webkitSpeechRecognition')) {
 var recognition = new webkitSpeechRecognition();
document.getElementById("shore").classList.add("shor");
document.getElementById("sound(start)").play();
document.getElementById("int-main").focus()
  recognition.continuous = false; recognition.interimResults = false; recognition.lang = "en-US"; recognition.start(); recognition.onresult = function(e) { 
document.getElementById('int-main').value = e.results[0][0].transcript;
 recognition.stop();
 document.getElementById('sender').click(); 
 document.getElementById("sound(stop)").play();
document.getElementById("shore").classList.remove("shor");
 }; recognition.onerror = function(e) { recognition.stop(); } } } 
