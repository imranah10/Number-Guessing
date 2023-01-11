const guess = (x) => {
  var wsound = new Audio("w.mp3");
  var lsound = new Audio("l.mp3");
  wsound.currentTime=0;
  lsound.currentTime=0;
  var para = document.querySelector("p");
  var winningNum = document.getElementById("winOpt");
  var input = (document.getElementById("inputval").innerText =
    "you click: " + x.value);
  var randomNumber = Math.ceil(Math.random() * 4);
  winningNum.innerText = "winning no:" + randomNumber;
  if (randomNumber == x.value) {
    para.innerText = "YOU WON!..";
    para.style.color = "green";
    wsound.play();
    lsound.pause();
  } else {
    para.innerText = "YOU LOST!..";
    para.style.color = "red";
    lsound.play();
    wsound.pause();
  }
};
