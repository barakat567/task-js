var counter=0;
function increment() {
    document.getElementById("demo").innerHTML=counter;
    counter++;
}
function decrement() {
    document.getElementById("demo").innerHTML=counter;
    counter--;
}
function validate(){
    var ali =document.getElementById("ahmed").value;
    var result=document.getElementById("result");
   if(isNaN(ali)){
    result.innerHTML="please enter number"

   }else if ( ali==0){
    result.innerHTML="please enter number rather than 0"

   }else if(ali<0){
    result.innerHTML="please enter  postive number"
   }else{
    result.innerHTML= ali*50;
    
   }
   return false;
   
   
   
   
   
   
    
    
}
