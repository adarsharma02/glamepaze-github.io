


function fun() {
    (setTimeout(() => {
        document.getElementById('loader-screen').style.display='none'
        document.getElementById('navbar').style.display='flex'
        document.getElementById('primary-button-box').style.display='block'
        document.getElementById('section').style.display='flex'
        document.getElementById('summary-area').style.display='block'
       
        document.getElementsByClassName('big-img-box')[0].style.display='flex'
      
        document.getElementById('testimonial-area').style.display='block'
        document.getElementById('feedback-area').style.display='block'
        document.getElementById('footer').style.display='block'
       
        // document.getElementById('sidebar-area').style.display='flex'
      
      
        document.getElementsByTagName('body')[0].style.overflowY='auto'

      
      

    },1000))
}
addEventListener ('load',fun)





if (window.matchMedia("(max-width: 1100px)").matches) {
    
    document.getElementsByClassName('summary-boxicon')[0].classList.remove('bx-lg')
    document.getElementsByClassName('summary-boxicon')[0].classList.add('bx-md')
    document.getElementsByClassName('summary-boxicon')[1].classList.remove('bx-lg')
    document.getElementsByClassName('summary-boxicon')[1].classList.add('bx-md')
    document.getElementsByClassName('summary-boxicon')[2].classList.remove('bx-lg')
    document.getElementsByClassName('summary-boxicon')[2].classList.add('bx-md')
    document.getElementsByClassName('summary-boxicon')[3].classList.remove('bx-lg')
    document.getElementsByClassName('summary-boxicon')[3].classList.add('bx-md')
    
  }
   
   
 
  
var hamburger=document.getElementsByClassName('box')[2].firstElementChild
    
function sidebar_appear(e) {
  
    if(e.target==hamburger){
   
    document.getElementById('sidebar-area').style.display='flex'
    document.getElementById('sidebar-box').style.display='flex'
   
    console.log('hello')
    }
    
}
addEventListener('click',sidebar_appear)



var cross = document.getElementById('side-cross')

function sidebar_close(e){
    if(e.target == cross){
         document.getElementById('sidebar-area').style.display='none'
    document.getElementById('sidebar-box').style.display='none'

   
    console.log('by')
    }
}

addEventListener('click',sidebar_close)



var anchor_1 = document.getElementsByClassName('sidebar-anchor')[0]
var anchor_2 = document.getElementsByClassName('sidebar-anchor')[1]
var anchor_3 = document.getElementsByClassName('sidebar-anchor')[2]
var anchor_4 = document.getElementsByClassName('sidebar-anchor')[3]

function anchor_selected(e){
    if(e.target == anchor_2 || e.target == anchor_3 || e.target == anchor_4){
         document.getElementById('sidebar-area').style.display='none'
    document.getElementById('sidebar-box').style.display='none'
    }
}

addEventListener('click',anchor_selected)







 

