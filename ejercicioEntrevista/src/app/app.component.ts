import { Component } from '@angular/core';
import { ConsumeApiService } from './servicios/consume-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicioEntrevista';

  arrayDatos:any;
  constructor(private api:ConsumeApiService) { }

  ngOnInit(): void {
    this. getInfo()
  }

  getInfo(){
    this.api.getInfoPrincipal().subscribe(data=>{
      console.log(data.results[0].publisher.name) 
      console.log(data.results) 

      // for(let i=0;i<data.pagination.total;i++){
      //   console.log(data.results[i].publisher.name) 

      //   this.arrayDatos(data.results[i].publisher.name)

      // }

      // console.log(this.arrayDatos)
      return data.results        
    })
  }
}
