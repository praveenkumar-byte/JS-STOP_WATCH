const h2=document.getElementById("h2");
h2.innerHTML="STOP-WATCH WITH JAVASCRIPT";
h2.style.color="red";
h2.style.backgroundColor="black";

var sec=00;
var tens=00;

var appendsec=document.getElementById("seconds");
var appendtens=document.getElementById("tens");
var b1=document.getElementById("b1");
var b2=document.getElementById("b2");
var b3=document.getElementById("b3");


var intervel;
function start(){
   tens++;
   if(tens<9){
      appendtens.innerHTML="0"+tens;
   }
   if(tens>9){
      appendtens.innerHTML=tens;
   }
   if(tens>99){
      sec++;
      appendsec.innerHTML="0" + sec;
      tens=0;
      appendtens.innerHTML="0" + 0;
   }
   if(sec>9){
      appendsec.innerHTML=sec;
   }
}
b1.onclick=function(){
   intervel=setInterval(start);
};
b3.addEventListener("click",function(){
   clearInterval(intervel);
});

b2.addEventListener("click",function(){
   clearInterval(intervel);
   tens="00";
   sec="00";
   appendsec.innerHTML=tens;
   appendtens.innerHTML=sec;
})