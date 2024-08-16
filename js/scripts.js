const startButton = document.getElementById('start-button');

startButton.addEventListener ('click', function (){

    const gridContainer = document.getElementById('grid-container');

    const diffLevels = document.getElementById('levels');
    console.log(diffLevels.value);

    let numberCells = 100;
    
    if (diffLevels.value == '2') {
        numberCells = 81;
    }
    else if (diffLevels.value == '3') {
        numberCells = 49;
    }

    
    /* Sintassi alternativa
    
    switch (diffLevels.value) {
        case '2':
            numberCells = 81;
            break;

        case '3':
            numberCells = 49;
            break;

        default:
            numberCells = 100;
            break;
    }*/

    gridContainer.innerHTML = '';

    for (let i = 1; i <= numberCells; i++) {

        const newCell = document.createElement('div');
        newCell.innerHTML = i;

        /* Sintassi alternativa*/
    
        /*switch (numberCells) {
            case 81:
                newCell.classList.add('medium');
                break;

            case 49:
                newCell.classList.add('hard');
                break;

            default:
                newCell.classList.add('easy');
                break;
        }*/

        if (numberCells == 100){
            newCell.classList.add('easy');
        }
        else if (numberCells == 81){
            newCell.classList.add('medium');
        }
        else if (numberCells == 49){
            newCell.classList.add('hard');
        }

        newCell.addEventListener ('click', function (){
            //console.log('this', this, typeof this);

            this.classList.add('click-card');
            console.log(i);
        })

        gridContainer.append(newCell);
    }
})
