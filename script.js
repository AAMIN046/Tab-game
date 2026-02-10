let score = 0;
let time = 30;
let gameOver = false;

function tap() {
  if (gameOver) return;

  score++;
  document.getElementById("score").innerText = score;
}

let timer = setInterval(() => {
  time--;
  document.getElementById("time").innerText = time;

  if (time === 0) {
    clearInterval(timer);
    gameOver = true;
    document.getElementById("tapBtn").disabled = true;
    document.getElementById("msg").innerText =
      "⏹️ Game Over! Your Score: " + score;
  }
}, 1000);
