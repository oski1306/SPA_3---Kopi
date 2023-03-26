import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('About Me')
    }
    async getPage(){
       return `
       <h2 class="title" translateKey="About">About Me</h2>
       <div class="myPic" >
          <img src="https://cdn.discordapp.com/attachments/358644695360077834/1088079861421191188/Meg.jpg" width="200px" height="200px">
       </div>
       <p class="aboutTxt" translateKey="AboutText1">My name is Oskar Mielnik I'm 21 years old and currently I'm studying Multimedia Technology and Design at UIA in Grimstad.</p>
       <p class="aboutTxt" translateKey="AboutText2">In the course of three years at University I've been learning about different aspects needed to create variety of projects across many Multimedia branches.</p>
       <p class="aboutTxt" translateKey="AboutText3">I'm very familiar with programs such as Adobe After Effects, Adobe Photoshop, Adobe Premiere Pro, Adobe Audition, Blender and MySql Workbench.</p>
       <p class="aboutTxt" translateKey="AboutText4">In addition to this im also familiar with JavaScript (which i used to program this application).</p>
       <p class="aboutTxt" translateKey="AboutText5">Out of all of things mentioned I'm most passionate about 3D modeling in Blender and working with Adobe software.</p> 
       <p class="aboutTxt1" translateKey="AboutText6">If you have any questions or want to contact me, head over to Contact Me page.</p> 
   `;
    }
}