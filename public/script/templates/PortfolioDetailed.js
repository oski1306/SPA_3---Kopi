import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Portfolio')
    }
    async getPage(){
       return `
       <h2 class="title2">OD Models</h2>
       <p translateKey="PortfolioText">askljhdljasl</p>
   `;
    }
}