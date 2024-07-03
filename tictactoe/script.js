const cells = document.querySelectorAll("[data-cell]");
const resetButton = document.getElementById("resetButton");
let currentPlayer = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

resetButton.addEventListener("click", resetGame);

function handleClick(e) {
  const cell = e.target;
  cell.textContent = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.addEventListener("click", handleClick, { once: true });
  });
  currentPlayer = "X";
}
