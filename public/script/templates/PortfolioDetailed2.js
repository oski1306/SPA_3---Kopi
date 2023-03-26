import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Helseflora')
    }
    async getPage(){
       return `
       <h2 class="title" translateKey="Port2">Helseflora</h2>
       <div class="helsePics">
            <img src="https://cdn.discordapp.com/attachments/358644695360077834/1089522262631272508/Helseflora_1.PNG" width="300px" height="300px">
            <img src="https://cdn.discordapp.com/attachments/358644695360077834/1089522276187254884/Helseflora_2.PNG" width="300px" height="300px">
            <img src="https://cdn.discordapp.com/attachments/358644695360077834/1089522295497834556/Helseflora_3.PNG" width="300px" height="300px">
            <img src="https://cdn.discordapp.com/attachments/358644695360077834/1089522315643060234/Helseflora_4.PNG" width="300px" height="300px">
       </div>
       <p class="helseText" translateKey="helseText1">One of our programming assignments was to create a website for fictional store named Helseflora.</p>
       <p class="helseText" translateKey="helseText2">There was a list of functions the website should have such as admin functionality or working shopping cart.</p>
       <p class="helseText" translateKey="helseText3">The website has working searchbar which displays products based on search word. If there are no matches adequate text pops up.</p>
       <p class="helseText" translateKey="helseText4">User has the ability to see detailed view of a plant as well as list of plants in selected category.</p>
       <p class="helseText" translateKey="helseText5">Working admin login makes it possible for authorized user to add and delete plants.</p>
       <p class="helseText1" translateKey="helseText6">The website also has working shopping cart.</p>
   `;
    }
}