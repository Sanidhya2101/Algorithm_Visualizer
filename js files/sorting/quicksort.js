
async function partitionindex(ele,start,end)
{
    let i=start-1;

    ele[end].style.background='red';

    for(let j=start;j<=end-1;j++)
    {
        ele[j].style.background='yellow';

        await waitforme(delay);

        if(parseInt(ele[j].style.height)<parseInt(ele[end].style.height))
        {
            i++;

            if(i!=j)
            {    
                ele[i].style.background='yellow';
                await waitforme(delay);
                swap(ele[i],ele[j]);

            }
            ele[i].style.background='pink';

            if(i!=j)
            ele[j].style.background='#FF1493';

        }
        else
        {
            ele[j].style.background='#FF1493';
        }
    }

    i++;

    

    await waitforme(delay);

    ele[end].style.background='red';
    ele[i].style.background='red';

    
    swap(ele[i],ele[end]);

    await waitforme(delay);
    ele[end].style.background='#FF1493';
    ele[i].style.background='green';

    await waitforme(delay);

    for(let k=0;k<ele.length;k++)
    {
        if(ele[k].style.background!='green')
        {
            ele[k].style.background='#1E90FF';
        }
    }

    return i;

}



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
        await waitforme(delay);
        if(start>=0 && end<ele.length && start<ele.length && end>=0)
        {
            ele[start].style.background = 'green';
            ele[end].style.background = 'green';
        }
    }

}

const quicksortbtn = document.querySelector(".quickSort");

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