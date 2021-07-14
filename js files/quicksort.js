const quicksortbtn = document.querySelector(".quickSort");





async function quick_sort(ele,start,end)
{
    if(start<end)
    {
        let pivot = await partitionindex(ele,start,end);
        await quick_sort(ele,start,pivot-1);
        await quick_sort(ele,pivot+1,end);
    }
    else
    {
        if(start>=0 && end<ele.length && start<ele.length && end>=0)
        {
            ele[start].style.background = 'green';
            ele[end].style.background = 'green';
        }
    }

}


quicksortbtn.addEventListener('click',async function(){
    
    let ele = document.querySelectorAll(".bar");
    let start=0;
    let end=ele.length-1;
    
    disablesortbtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quick_sort(ele,start,end);

    enablingsortbtn();
    enableSizeSlider();
    enableNewArrayBtn();
})