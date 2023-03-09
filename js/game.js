class Game {
    score = 0;
    state = true; // true = playing, false = game over
    time = 0;
    game_area;


    constructor() {
        this.game_area = document.getElementById("terrain_de_jeu");
        this.monstre_img = Data.monstre[Settings.monstre];
        this.game_mode = Settings.mode;
        this.difficulty = Settings.difficulty;
        this.time =1000-(100*(parseInt(this.difficulty)+1));
        console.log(this.time)
        this.start()
    }   
    
    start() {
        this.spawn = setInterval(() => {
            this.game_area.appendChild(new Monstre(this))
        }, this.time)
    }

    updateScore() {
        this.score++;
        document.getElementById("score").innerText = this.score;
    }

    gameover() {
        if (this.state) {
            

            var log = document.createElement("div");
            log.innerHTML =  `<p>${this.getDateFormatted()}</p><p>${Data.difficulty[this.difficulty]}</p><p>${this.monstre_img}</p><p>${Settings.mode}</p><p>${this.score}</p>`
            document.getElementById("histo").appendChild(log)

            console.log("ddd")
            clearInterval(this.spawn);
            document.querySelector("#start p").innerText =  "START";
            this.score = -1;
            this.updateScore()
            this.game_area.innerHTML = "";
            this.state = false;

        }
    }

    getDateFormatted() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
      
        // Ajouter un zéro devant les minutes si elles sont inférieures à 10
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
      
        // Ajouter un zéro devant les heures si elles sont inférieures à 10
        if (hours < 10) {
          hours = '0' + hours;
        }
      
        // Retourner la date formatée
        return hours + 'h' + minutes + ' ' + day + '/' + month + '/' + year;
      }


}