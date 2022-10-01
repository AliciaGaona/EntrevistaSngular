import { Component, OnInit } from '@angular/core';
import { ConsumeApiService } from 'src/app/servicios/consume-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api:ConsumeApiService) { }

  ngOnInit(): void {
  }

  getInfo(){
    this.api.getInfoPrincipal().subscribe(data=>{
      console.log(data.results);
    })
  }

}
