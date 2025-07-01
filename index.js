let scoreStr = localStorage.getItem("score");
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };
  score.displayScore = function () {
    return `Score Won : ${score.win} Lost : ${score.lost} Tie: ${score.tie}`;
  };
  showResult();
}

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber >= 0 && randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}
function generateResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Bat") {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === "Ball") {
      score.win++;
      return `User won`;
    } else {
      score.lost++;
      return `Computer won`;
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Bat") {
      score.lost++;
      return `Computer won`;
    } else if (computerMove === "Ball") {
      score.tie++;
      return `It's a tie`;
    } else {
      score.win++;
      return `User won`;
    }
  } else {
    if (computerMove === "Bat") {
      score.win++;
      return `User won`;
    } else if (computerMove === "Ball") {
      score.lost++;
      return `Computer won`;
    } else {
      score.tie++;
      return `It's a tie`;
    }
  }
}
function showResult(userMove, computerMove, result) {
  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector("#user-move").innerHTML = userMove
    ? `User Move : ${userMove}`
    : " ";
  document.querySelector("#computer-move").innerHTML = computerMove
    ? `Computer Move : ${computerMove}`
    : " ";
  document.querySelector("#display-result").innerHTML = result
    ? `Winner : ${result}`
    : " ";
  document.querySelector("#score-card").innerHTML = score.displayScore();
}
