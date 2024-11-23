import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  frases: Array<string>=new Array<string>();
  frase:string = "";
  constructor(private toastController: ToastController) {}
  ngOnInit(){
    if(localStorage.getItem("Frases")!=null && localStorage.getItem("Frases")!=undefined){
      this.frases = JSON.parse(localStorage.getItem("Frases")!);
    }
  }
  async NuevaFrase(){
    if(this.frase!=""){
      this.frases.push(this.frase);
      localStorage.setItem("Frases", JSON.stringify(this.frases));
      const toast = await this.toastController.create({
        message: 'Saved!',
        duration: 1500,
        position: 'middle',
      });
      
      await toast.present();
      this.Clear();
    }
    
  }
  Clear(){
    this.frase="";
  }

}
