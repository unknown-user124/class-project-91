player_1_name=localStorage.getItem("player_1_name");
player_2_name=localStorage.getItem("player_2_name");

player_1_score= 0;
player_2_score= 0;

document.getElementById("player1name").innerHTML=player_1_name+" :";
document.getElementById("player2name").innerHTML=player_2_name+" :";
document.getElementById("player1score").innerHTML=player_1_score;
document.getElementById("player2score").innerHTML=player_2_score;
document.getElementById("playerquestion").innerHTML="Question turn-"+player_1_name;
document.getElementById("playeranswer").innerHTML="Answer turn-"+player_2_name;

function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lowerCase="+word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);

    
    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
     remove_charAt2 = remove_charAt1.replace(charAt2, "_");
      remove_charAt3 = remove_charAt2.replace(charAt3, "_");
       console.log(remove_charAt3); 

       question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
        input_box = "<br>Answer : <input type='text' id='input_check_box'>";
         check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
          row = question_word + input_box + check_button ;
           document.getElementById("output").innerHTML = row;
     document.getElementById("word").value = "";

}