//This defines the variables that I am going to use in the functions that contain
//give each player a turn, determine the winner, and announce the winner.

let currentPlayer = 'X';
  let gameActive = true;
  let cells = document.querySelectorAll('td');
  const turnDisplay = document.getElementById('turn');
  const winnerDisplay = document.getElementById('winner');

  function handleCellClick(cell) {
    if (gameActive && !cell.textContent) {
      cell.textContent = currentPlayer;
      if (checkWinner()) {
        winnerDisplay.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
      } else if (checkTie()) {
        winnerDisplay.textContent = 'It\'s a tie!';
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        turnDisplay.textContent = `Player ${currentPlayer}'s turn`;
      }
    }
  }

  //This function defines the array that outlines all the winning combinations of the game.
    function checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
      ];

      return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
      });
    }

    function checkTie() {
    return Array.from(cells).every(cell => cell.textContent !== '');
  }
//This function resets the game when you click the Restart button; for some reason it only
//will not populate the X or O in the cells after the player clicks the reset button. 
  function resetGame() {
    document.querySelectorAll('td').forEach(cell => {
      cell.textContent = '';
    });
    currentPlayer = 'X';
    turnElement.textContent = `Player ${currentPlayer}'s Turn`;
  }