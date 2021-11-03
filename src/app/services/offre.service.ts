import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private httpClient:HttpClient) { }
offreSubject = new Subject<any[]>();
  private offres :any[]= []
   
  
  private offresPublié :any[]= []
  offresPubliéSubject = new Subject<any[]>();
  saveOffreToServer(poste:any) {
 console.log(poste)

     this.httpClient.post('http://localhost:8082/postes', poste)
      .subscribe(
        (data) => {
       this.offres.push(data)
       this.emitOffreSubject()
          
        },
        (error) => {
          console.log( error);
        }
      );
}

  emitOffreSubject() {
    this.offreSubject.next(this.offres);
  }
  emitOffrePubliéSubject() {
    this.offresPubliéSubject.next(this.offresPublié);
  }


  getOffreFromServer() {
    this.httpClient
      .get<any[]>('http://localhost:8082/postes')
      .subscribe(
        (response) => {
          this.offres = response;
          console.log(this.offres)
          this.emitOffreSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}


getOffrePubliéFromServer() {
  this.httpClient
    .get<any[]>('http://localhost:8082/postes/publié')
    .subscribe(
      (response) => {
    this.offresPublié=response;
    this.emitOffrePubliéSubject()
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

}
