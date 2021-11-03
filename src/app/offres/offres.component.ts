import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormOffreComponent } from '../form-offre/form-offre.component'
import { HttpClient } from '@angular/common/http';
import { OffreService } from '../services/offre.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {

  
Allpostes :any[]=[];
 

postes2:any[]=[]

postes1:any[]=[

]
 compteur=1;





postes:any[]=[]
  constructor(private httpclient:HttpClient,public dialog: MatDialog, public offreS:OffreService) {


  }


  openDialog() {

    const dialogRef =  this.dialog.open(FormOffreComponent,{
      width: '700px',
height:'650px',
       panelClass: 'custom-dialog-container' 
    });
  
  }
  offreSubscription: Subscription;
 
  
  async ngOnInit() {
  await this.offreS.getOffreFromServer();
   await this.offreS.offreSubject.subscribe(
      (offres: any[]) => {
      
       this.Allpostes=offres
       console.log(this.Allpostes)

       
  
   let taille=this.Allpostes.length;
   let n=taille/5;

   this.postes1=[]
   this.postes2=[]
   if(n>1)
   {
     if(taille>10)
     {
       taille=10;
     }

     for(let i =5;i<taille;i++)
{
 this.postes2.push(this.Allpostes[i]);

 
}
taille=5; 
}

 for(let i =0;i<taille;i++)
 {
     this.postes1.push(this.Allpostes[i]);
   this.postes=this.postes1;
 }
}
    );
    this.offreS.emitOffreSubject();

    /*await this.httpclient.get('http://localhost:8082/postes').toPromise().then(data=> {let values=Object.values(data);  
    for(let i=0;i<values.length;i++)
    {   this.Allpostes.push(values[i])  ; }}).catch(err => { console.log ('error');
   });*/ 
   

}





 onClickOne()
 {
   this.compteur=1;
   this.postes=this.postes1;
  
 }
 onClickTwo()
 {
   if(this.postes2.length>0)
 { this.compteur=2;
  
   this.postes=this.postes2;}
   
 }



 
 onClickPrevious()
 {
   let taille= (this.compteur*5)-5  
   if(taille>0)
   {
     this.postes=[]
     for(let i =taille-5;i<taille;i++)
 {
   
   this.postes.push(this.Allpostes[i]);
 
   
 }
 this.compteur--;
   }
 }
 onClickNext()
 {

   console.log(this.compteur)
if(this.Allpostes.length>this.compteur*5)
{this.postes=[]

 let taille=this.Allpostes.length;
 if(this.Allpostes.length>(this.compteur*5)+5)      
 {
   taille=(this.compteur*5)+5;
 }

 for(let i =this.compteur*5;i<taille;i++)
 {
   
   this.postes.push(this.Allpostes[i]);
 
   
 }
 this.compteur++;
}
 }









  

 
  onClick( e:any )
  {

 if(e.className==="filter")
 {  e.style="visibility:visible"
 e.className="filter visible"
  }
  else 
  {
    e.style="visibility:hidden"
    e.className="filter"
  }

}
}
