document.getElementById("c_d").addEventListener("input", function(e) {
    document.getElementById("diff").innerText = Data.difficulty[this.value];
    Settings.difficulty = this.value;
    if (this.value == 4) {
        document.body.classList.add("dead");
    } else if (document.body.classList.contains("dead")) {
        document.body.classList.remove("dead")
    }
});


document.querySelectorAll(".monstre_s").forEach((element) => {
    element.addEventListener("click", function() {
        Settings.monstre = element.dataset.montre;
        if (this.classList.contains("choisi_m")) {
            return;
        } else {
            document.querySelector(".choisi_m").classList.remove("choisi_m")
            this.classList.add("choisi_m")
        }
    })
});


document.querySelectorAll(".mouse_c").forEach((element) => {
    element.addEventListener("click", function() {
        Settings.mode =  element.dataset.mode;
        if (this.classList.contains("choisi_s")) {
            return;
        } else {
            document.querySelector(".choisi_s").classList.remove("choisi_s")
            this.classList.add("choisi_s")
        }
    })
});



game = null;
document.getElementById("start").addEventListener("click", function() {
    if (game == null) {
        document.querySelector("#start p").innerText =  "STOP";
        game =  new Game();
    } else {
        document.querySelector("#start p").innerText =  "START";
        game.gameover();
        game = null;
    }
})


document.getElementById("btn").addEventListener("click", function() {
    var o = document.getElementById("histo");
    if (o.classList.contains("none")) {
        o.classList.remove("none");
    } else {
        o.classList.add("none");
    }
})