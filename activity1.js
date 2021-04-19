SCORE=0;
function update() {
  SCORE=SCORE+1 ;
  document.getElementById("h1!").innerHTML="SCORE: "+SCORE;
}

function save_score() {
    localStorage.setItem("score",SCORE);
}

function next_page() {
    window.location="activity_2.html";
}