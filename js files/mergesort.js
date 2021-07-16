
async function merge(ele,start,mid,end)
{
    
    const n1 = mid-start+1;
    const n2= end-mid;

    let left  = new Array(n1);
    let right = new Array(n2);


    for(let i=0;i<n1;i++)
    {
        await waitforme(delay);

        ele[start+i].style.background = 'yellow';
        left[i]=ele[start+i].style.height;
    }

    for(let i=0;i<n2;i++)
    {
        await waitforme(delay);

        ele[mid+i+1].style.background = 'yellow';
        right[i]=ele[mid+i+1].style.height;
    }

    await waitforme(delay);

    let i=0,j=0,k=start;

    while(i<n1 && j<n2)
    {
        await waitforme(delay);

        if(parseInt(left[i])<=parseInt(right[j]))
        {
            if((n1+n2)===ele.length)
            {
                ele[k].style.background='green';

            }
            else
            {
                ele[k].style.background='lightgreen';
            }

            ele[k].style.height=left[i];
            i++;
            k++;
        }
        else
        {
            if((n1+n2) === ele.length)
            {
                ele[k].style.background='green';
            }
            else
            {
                ele[k].style.background='lightgreen';
            }

            ele[k].style.height=right[j];
            k++;
            j++;
            
        }
    }

    while(i<n1)
    {
        await waitforme(delay);

        if(n1+n2 === ele.length)
        ele[k].style.background = 'green';
        else
        ele[k].style.background = 'lightgreen';

        ele[k].style.height=left[i];
        i++;
        k++;
    }
    
    
    while(j<n2)
    {
        await waitforme(delay);

        if(n1+n2 === ele.length)
        ele[k].style.background = 'green';
        else
        ele[k].style.background = 'lightgreen';

        ele[k].style.height=right[j];
        j++;
        k++;
    }

}


async function merge_sort(ele,start,end)
{
    if(start>=end)
    return;

    const mid = start + Math.floor((end-start)/2);

    await waitforme(delay);
    ele[mid].style.background='#FF1493';

    await merge_sort(ele,start,mid);
    await merge_sort(ele,mid+1,end);

    await merge(ele,start,mid,end);
    
}

const mergesortbtn = document.querySelector(".mergeSort");

mergesortbtn.addEventListener('click',async function(){
    
    
    let ele = document.querySelectorAll('.bar');
    let start=0;
    let end=parseInt(ele.length)-1;
    
    disablesortbtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await merge_sort(ele,start,end);
    enablingsortbtn();
    enableSizeSlider();
    enableNewArrayBtn();
});