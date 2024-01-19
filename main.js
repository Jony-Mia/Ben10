let box1=document.querySelector(".sp1");
let box2=document.querySelector(".sp2");
let box3=document.querySelector(".sp3");
let box4=document.querySelector(".sp4");
let box5=document.querySelector(".sp5");
let box6=document.querySelector(".sp6");
let box7=document.querySelector(".sp7");
let num= [1,2,3,4,5,6,7,8,9,0];
  setInterval(bit,1000)
 function bit(){
  

 switch (num[Math.floor(Math.random()*num.length)]) {
  case 9:
   
    box5.style.opacity='0'
    box4.style.opacity='1'
    box3.style.opacity='1'
    box2.style.opacity='1'
    box1.style.opacity='1'
    box6.style.opacity='1'
    box7.style.opacity='1'
    
    break;
    case 8:
      
    box1.style.opacity='1'
    box2.style.opacity='1'
    box3.style.opacity='1'
    box4.style.opacity='1'
    box5.style.opacity='1'
    box6.style.opacity='1'
    box7.style.opacity='1'
    

      break;
    
    case 7:
      
    box1.style.opacity='1'
    box2.style.opacity='0'
    box3.style.opacity='1'
    box4.style.opacity='0'
    box5.style.opacity='0'
    box6.style.opacity='1'
    box7.style.opacity='0'
    

      break;
    case 6:

    
    box1.style.opacity='1'
    box2.style.opacity='1'
    box3.style.opacity='0'
    box4.style.opacity='1'
    box5.style.opacity='1'
    box6.style.opacity='1'
    box7.style.opacity='1'
    
    
      break;
    case 5:
   
    
    box1.style.opacity='1'
    box2.style.opacity='1'
    box3.style.opacity='0'
    box4.style.opacity='1'
    box5.style.opacity='0'
    box6.style.opacity='1'
    box7.style.opacity='1'
    
      break;
      
      
    case 4:
      
    
    box1.style.opacity='0'
    box2.style.opacity='1'
    box3.style.opacity='1'
    box4.style.opacity='1'
    box5.style.opacity='0'
    box6.style.opacity='1'
    box7.style.opacity='0'
    
      
      
      break;
    case 3:
    
      
      
    box1.style.opacity='1'
    box2.style.opacity='0'
    box3.style.opacity='1'
    box4.style.opacity='1'
    box5.style.opacity='0'
    box6.style.opacity='1'
    box7.style.opacity='1'
    
      break;
    case 2:
      
     
    box1.style.opacity='1'
    box2.style.opacity='0'
    box3.style.opacity='1'
    box4.style.opacity='1'
    box5.style.opacity='1'
    box6.style.opacity='0'
    box7.style.opacity='1'
    
      
      break;
    case 1:
        
        
    box1.style.opacity='0'
    box2.style.opacity='0'
    box3.style.opacity='1'
    box4.style.opacity='0'
    box5.style.opacity='0'
    box6.style.opacity='1'
    box7.style.opacity='0'
    
      break;
    case 0:
    box1.style.opacity='1'
    box2.style.opacity='1'
    box3.style.opacity='1'
    box4.style.opacity='0'
    box5.style.opacity='1'
    box6.style.opacity='1'
    box7.style.opacity='1'
    
      break;
    default:
    alert("No number found")
 
}

}