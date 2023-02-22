class Monstre {
    alive = true;

    constructor(time = null, game) {
        var t = document.getElementById("terrain_de_jeu");
        this.element = document.getElementById("monstre").cloneNode(true);
        this.top = `${Math.random()*t.offsetHeight}px`;
        this.right = `${Math.random()*t.offsetWidth}px`;
        this.wait = time == null? 2000 : time;

        this.element.style.display = "block";
        this.element.style.top = this.top;
        this.element.style.right = this.right;
    
        this.element.addEventListener("mouseover", () => {
            this.alive = false;
            this.element.remove();
            game.updateScore();
        })

        var willexplod = setTimeout(() => {
            this.clignote = setInterval(() => {
                if (this.element.childNodes[0].getAttribute("src").match(/red/g) != null) { 
                    this.element.childNodes[0].setAttribute("src","bomb_normal.svg");
                } else {
                    this.element.childNodes[0].setAttribute("src","bomb_red.svg");
                }
            },200)
        },(this.wait/3 )* 2);

        setTimeout(() => {            
            if (this.alive) {t.remove();game.gameover();clearTimeout(willexplod);}
        },this.wait);
    }
}