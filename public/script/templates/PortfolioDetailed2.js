import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Helseflora')
    }
    async getPage(){
       return `
       <h2 class="title2" translateKey="Port2">Choose Language to show text/ Wybierz język aby wywyświetlić tekst/ Velg språk for å vise tekst</h2>
       <div class="helsePics">
            <img src="https://cdn.discordapp.com/attachments/358644695360077834/1089522262631272508/Helseflora_1.PNG" width="300px" height="300px">
            <img src="https://cdn.discordapp.com/attachments/358644695360077834/1089522276187254884/Helseflora_2.PNG" width="300px" height="300px">
            <img src="https://cdn.discordapp.com/attachments/358644695360077834/1089522295497834556/Helseflora_3.PNG" width="300px" height="300px">
            <img src="https://cdn.discordapp.com/attachments/358644695360077834/1089522315643060234/Helseflora_4.PNG" width="300px" height="300px">
       </div>
       <p class="helseText" translateKey="helseText1"></p>
       <p class="helseText" translateKey="helseText2"></p>
       <p class="helseText" translateKey="helseText3"></p>
       <p class="helseText" translateKey="helseText4"></p>
       <p class="helseText" translateKey="helseText5"></p>
       <p class="helseText" translateKey="helseText6"></p>
   `;
    }
}