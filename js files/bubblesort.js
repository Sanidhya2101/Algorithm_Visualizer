async function bubble_sort()
{
    const element = document.querySelectorAll(".bar");

    for(let i=0;i<element.length-1;i++)
    {
        for(let j=0;j<element.length-i-1;j++)
        {
            element[j].style.background='yellow';
            element[j+1].style.background='yellow';

            if(parseInt(element[j].style.height)>parseInt(element[j+1].style.height))
            {
                await waitforme(delay);
                swap(element[j],element[j+1]);
            }

            element[j].style.background='coral';
            element[j+1].style.background='coral';

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
})