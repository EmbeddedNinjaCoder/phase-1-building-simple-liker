document.addEventListener('DOMContentLoaded', function() {
});

// Defining text characters for the empty and full hearts for you to use later.

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


let targetArticle1 = document.getElementById(201811189)
//console.log(targetArticle)
targetGlyph1 = targetArticle1.querySelector(".like-glyph")
//console.log(targetGlyph)
  
targetGlyph1.addEventListener('click', function() {
  mimicServerCall("http://mimicServer.example.com", {}).then(function (data) {
    //console.log(201811189)
    if (targetGlyph1.textContent === EMPTY_HEART){
      targetGlyph1.textContent = FULL_HEART
      targetGlyph1.classList.add("activated-heart")
    }
    else {
      targetGlyph1.textContent = EMPTY_HEART
      targetGlyph1.classList.remove("activated-heart")      
    }           
    //console.log("mimicServerPass ")
    }).catch(function (error1) { 
      let element1 = document.getElementById("modal")
      element1.classList.remove("hidden")
      //console.log(error1)
      //console.log("mimicServer fail");
      setTimeout(() => {
        element1.classList.add("hidden")
      }, 3000)  
  })    
})

let targetArticle2 = document.getElementById(201811190)
//console.log(targetArticle)
targetGlyph2 = targetArticle2.querySelector(".like-glyph")
//console.log(targetGlyph)
  
targetGlyph2.addEventListener('click', function() {
  mimicServerCall("http://mimicServer.example.com", {}).then(function (data) {
    //console.log(201811190)
    if (targetGlyph2.textContent === EMPTY_HEART){
      targetGlyph2.textContent = FULL_HEART
      targetGlyph2.classList.add("activated-heart")
    }
    else {
      targetGlyph2.textContent = EMPTY_HEART
      targetGlyph2.classList.remove("activated-heart")      
    }           
    //console.log("mimicServerPass ")
    }).catch(function (error2) { 
      let element2 = document.getElementById("modal")
      element2.classList.remove("hidden")
      //console.log(error2)
      //console.log("mimicServer fail");
      setTimeout(() => {
        element2.classList.add("hidden")
      }, 3000)  
  })  
})

let targetArticle3 = document.getElementById(201811191)
//console.log(targetArticle)
targetGlyph3 = targetArticle3.querySelector(".like-glyph")
//console.log(targetGlyph)
  
targetGlyph3.addEventListener('click', function() {
  mimicServerCall("http://mimicServer.example.com", {}).then(function (data) {
    //console.log(201811191)
    if (targetGlyph3.textContent === EMPTY_HEART){
      targetGlyph3.textContent = FULL_HEART
      targetGlyph3.classList.add("activated-heart")
    }
    else {
      targetGlyph3.textContent = EMPTY_HEART
      targetGlyph3.classList.remove("activated-heart")      
    }           
    //console.log("mimicServerPass ")
    }).catch(function (error3) { 
      let element3 = document.getElementById("modal")
      element3.classList.remove("hidden")
      //console.log(error3)
      //console.log("mimicServer fail");
      setTimeout(() => {
        element3.classList.add("hidden")
      }, 3000)  
  })  

})

let targetArticle4 = document.getElementById(201811192)
//console.log(targetArticle)
targetGlyph4 = targetArticle4.querySelector(".like-glyph")
//console.log(targetGlyph)
  
targetGlyph4.addEventListener('click', function() {
  mimicServerCall("http://mimicServer.example.com", {}).then(function (data) {
    //console.log(201811192)
    if (targetGlyph4.textContent === EMPTY_HEART){
      targetGlyph4.textContent = FULL_HEART
      targetGlyph4.classList.add("activated-heart")
    }
    else {
      targetGlyph4.textContent = EMPTY_HEART
      targetGlyph4.classList.remove("activated-heart")      
    }           
    //console.log("mimicServerPass ")
    }).catch(function (error4) { 
      let element4 = document.getElementById("modal")
      element4.classList.remove("hidden")
      //console.log(error4)
      //console.log("mimicServer fail");
      setTimeout(() => {
        element4.classList.add("hidden")
      }, 3000)  
  })  
})

let targetArticle5 = document.getElementById(201811193)
//console.log(targetArticle)
targetGlyph5 = targetArticle5.querySelector(".like-glyph")
//console.log(targetGlyph)
  
targetGlyph5.addEventListener('click', function() {
  mimicServerCall("http://mimicServer.example.com", {}).then(function (data) {
    //console.log(201811193)
    if (targetGlyph5.textContent === EMPTY_HEART){
      targetGlyph5.textContent = FULL_HEART
      targetGlyph5.classList.add("activated-heart")
    }
    else {
      targetGlyph5.textContent = EMPTY_HEART
      targetGlyph5.classList.remove("activated-heart")      
    }           
    //console.log("mimicServerPass ")
    }).catch(function (error5) { 
      let element5 = document.getElementById("modal")
      element5.classList.remove("hidden")
      //console.log(error5)
      //console.log("mimicServer fail");
      setTimeout(() => {
        element5.classList.add("hidden")
      }, 3000)  
  })  

})