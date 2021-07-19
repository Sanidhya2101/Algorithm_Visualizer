async function selection_sort()
{
    const ele = document.querySelectorAll(".bar");

    for(let i=0;i<ele.length;i++)
    {
        let min_index=i;

        ele[i].style.background='yellow';

        for(let j=i+1;j<ele.length;j++)
        {
            ele[j].style.background='yellow';

            await waitforme(delay);

            if(parseInt(ele[j].style.height)<parseInt(ele[min_index].style.height))
            {
                if(min_index!==i)
                {
                    ele[min_index].style.background='#1E90FF';
                }
                min_index=j;
            }
            
            else
            ele[j].style.background='#1E90FF';
        }

        await waitforme(delay);
        ele[min_index].style.background='red';
        ele[i].style.background='red';
        swap(ele[min_index],ele[i]);
        
        await waitforme(delay);

        ele[min_index].style.background='#1E90FF';

        ele[i].style.background='green';

    
    }
}


const selectionbtn = document.querySelector(".selectionSort");

selectionbtn.addEventListener('click',async function(){
    disablesortbtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection_sort();

    enablingsortbtn();
    enableSizeSlider();
    enableNewArrayBtn();
});