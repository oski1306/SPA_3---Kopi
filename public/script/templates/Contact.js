import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Contact Me')
    }
    async getPage(){
       return `
       <h2 class="title1" translateKey="Contact">Choose Language to show text/ Wybierz język aby wywyświetlić tekst/ Velg språk for å vise tekst</h2>
       <i class="fa-brands fa-linkedin fa-10x" style="color: #235fc7;" onclick="window.location.href='https://www.linkedin.com/in/oskar-mielnik/'"></i>
       <i class="fa-brands fa-square-facebook fa-10x" style="color: #2438cc;" onclick="window.location.href='https://www.facebook.com/oskar.mielnik.3/'"></i>
       <i class="fa-brands fa-instagram fa-10x" style="color: #c8377d;" onclick="window.location.href='https://www.instagram.com/0skar_1306/'"></i>
   `;
    }
}