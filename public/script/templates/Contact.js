import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Contact Me')
    }
    async getPage(){
       return `
       <h2 class="title1" translateKey="Contact">Contact Me</h2>
       <button class="link1" onclick="window.location.href='https://www.linkedin.com/in/oskar-mielnik/'">LinkedIn</button>
       <button class="link2" onclick="window.location.href='https://www.instagram.com/0skar_1306/'">Instagram</button>
       <button class="link3" onclick="window.location.href='https://www.facebook.com/oskar.mielnik.3/'">Facebook</button>
   `;
    }
}