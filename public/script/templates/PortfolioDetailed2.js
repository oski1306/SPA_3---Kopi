import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Helseflora')
    }
    async getPage(){
       return `
       <h2 class="title2">Helseflora</h2>
       <p translateKey="PortfolioText">askljhdljasl</p>
   `;
    }
}