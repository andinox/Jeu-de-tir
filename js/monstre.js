class Monstre {
    alive = true;

    constructor(game) {

        this.element = document.getElementById("monstre").cloneNode(true);
        this.element.style.display = "block";
        this.element.childNodes[0].setAttribute("src", `./img/${game.monstre_img}.svg`);
        this.wait = 5000 / (parseInt(game.difficulty) + 1);
        // Calcul des positions en x et y
        let Width = Math.random() * game.game_area.offsetWidth ;
        let Height = Math.random() * game.game_area.offsetHeight;
        Height = (Height > game.game_area.offsetHeight - 50) ? game.game_area.offsetHeight - 50 : Height;
        Width = (Width > game.game_area.offsetWidth - 50) ? game.game_area.offsetWidth - 50 : Width;
        const posX = Math.floor(Width);
        const posY = Math.floor(Height);

        // Positionnement de l'élément
        this.element.style.top = `${posY}px`;
        this.element.style.left = `${posX}px`;

        this.element.addEventListener(game.game_mode, () => {
            this.alive = false;
            this.element.remove();
            game.updateScore();
        })

        var willexplod = setTimeout(() => {
            this.clignote = setInterval(() => {
                if (this.element.childNodes[0].getAttribute("src").match(/red/g) != null) {
                    this.element.childNodes[0].setAttribute("src", `./img/${game.monstre_img}.svg`);
                } else {
                    this.element.childNodes[0].setAttribute("src", `./img/${game.monstre_img}_red.svg`);
                }
            }, 200)
        }, (this.wait / 4) * 2);

        setTimeout(() => {
            if (this.alive) {
                clearInterval(this.clignote)
                clearTimeout(willexplod)
                //game.gameover();
            }
        }, this.wait);



        return this.element;
    } 30
}