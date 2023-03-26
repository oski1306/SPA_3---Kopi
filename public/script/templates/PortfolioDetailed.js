import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('OD Models')
    }
    async getPage(){
       return `
       <h2 class="title" translateKey="Port1">OD Models</h2>
       <div class="odPics">
            <img src="https://media.discordapp.net/attachments/358644695360077834/1088110759856308385/OD_1.PNG" width="400px" height="200px">
            <img src="https://media.discordapp.net/attachments/358644695360077834/1088110783336034375/OD_2.PNG" width="200px" height="200px">
            <img src="https://cdn.discordapp.com/attachments/358644695360077834/1088110808355053618/OD_3.PNG" width="200px" height="200px">
            <img src="https://cdn.discordapp.com/attachments/358644695360077834/1088111649715650661/OD_4.PNG" width="200px" height="200px">
       </div>
       <p class="odText" translateKey="odText1">In the autumn of 2022 we got the assignment to create optional Multimedia project in IKT-project subject.</p>
       <p class="odText" translateKey="odText2">Me and my friend Diogo Duarte decided to create an online marketplace for 3D models.</p>
       <p class="odText" translateKey="odText3">The goal was to give users possibility to upload and download 3D models needed for various projects.</p>
       <p class="odText" translateKey="odText4">In order to create website we have been using tools such as Three.js(for importing/exporting and showing models on the page),</p>
       <p class="odText" translateKey="odText5">HTML (for website design), Blender (making of 3D models) and Accurig (for animating the models).</p>
       <p class="odText1" translateKey="odText6">End product was very satisfactory and resulted with almost top tier grade and a lot of gained experience.</p>
   `;
    }
}