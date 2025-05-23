function clearDisplay(){
     let display=document.getElementById('display');
   display.value=" ";

}

function deletelast(){
    let display =document.getElementById("display");
    display.value=display.value.slice(0,-1);

}


function appendtodisplay(value){
    let display=document.getElementById("display");
   display.value=display.value + value;
   console.log(value);
}

function calculateresult(){
    try{
    let result=eval(document.getElementById("display").value);
    console.log(result);
    document.getElementById("display").value=result;

    }
    catch(error){
        console.log(error);
    }
}