
let logo = document.getElementById('block')
let op = 1

  setInterval(function(){
   op = op - 0.09
  logo.style.opacity = op
if(op<= 0.1){
   op=1 
   logo.style.opacity = '1';
   logo.style.transition = '1s'
 }
   
},250)

///////////////////////////////////////////////

let span = document.getElementsByTagName('span')
let img1 = document.getElementById('block')
 console.log(img1.width)
let img = document.getElementById('block-1')
let section = document.getElementById('pg-1')
let score = 1

setInterval(function(){
   score = score  - 0.1
  section.style.backgroundColor = 'black'
  img1.style.display='block'
  img.style.display = 'none'

  for(let i =0 ; i<span.length ; i++){
       span[i].style.color = 'hsl(0, 100%, 69%)'
     }

   if(score<= 0.4 ){
         
     for(let i =0 ; i<span.length ; i++){
       span[i].style.color = 'black'
     }
     img1.style.display='none'
     img.style.display = 'block'
     section.style.transitionDuration = '13s'
     section.style.backgroundColor = 'white'
      setTimeout( function(){
        score =1 
      }, 10000)
   }
},1000)
//////////////////////////
let img5 = document.getElementById('img3')
let img6 = document.getElementById('img4')

setInterval(function(){
  img6.classList.toggle('pg-1-1-4')
  if(img6.classList.contains('pg-1-1-4')){
    img6.classList.remove('pg-1-1-4')
    img5.classList.add('pg-1-1-4')
  }
},1000)

