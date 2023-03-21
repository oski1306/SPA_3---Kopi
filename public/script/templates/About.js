import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('About Me')
    }
    async getPage(){
       return `
       <h2 class="title3" translateKey="About">About Me</h2>
       <p translateKey="AboutText">About Me</p>
   `;
    }
}