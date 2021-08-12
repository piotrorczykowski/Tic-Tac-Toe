var turn = 0;

function clicked(id)
{
    var cell = document.getElementById(id);

    if(cell.value !== '') return;

    if(turn % 2 === 0)
        cell.value = 'x';
    else
        cell.value = 'o';
    
    turn++;
}