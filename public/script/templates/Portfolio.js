import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Portfolio')
    }
    async getPage(){
       return `
       <h2 class="title2" translateKey="Portfolio">Choose Language to show text/ Wybierz język aby wywyświetlić tekst/ Velg språk for å vise tekst</h2>
       <a href='/portDetailed' class="port" data-link >OD Models</a>
       <a href='/portDetailed2' class="port2" data-link >Helseflora</a>
   `;
    }
}