import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Portfolio')
    }
    async getPage(){
       return `
       <h2 class="title" translateKey="Portfolio">Portfolio</h2>
       <div class="port">
           <a href='/portDetailed' class="portBtn" data-link >OD Models</a>
           <br>
           <a href='/portDetailed2' class="portBtn" data-link >Helseflora</a>
       </div>
   `;
    }
}
