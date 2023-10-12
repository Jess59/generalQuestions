let isOpen=false;

function displayAnswer () {

    if(isOpen) {
        //then close it
        document.getElementById("btnPlus1").innerHTML = "+";
        document.getElementById("answer1").style.display = "none";
        isOpen=false;

    }
    else {//then open it
        document.getElementById("btnPlus1").innerHTML = "-";
        document.getElementById("answer1").style.display = "block";
        isOpen=true;

    }
}
document.getElementById("btnPlus1").addEventListener("click", displayAnswer);


//si question est ouvert
//alors
//ferme la question
//sinon
//ouvrir la question