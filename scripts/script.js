var turn = 0;

var xIndex = 0;
var xClicked = [];

var oIndex = 0;
var oClicked = [];

function clicked(id)
{
    var cell = document.getElementById(id);

    if(cell.value !== '') return;

    if(turn % 2 === 0)
    {
        cell.value = 'x';
        xClicked[xIndex++] = id;
    }
    else
    {
        cell.value = 'o';
        oClicked[oIndex++] = id;
    }
    
    turn++;
    check();
}

function check()
{
    var winningCombinations = [
        [1,2,3],[4,5,6],[7,8,9],
        [1,4,7],[2,5,8],[3,6,9],
        [1,5,9],[3,5,7]
    ]

    var xPoints = 0;
    var oPoints = 0;

    for(var i = 0; i < 8; i++)
    {
        for(var j = 0; j < 3; j++)
        {
            if(xClicked.includes(winningCombinations[i][j]))
                ++xPoints; 
            if(oClicked.includes(winningCombinations[i][j]))
                ++oPoints;   
        }
        if(xPoints == 3)
        {
            //alert('Player 1 won!');
            setTimeout(function()
            {
                window.location.reload(true);
            },500);
        }
        if(oPoints == 3)
        {
            //alert('Player 2 won!');
            setTimeout(function()
            {
                window.location.reload(true);
            },500);
        }

        if(xClicked.length >= 5 || oClicked.length >= 5)
        {
            //alert('Remis!');
            setTimeout(function()
            {
                window.location.reload(true);
            },500);
        }

        xPoints = 0;
        oPoints = 0;
    }
}