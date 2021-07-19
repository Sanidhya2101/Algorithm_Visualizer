async function bubble_sort()
{
    const element = document.querySelectorAll(".bar");

    for(let i=0;i<element.length-1;i++)
    {
        for(let j=0;j<element.length-i-1;j++)
        {
            
            element[j].style.background='yellow';
            element[j+1].style.background='yellow';
            await waitforme(delay);
            if(parseInt(element[j].style.height)>parseInt(element[j+1].style.height))
            {
                
                element[j].style.background='red';
                element[j+1].style.background='red';
                await waitforme(delay);
                swap(element[j],element[j+1]);

            }

            await waitforme(delay);
            element[j].style.background='#1E90FF';
            element[j+1].style.background='#1E90FF';

        }

        element[element.length-i-1].style.background='green';
    }

    element[0].style.background='green';
} 


const bubblesort_btn = document.querySelector(".bubbleSort");

bubblesort_btn.addEventListener('click',async function(){
    disablesortbtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble_sort();

    enablingsortbtn();
    enableSizeSlider();
    enableNewArrayBtn();
});