//your JS code here. If required.
function getLevel(ele,num){
   if(!ele.parentNode){
    return num;
   } 

   return getLevel(ele.parentNode,num+1)
   


}
const eleToFind=document.getElementById("level");
alert(getLevel(eleToFind,0));