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

function displayMessage(string)
{
    var message = document.createElement("div");
    message.classList.add('message')
    var anchor = document.getElementById('container');

    message.innerHTML = '<h1>' + string +'</h1>'
    anchor.id = 'hide';
    setTimeout(function()
    {
    document.body.insertBefore(message,anchor), anchor.style.display='none';
    }, 300);

    setTimeout(function()
    {
        window.location.reload(true);
    },1000);
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
            setTimeout(function()
            {
                displayMessage('Player 1 won!');
            },200);
        }
        if(oPoints == 3)
        {
            setTimeout(function()
            {
                displayMessage('Player 2 won!');
            },200);
        }

        if(xClicked.length >= 5 || oClicked.length >= 5)
        {
            setTimeout(function()
            {
                displayMessage('Remis!');
            },200);
        }

        xPoints = 0;
        oPoints = 0;
    }
}