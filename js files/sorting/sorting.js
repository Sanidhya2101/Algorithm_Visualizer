
//swap function
function swap(a,b){
    let tmp=a.style.height;
    a.style.height=b.style.height;
    b.style.height=tmp;
}



function disablesortbtn(){
    document.querySelector('.bubbleSort').disabled=true;
    document.querySelector('.insertionSort').disabled=true;
    document.querySelector('.selectionSort').disabled=true;
    document.querySelector('.mergeSort').disabled=true;
    document.querySelector('.quickSort').disabled=true;
    //document.querySelector('.heapSort').disabled=true;
}

function enablingsortbtn(){
    
    document.querySelector('.bubbleSort').disabled=false;
    document.querySelector('.insertionSort').disabled=false;
    document.querySelector('.selectionSort').disabled=false;
    document.querySelector('.mergeSort').disabled=false;
    document.querySelector('.quickSort').disabled=false;
    //document.querySelector('.heapSort').disabled=false;
}


function disableSizeSlider(){
    document.querySelector("#arr_size").disabled = true;
}

function enableSizeSlider(){
    document.querySelector("#arr_size").disabled = false;
}





function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
    document.querySelector(".reverseArray").disabled = true;
}


function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
    document.querySelector(".reverseArray").disabled = false;
}



function waitforme(milisec){

    return new Promise(resolve=>{
        setTimeout(()=>{resolve('')},milisec);
    })

}



//size of the array from slider
let Array_size = document.querySelector('#arr_size');

//event listner to update the bars int the ui
Array_size.addEventListener('input',function(){
    createNewArray(parseInt(Array_size.value));
});


let array=[];
let delay=250;

let delayElement = document.querySelector('#arr_speed');

delayElement.addEventListener('input',function(){
    delay = 300 - parseInt(delayElement.value);
});

//default array call
createNewArray();

//creating new array
function createNewArray(n=50,isreverse=false){

    //deleting old bars
    deleteChild();

    array=[];

    for(let i=0;i<n;i++)
    {
        array.push(Math.floor(Math.random()*100)+1);
    }

    if(isreverse)
    {
        array.sort((a,b)=>a-b);
        array.reverse();
    }


    const bars=document.querySelector("#bars");

    for(let i=0;i<n;i++)
    {
        const bar=document.createElement("div");
        bar.style=" margin:0% " + 0.1 + "%; background-color:#1E90FF; width:" + (100/n-(2*0.1)) + "%; height:" + (array[i]*5) + "px;";
        
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
    
}





function deleteChild(){

    const bar=document.querySelector("#bars");
    bar.innerHTML='';
}


const newArray = document.querySelector(".newArray");

newArray.addEventListener("click",function(){
    enablingsortbtn();
    enableSizeSlider();
   createNewArray(Array_size.value); 
});


const reverseArray = document.querySelector(".reverseArray");

reverseArray.addEventListener("click",function(){
    enablingsortbtn();
    enableSizeSlider();
   createNewArray(Array_size.value,true); 
});