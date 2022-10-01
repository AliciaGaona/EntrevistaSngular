import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumeApiService {

  constructor(private http:HttpClient) { }

  getInfoPrincipal():Observable<any>{
    let url='https://api.datos.gob.mx/v2/Releases_SFP'
    return this.http.get(url)
  }

}
