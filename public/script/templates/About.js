import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('About Me')
    }
    async getPage(){
       return `
       <h2 class="title3" translateKey="About">Choose Language to show text/ Wybierz język aby wywyświetlić tekst/ Velg språk for å vise tekst</h2>
       <div class="myPic" >
          <img src="https://cdn.discordapp.com/attachments/358644695360077834/1088079861421191188/Meg.jpg" width="200px" height="200px">
       </div>
       <p class="aboutTxt" translateKey="AboutText1"></p>
       <p class="aboutTxt" translateKey="AboutText2"></p>
       <p class="aboutTxt" translateKey="AboutText3"></p>
       <p class="aboutTxt" translateKey="AboutText4"></p>
       <p class="aboutTxt" translateKey="AboutText5"></p> 
       <p class="aboutTxt" translateKey="AboutText6"></p> 
   `;
    }
}