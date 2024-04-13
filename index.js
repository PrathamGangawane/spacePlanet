let counter = 0;
function timer (){
     var time = setInterval(function  () {
       counter++
       let val = counter*5
       
        
       
      document.querySelector('.calc').innerHTML = val
      if(val == 100){
        let calc = document.querySelector('.calc');
        calc.style.height = "1000px"
        calc.style.width = "1000px"
        document.querySelector('.display').style.background = "white"
        
        setTimeout(() => {
            document.querySelector('.display').style.opacity = 0
        },1000);
        setTimeout(() => {
            document.querySelector('.display').style.display = "none"
        },1500);

        
        clearInterval(time)
      }
    
    }, 100);
    
}

timer()

function navigation(){
  var variable = document.querySelector('.mini-componets1')
  variable.addEventListener('mousemove',(element)=>{
    
    
    gsap.to(element.target,{
      duration:1,
        color:"purple"
    })
   
  })
  variable.addEventListener('mouseout',(element)=>{
    gsap.to(element.target,{
      duration:1,
        color:"white"
    })
  
  })
}


function textAnimation(){
  
  }

setTimeout(textAnimation,3000) // this function is calling after a 3 mili seconds

navigation()

function background(){
    gsap.to('.png',{
     
      display:"block",
      duration:0.5,
      scrollTrigger:{
        scroller:"body",
        trigger:".page6",
        start:"top 100%",
        end:"bottom 10%",
        scrub:true,
        
      }
    })
    gsap.to('.png',{
    
      duration:1,
      display:"none",
      scrollTrigger:{
        scroller:"body",
        trigger:".page7",
        start:"top 30%",
        end:"bottom 10%",
        scrub:true,
     
        
      }
    })

}
background()

function rotatingCube(){
gsap.to('.cube',{
   duration:2,
   rotateY:"180deg",
   scrollTrigger:{
    scroller:"body",
    trigger:".cube",
    start:"top 30%",
    end:"bottom 0%",
    markers:false,
    scrub:0.4,
    pin:".cubeC"
   }
})

}
rotatingCube()





function page3(){
  const text = new SplitType('.newSplits', { types: 'words, chars' })

// Animate characters into view with a stagger effect
gsap.from(text.chars, {
  scrollTrigger:{
   trigger:".newSplits",
   start:"top 100%",
   end:" 20%",
   scrub:3.
   
  },
  opacity: 0,
  color:"black",
  y:250,
  scale:5,
  duration:0.4,
  stagger: { amount:1 },
  
})

}
page3()
textsplits()



function textsplits(){
  const text = new SplitType('.first', { types: 'words, chars' })

// Animate characters into view with a stagger effect
gsap.from(text.chars, {
  scrollTrigger:{
   trigger:".first",
   start:"top 100%",
   end:" 20%",
   scrub:4
   
  },
  opacity: 0,
  color:"black",
  y:250,
  scale:5,
  duration:0.4,
  stagger: { amount:1 },
  
})
}



function last(){
  const text = new SplitType('.pratham', { types: 'words, chars' })
  gsap.from(text.chars, {
    scrollTrigger:{
     trigger:".page7",
     start:"top 60%",
     end:" 10%",
     scrub:4
     
    },
    opacity: 0,
    color:"black",
    y:150,
    scale:5,
    duration:0.4,
    stagger: { amount:1 },
    
  })
  }

last()

