import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Portfolio')
    }
    async getPage(){
       return `
       <h2 class="title" translateKey="Portfolio">Portfolio</h2>
       <a href='/portDetailed' class="port" data-link >OD Models</a>
       <a href='/portDetailed2' class="port2" data-link >Helseflora</a>
   `;
    }
}