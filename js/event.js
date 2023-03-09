/*
Gestion d'event.
*/


//Gestion de la difficulté du jeu
document.getElementById("c_d").addEventListener("input", function(e) {

    //En function du nombre dans l'input de type range la difficulté change.
    document.getElementById("diff").innerText = Data.difficulty[this.value]; 
    //On save la difficulté dans les paramètres
    Settings.difficulty = this.value; 

    //Easter egg pour la difficulté max
    //On change le fond d'ecran si la difficulté est ELDEN RING
    if (this.value == 4) {
        document.body.classList.add("dead");
    } else if (document.body.classList.contains("dead")) {
        document.body.classList.remove("dead")
    }
});


//Gestion de l'image du monstre
/**
 * Chaque image de monstre dans la zone de paramètres à
 * la class "monstre_s". Je recupe chaqu'un d'entre eux
 * et leurs assigne un evenement de click.
 */
document.querySelectorAll(".monstre_s")
    .forEach((element) => {
        element.addEventListener("click", function() {
            if (!this.classList.contains("choisi_m")) { //on verif qu'on ne click pas sur le monstre déjà sélectionne 
                Settings.monstre = element.dataset.montre; //on save le monstre dans les paramètres

                //On supprime au monstre anciennement sélectionne le fait d'être sélectionne
                document.querySelector(".choisi_m").classList.remove("choisi_m")

                //On ajoute au montre selectionée le fait d'être sélectionne
                this.classList.add("choisi_m")
            }
    })
});

//Gestion du type d'action sur un monstre
/**
 * La meme chose que pour la gestion de monstre mais pour 
 * le type d'attack
 */
document.querySelectorAll(".mouse_c")
    .forEach((element) => {
        element.addEventListener("click", function() {            
            if (!(this.classList.contains("choisi_s"))) {
                Settings.mode =  element.dataset.mode; //on save dans les paramètres
                document.querySelector(".choisi_s").classList.remove("choisi_s")
                this.classList.add("choisi_s")
            }
    })
});



game = null; //variable global, permet de lancer d'arrêté le jeu
document.getElementById("start").addEventListener("click", btn_start)
function btn_start(by) {
    if (game == null) {
        document.querySelector("#start p").innerText =  "STOP";
        game =  new Game(); //On init le jeu
    } else {
        document.querySelector("#start p").innerText =  "START";
        if (by != "game") game.gameover(); //On stop le jeu
        game = null; //Permet le redémarrage
    }
}

//Button de l'affichage de l'historique
document.getElementById("btn").addEventListener("click", function() {
    var o = document.getElementById("histo");//get la section de l'historique
    if (o.classList.contains("none")) {
        o.classList.remove("none");
    } else {
        o.classList.add("none");
    }
})