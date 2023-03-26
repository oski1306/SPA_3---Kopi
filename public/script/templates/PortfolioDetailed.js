import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('OD Models')
    }
    async getPage(){
       return `
       <h2 class="title2" translateKey="Port1">Choose Language to show text/ Wybierz język aby wywyświetlić tekst/ Velg språk for å vise tekst</h2>
       <div class="odPics">
            <img src="https://media.discordapp.net/attachments/358644695360077834/1088110759856308385/OD_1.PNG" width="400px" height="200px">
            <img src="https://media.discordapp.net/attachments/358644695360077834/1088110783336034375/OD_2.PNG" width="200px" height="200px">
            <img src="https://cdn.discordapp.com/attachments/358644695360077834/1088110808355053618/OD_3.PNG" width="200px" height="200px">
            <img src="https://cdn.discordapp.com/attachments/358644695360077834/1088111649715650661/OD_4.PNG" width="200px" height="200px">
       </div>
       <p class="odText" translateKey="odText1"></p>
       <p class="odText" translateKey="odText2"></p>
       <p class="odText" translateKey="odText3"></p>
       <p class="odText" translateKey="odText4"></p>
       <p class="odText" translateKey="odText5"></p>
       <p class="odText" translateKey="odText6"></p>
   `;
    }
}