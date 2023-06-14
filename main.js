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







  let targetArticle = document.getElementById(201811189)
  //console.log(targetArticle)
  targetGlyph = targetArticle.querySelector(".like-glyph")
  //console.log(targetGlyph)
  
  targetGlyph.addEventListener('click', function() {
    mimicServerCall("http://mimicServer.example.com", {}).then(function (data) {
      console.log(201811189)
      if (targetGlyph.textContent === EMPTY_HEART){
        targetGlyph.textContent = FULL_HEART
        targetGlyph.classList.add("activated-heart")
      }
      else {
        targetGlyph.textContent = EMPTY_HEART
        targetGlyph.classList.remove("activated-heart")      
      }           
      //console.log("mimicServerPass ")
      }).catch(function (error) { 
        let element = document.getElementById("modal")
        element.classList.remove("hidden")
        console.log(error)
        //console.log("mimicServer fail");
        setTimeout(() => {
          element.classList.add("hidden")
        }, 3000)  
    })    
       
  })


 
  
  let targetArticle2 = document.getElementById(201811190)
  //console.log(targetArticle)
  targetGlyph2 = targetArticle2.querySelector(".like-glyph")
  //console.log(targetGlyph)
  
  targetGlyph2.addEventListener('click', function() {
    mimicServerCall("http://mimicServer.example.com", {}).then(function (data) {
      console.log(201811190)
      if (targetGlyph2.textContent === EMPTY_HEART){
        targetGlyph2.textContent = FULL_HEART
        targetGlyph2.classList.add("activated-heart")
      }
      else {
        targetGlyph2.textContent = EMPTY_HEART
        targetGlyph2.classList.remove("activated-heart")      
      }           
      //console.log("mimicServerPass ")
      }).catch(function (error) { 
        let element = document.getElementById("modal")
        element.classList.remove("hidden")
        console.log(error)
        //console.log("mimicServer fail");
        setTimeout(() => {
          element.classList.add("hidden")
        }, 3000)  
    })    
       
  })





  // const glyphListener = (glyphId) => {
  //   let targetArticle = document.getElementById(glyphId)
  //   //console.log(targetArticle)
  //   targetGlyph = targetArticle.querySelector(".like-glyph")
  //   //console.log(targetGlyph)
    
  //   targetGlyph.addEventListener('click', function() {
  //     mimicServerCall("http://mimicServer.example.com", {}).then(function (data) {
  //       console.log(glyphId)
  //       if (targetGlyph.textContent === EMPTY_HEART){
  //         targetGlyph.textContent = FULL_HEART
  //         targetGlyph.classList.add("activated-heart")
  //       }
  //       else {
  //         targetGlyph.textContent = EMPTY_HEART
  //         targetGlyph.classList.remove("activated-heart")      
  //       }           
  //       //console.log("mimicServerPass ")
  //       }).catch(function (error) { 
  //         let element = document.getElementById("modal")
  //         element.classList.remove("hidden")
  //         console.log(error)
  //         //console.log("mimicServer fail");
  //         setTimeout(() => {
  //           element.classList.add("hidden")
  //         }, 3000)  
  //     })    
         
  //   })
  // }
  
  //   //glyphListener(201811189)
  //   glyphListener(201811190)
  //   // glyphListener(201811191)
  //   // glyphListener(201811192)
  //   // glyphListener(201811193)
    

 

// function mimicServerCall(url="http://mimicServer.example.com", config={}) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject("Random server error. Try again.");
//       } else {
//         resolve("Pretend remote server notified of action!");
//       }
//     }, 300);
//   });
// }