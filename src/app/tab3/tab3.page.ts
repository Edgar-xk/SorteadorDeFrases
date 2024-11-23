import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  frases: Array<string>=new Array<string>();
  resultado=[...this.frases];
  constructor() {}
  ngOnInit(){
    if(localStorage.getItem("Frases")!=null && localStorage.getItem("Frases")!=undefined){
      this.frases = JSON.parse(localStorage.getItem("Frases")!);
      this.resultado=[...this.frases];
    }
  }
  doRefresh(event: any) {
    setTimeout(() => {

      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
  handleInput(event:any ) {
    
    
      const query = event.target.value.toLowerCase();
      this.resultado = this.frases.filter((frase:string)=>{

          return frase.includes(event.target.value);
          
        
        
      });
    
   // 
  }
  Eliminar(index:string){
    this.frases.splice(Number.parseInt(index),1);
    this.resultado=[...this.frases];
    localStorage.setItem("Frases",JSON.stringify(this.frases));
  }
  DeleteAll(){
    localStorage.removeItem("Frases");
    this.frases=new Array<string>();
    this.resultado=[...this.frases];
  }

}
