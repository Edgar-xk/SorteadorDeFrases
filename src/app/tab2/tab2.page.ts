import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  frases: Array<string>=new Array<string>();
  frase:string = "";
  constructor() {}

  ngOnInit(){
    if(localStorage.getItem("Frases")!=null && localStorage.getItem("Frases")!=undefined){
      this.frases = JSON.parse(localStorage.getItem("Frases")!);
    }
  }
  Sortear(){
    if(this.frases.length!=0){
      console.log(this.frases);
      let index=Math.trunc(Math.random()*this.frases.length);
      console.log("Index: "+index);
      console.log("Frase: "+this.frases[index]);
      this.frase=this.frases[index];
      console.log(this.frase);
    }
  }
  Limpiar(){
    this.frase="";
  }
}
