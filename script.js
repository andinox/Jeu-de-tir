window.addEventListener("load", function() {
	new Game();
})


class Game {
    score = 0;
    state = true; // true = playing, false = game over
    time = 0;
    game_area = document.getElementById("terrain_de_jeu");


    constructor() { 
        for(var i = 0; i < 5; i++) {
            this.game_area.appendChild(new Monstre(5000,this).element);
        }
        this.spawn = setInterval(() => {
            this.game_area.appendChild(new Monstre(5000,this).element);
            this.time++;
        },250)
    }   
        

    updateScore() {
        this.score++;
        document.getElementById("score").innerText = `Score: ${this.score}`;
    }

    gameover() {
        if (this.state) {
            this.game_area.remove();
            clearInterval(this.spawn);

            var h1 = document.createElement("h1");
            h1.innerText = "Game Over";
            h1.classList.add("Game_Over");
            document.body.appendChild(h1);
            this.state = false;
        }
    }


}