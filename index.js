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
  
  if (string !== uppercase) {
  return "I can't hear you!"
 } else {
  return "YES INDEED!"
}

function loveCheck(string){
  if(string === "I love you, Grandma") {
    return "I love you, too."
  }
}
loveCheck()
}

