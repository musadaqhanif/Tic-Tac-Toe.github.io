function values_decision() {
  var b1 = document.getElementById("b1").value;
  var b2 = document.getElementById("b2").value;
  var b3 = document.getElementById("b3").value;
  var b4 = document.getElementById("b4").value;
  var b5 = document.getElementById("b5").value;
  var b6 = document.getElementById("b6").value;
  var b7 = document.getElementById("b7").value;
  var b8 = document.getElementById("b8").value;
  var b9 = document.getElementById("b9").value;

  var player1 = document.getElementById("name1").value;
  var player2 = document.getElementById("name2").value;

  if (
    (b1 == "x" && b2 == "x" && b3 == "x") ||
    (b1 == "X" && b2 == "X" && b3 == "X")
  ) {
    document.getElementById("winner").innerHTML = player1 + "" + "won the game";

    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b4 == "x" && b5 == "x" && b6 == "x") ||
    (b4 == "X" && b5 == "X" && b6 == "X")
  ) {
    document.getElementById("winner").innerHTML = player1 + " " + "won the game";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b7 == "x" && b8 == "x" && b9 == "x") ||
    (b7 == "X" && b8 == "X" && b9 == "X")
  ) {
    document.getElementById("winner").innerHTML = player1 + " " + "won the game";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
  } else if (
    (b1 == "x" && b4 == "x" && b7 == "x") ||
    (b1 == "X" && b4 == "X" && b7 == "X")
  ) {
    document.getElementById("winner").innerHTML = player1 + " " + "won the game";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b2 == "x" && b5 == "x" && b8 == "x") ||
    (b2 == "X" && b5 == "X" && b8 == "X")
  ) {
    document.getElementById("winner").innerHTML = player1 + " " + "won the game";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b3 == "x" && b6 == "x" && b9 == "x") ||
    (b3 == "X" && b6 == "X" && b9 == "X")
  ) {
    document.getElementById("winner").innerHTML = player1 + " " + "won the game";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
  } else if (
    (b1 == "x" && b5 == "x" && b9 == "x") ||
    (b1 == "X" && b5 == "X" && b9 == "X")
  ) {
    document.getElementById("winner").innerHTML = player1 + " " + "won the game";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
  } else if (
    (b3 == "x" && b5 == "x" && b7 == "x") ||
    (b3 == "X" && b5 == "X" && b7 == "X")
  ) {
    document.getElementById("winner").innerHTML = player1 + " " + "won the game";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  }
  //for second player
  else if (
    (b1 == "o" && b2 == "o" && b3 == "o") ||
    (b1 == "O" && b2 == "O" && b3 == "O")
  ) {
    document.getElementById("winner").innerHTML = player2 + " " + "won the game";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b4 == "o" && b5 == "o" && b6 == "o") ||
    (b4 == "O" && b5 == "O" && b6 == "O")
  ) {
    document.getElementById("winner").innerHTML = player2 + " " + "won the game";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b7 == "o" && b8 == "o" && b9 == "o") ||
    (b7 == "O" && b8 == "O" && b9 == "O")
  ) {
    document.getElementById("winner").innerHTML = player2 + " " + "won the game";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
  } else if (
    (b1 == "o" && b4 == "o" && b7 == "o") ||
    (b1 == "O" && b4 == "O" && b7 == "O")
  ) {
    document.getElementById("winner").innerHTML = player2 + " " + "won the game";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b2 == "o" && b5 == "o" && b8 == "o") ||
    (b2 == "O" && b5 == "O" && b8 == "O")
  ) {
    document.getElementById("winner").innerHTML = player2 + " " + "won the game";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b3 == "o" && b6 == "o" && b9 == "o") ||
    (b3 == "O" && b6 == "O" && b9 == "O")
  ) {
    document.getElementById("winner").innerHTML = player2 + " " + "won the game";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
  } else if (
    (b1 == "o" && b5 == "o" && b9 == "o") ||
    (b1 == "O" && b5 == "O" && b9 == "O")
  ) {
    document.getElementById("winner").innerHTML = player2 + " " + "won the game";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
  } else if (
    (b3 == "o" && b5 == "o" && b7 == "o") ||
    (b3 == "O" && b5 == "O" && b7 == "O")
  ) {
    document.getElementById("winner").innerHTML = player2 + " " + "won the game";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  }
}


flag = 1;
function myfun_1() {
  if (flag == 1) {
    document.getElementById("b1").value = "X";
    document.getElementById("b1").disabled = true;
    flag = 0;
  } 
  else  {
    document.getElementById("b1").value = "O";
    document.getElementById("b1").disabled = true;
    flag = 1;
  }
}

function myfun_2() {
  if (flag == 1) {
    document.getElementById("b2").value = "X";
    document.getElementById("b2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b2").value = "O";
    document.getElementById("b2").disabled = true;
    flag = 1;
  }
}

function myfun_3() {
  if (flag == 1) {
    document.getElementById("b3").value = "X";
    document.getElementById("b3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b3").value = "O";
    document.getElementById("b3").disabled = true;
    flag = 1;
  }
}

function myfun_4() {
  if (flag == 1) {
    document.getElementById("b4").value = "X";
    document.getElementById("b4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b4").value = "O";
    document.getElementById("b4").disabled = true;
    flag = 1;
  }
}
function myfun_5() {
  if (flag == 1) {
    document.getElementById("b5").value = "X";
    document.getElementById("b5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b5").value = "O";
    document.getElementById("b5").disabled = true;
    flag = 1;
  }
}
function myfun_6() {
  if (flag == 1) {
    document.getElementById("b6").value = "X";
    document.getElementById("b6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b6").value = "O";
    document.getElementById("b6").disabled = true;
    flag = 1;
  }
}
function myfun_7() {
  if (flag == 1) {
    document.getElementById("b7").value = "X";
    document.getElementById("b7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b7").value = "O";
    document.getElementById("b7").disabled = true;
    flag = 1;
  }
}
function myfun_8() {
  if (flag == 1) {
    document.getElementById("b8").value = "X";
    document.getElementById("b8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b8").value = "O";
    document.getElementById("b8").disabled = true;
    flag = 1;
  }
}

  function myfun_9() {
    if (flag == 1) {
      document.getElementById("b9").value = "X";
      document.getElementById("b9").disabled = true;
      flag = 0;
    }
     else {
      document.getElementById("b9").value = "O";
      document.getElementById("b9").disabled = true;
      flag = 1;
    }
  }

// Function to reset game
function reset() {
  location.reload();
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("b4").value = "";
  document.getElementById("b5").value = "";
  document.getElementById("b6").value = "";
  document.getElementById("b7").value = "";
  document.getElementById("b8").value = "";
  document.getElementById("b9").value = "";
}
