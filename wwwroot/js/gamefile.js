
function dicegame() {

    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var value1;
    var value2;

    function dice1(){ 
        if (randomNumber1 == 1) {  
            $(".img1").attr("src", "~/img/dice1.png");
            value1 = 1;
            return value1;
        }

        else if (randomNumber1 == 2) {  
            document.querySelector(".img1").setAttribute("src", "~/img/dice2.png");
            value1 = 2;
            return value1;
        }

        else if (randomNumber1 == 3) {  
            document.querySelector(".img1").setAttribute("src", "~/img/dice3.png");
            value1 = 3;
            return value1;
        }

        else if (randomNumber1 == 4) {  
            document.querySelector(".img1").setAttribute("src", "~/img/dice4.png")
            value1 = 4;
            return value1;
        }

        else if (randomNumber1 == 5) {  
            document.querySelector(".img1").setAttribute("src", "~/img/dice5.png")
            value1 = 5;
            return value1;
        }

        else if (randomNumber1 == 6) {  
            document.querySelector(".img1").setAttribute("src", "~/img/dice6.png")
            value1 = 6;
            return value1;
        }
    }

    dice1();

    function dice2(){
        if (randomNumber2 == 1) {  
            document.querySelector(".img2").setAttribute("src", "~/img/dice1.png")
            value2 = 1;
            return value2;
        }

        else if (randomNumber2 == 2) {  
            document.querySelector(".img2").setAttribute("src", "~/img/dice2.png")
            value2 = 2;
            return value2;
        }

        else if (randomNumber2 == 3) {  
            document.querySelector(".img2").setAttribute("src", "~/img/dice3.png")
            value2 = 3;
            return value2;
        }

        else if (randomNumber2 == 4) {  
            document.querySelector(".img2").setAttribute("src", "~/img/dice4.png")
            value2 = 4;
            return value2;
        }

        else if (randomNumber2 == 5) {  
            document.querySelector(".img2").setAttribute("src", "~/img/dice5.png")
            value2 = 5;
            return value2;
        }
        
        else if (randomNumber2 == 6) {  
            document.querySelector(".img2").setAttribute("src", "~/img/dice6.png")
            value2 = 6;
            return value2;
        }
    }

    dice2();

    if (value1 > value2) {
        document.querySelector("h1").innerHTML = `PLAYER 1 WINS! ${value1} is bigger than ${value2}`;
    } else if (value1 < value2) {
        document.querySelector("h1").innerHTML = `PLAYER 2 WINS! ${value2} is bigger than ${value1}`;
    } else if (value1 == value2) {
        document.querySelector("h1").innerHTML = "DRAW GAME!";
    };









}






























