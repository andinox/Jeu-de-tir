class Monstre {
    alive = true;

    constructor(game) {
        
        this.element = document.getElementById("monstre").cloneNode(true);
        this.top = `${Math.floor(Math.random()* ((game.game_area.offsetHeight +60))) }px`;
        this.right = `${Math.floor(Math.random()* ((game.game_area.offsetWidth +60))) }px`;
        this.element.style.display = "block";
        this.element.style.height =`${Math.floor(Math.random()*80)}px`;
        this.element.style.width = `${Math.floor(Math.random()*80)}px`;
        this.element.style.top = this.top;
        this.element.style.right = this.right;
        this.element.childNodes[0].setAttribute("src",`./img/${game.monstre_img}.svg`);
        this.wait = 5000 / (parseInt(game.difficulty)+1);



        this.element.addEventListener(game.game_mode, () => {
            this.alive = false;
            this.element.remove();
            game.updateScore();
        })

        var willexplod = setTimeout(() => {
            this.clignote = setInterval(() => {
                if (this.element.childNodes[0].getAttribute("src").match(/red/g) != null) { 
                    this.element.childNodes[0].setAttribute("src",`./img/${game.monstre_img}.svg`);
                } else {
                    this.element.childNodes[0].setAttribute("src",`./img/${game.monstre_img}_red.svg`);
                }
            },200)
        },(this.wait/4)*2);

        setTimeout(() => {            
            if (this.alive) {
                clearInterval(this.clignote)
                clearTimeout(willexplod);
                this.element.remove()
                game.gameover();}
        },this.wait);


        
        return this.element;
    }
}