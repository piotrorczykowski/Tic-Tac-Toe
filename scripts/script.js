var turn = 0;
var xCellCliked = '';
var oCellCliked = '';

function clicked(id)
{
    var cell = document.getElementById(id);

    if(cell.value !== '') return;

    if(turn % 2 === 0)
    {
        cell.value = 'x';
        xCellCliked += id
    }
    else
    {
        cell.value = 'o';
        oCellCliked += id;
    }
    
    turn++;
    check();
}

function check()
{
    var winningCombinations = ['123','456','789','147','258','369','159','357']

    winningCombinations.forEach(element => {
        alert(xCellCliked.includes(element));
    });
}