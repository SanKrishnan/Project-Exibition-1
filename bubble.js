var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')

const BubbleSortButton = document.querySelector(".BubbleSort");
BubbleSortButton.addEventListener('click', async function () {

    // headingchange1.textContent = "Bubble Sort";
    mouseclick.play()
    selectText.innerHTML = `Bubble Sort..`
    const description = document.querySelector('#description')
    description.style.display = 'flex'
    const section = document.querySelector('#fullbody')
    section.style.height = '184vh'
    console.log('Bubble sort')
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await BubbleSort();
    // enableSortingBtn();
    // enableSizeSlider();
    enableNewArrayBtn();
})


async function BubbleSort() {
    const element = document.querySelectorAll('.bar');
    for (let i = 0; i < element.length - 1; i++) {//loop for all elements
        // beep.play()
        for (let j = 0; j < element.length - i - 1; j++) {//loop for all the elements except sorted elements
            element[j].style.background = 'black';
            element[j + 1].style.background = 'black';
            if (parseInt(element[j].style.height) > parseInt(element[j + 1].style.height)) {
                //swapping

                await waitforme(delay);
                swapping(element[j], element[j + 1]);
                beep.play()

            }

            element[j].style.background = 'beige';
            element[j + 1].style.background = 'beige';
            // element[j].style.background = 'cyan';
            // element[j + 1].style.background = 'cyan';

        }
        element[element.length - 1 - i].style.background = 'rgb(0,255,0)';
        element[element.length - 1 - i].textContent = element.length - i; // Number the sorted bar
        
    }
    // Mark the first element as sorted
    element[0].style.background = 'rgb(0,255,0)';
    element[0].textContent = 1; // Assign "1" to the smallest element
    done.play();
    selectText.innerHTML = `Sorting Complete!`;
}



       
