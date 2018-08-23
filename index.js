function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var uppercase = string.toUpperCase()
  var granLove = "I love you, Grandma."
  
  if (string !== uppercase) {
  return "I can't hear you!"
 }  else {
  return "YES INDEED!"
}
if (string === granLove) {
   return "I love you, too."
}
}

