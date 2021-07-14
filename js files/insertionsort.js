async function insertion_sort()
{
    const ele = document.querySelectorAll(".bar");

    ele[0].style.background = 'green';

    for(let i=0;i<ele.length;i++)
    {
        let j=i-1;

        let key=ele[i].style.height;

        ele[i].style.background='purple';

        await waitforme(delay);

        while(j>=0 && (parseInt(ele[j].style.height)>parseInt(key)))
        {
            ele[j].style.background='purple';
            
            ele[j+1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            for(let k =i;k>=0;k--)
            ele[k].style.background='green';
        }

        ele[j+1].style.height=key;

        ele[i].style.background='green';
    }
}

const sortbtn = document.querySelector(".insertionSort");

sortbtn.addEventListener('click',async function(){
    disablesortbtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion_sort();

    enablingsortbtn();
    enableSizeSlider();
    enableNewArrayBtn();
});