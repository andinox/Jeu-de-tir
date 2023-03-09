class Game {
    score = 0;
    state = true; // true = playing, false = game over
    time = 0;
    game_area;


    constructor() {
        this.game_area   = document.getElementById("terrain_de_jeu");
        this.monstre_img = Data.monstre[Settings.monstre];
        this.game_mode   = Settings.mode;
        this.difficulty  = Settings.difficulty;
        this.time        = Settings.spawntime - (100*(parseInt(this.difficulty)+1));
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
            var p = document.createElement("p")
            var div = document.createElement("div")
            var logs = {
              0 :  this.getDateFormatted(),   //date
              1 :  Data.difficulty[this.difficulty], //difficulty
              2 :  this.monstre_img, //monstre
              3 :  Settings.mode, //mode
              4 :  this.score
            }

            

            for(let i=0;i<=4;i++) {
                var new_p = p.cloneNode(false);
                new_p.appendChild(document.createTextNode(logs[i]))
                div.appendChild(new_p);
            }
            
            
            
            document.getElementById("histo").appendChild(div)

            
            clearInterval(this.spawn);
            this.score = -1;
            btn_start("game")
            this.updateScore()
            this.game_area.innerHTML = "";
            this.state = false;

        }
    }


    //return un date de la forme 'heure:minute J/M/AAAA'
    getDateFormatted() {
        var date = new Date();
        var minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()
        var hours = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours()
        return `${hours}h${minutes} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      }


}