document.addEventListener("DOMContentLoaded",function()
{
    let openModalBTN = document.getElementById("openModalBTN")
    let closeModalBTN =document.getElementById("closeModalBTN")
    let modal=document.getElementById("myModal")
    //open the modal
    openModalBTN.addEventListener("click",function()
{
    modal.style.display ="block";
});
   //close the modal
   closeModalBTN.addEventListener("click",function()
{
    modal.style.display ="none";
});
 
//close the modal if user outside the modal

   window.addEventListener("click",function(event){
  if (event.target===modal){
    modal.style.display="none";
  }
   }
);

});