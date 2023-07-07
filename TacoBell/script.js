
document.getElementById('one').addEventListener('click',one);
document.getElementById('two').addEventListener('click',two);
document.getElementById('three').addEventListener('click',three);
function one(){
  document.getElementById('slideimage').src='image/1370x720_XBox_Hardik_Website_Desktop_Home_Page_Banner.jpeg';
}
function two(){
  document.getElementById('slideimage').src='image/BBB-Website-Home-Page-Desktop-Banner-1370x720.png';
}
function three(){
  document.getElementById('slideimage').src='image/banner2.jpeg';
}
  // setInterval(one,2000);
  // setInterval(two,3000);
  // setInterval(three,2000);

function foodDisplay(){
  let x=   document.getElementById('fooddisplay');
     if(x.style.display==='block'){
         x.style.display='none';
     }else{
         x.style.display='block';
     }
 }

 let slidesRes=document.querySelector('.resItem').children;
 let rightNext=document.querySelector('.right');
 let leftPrev=document.querySelector('.left');
 let totalRes=slidesRes.length;
 let indexRes=0;
 rightNext.onclick=function(){
     next('next');
 }
 leftPrev.onclick=function(){
     next('prev');
 }
 function next(direction){
     if(direction=="next"){
         indexRes++;
         if(indexRes==totalRes){
             indexRes=0
         }
     }
     else{
         if(indexRes==0){
             indexRes=totalRes-1;
         }
         else{
             indexRes--;
         }
     }
     for(i=0;i<slidesRes.length;i++){
         slidesRes[i].classList.remove('actives');
     }
     slidesRes[indexRes].classList.add('actives');
 }

 
  