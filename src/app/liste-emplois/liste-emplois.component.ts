import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OffreService } from '../services/offre.service';
import { postuler } from './postuler/postuler.component';

@Component({
  selector: 'app-liste-emplois',
  templateUrl: './liste-emplois.component.html',
  styleUrls: ['./liste-emplois.component.scss']
})
export class ListeEmploisComponent implements OnInit {

  constructor( private serviceOffre:OffreService,public dialog: MatDialog) { }



  openDialog(offre:any)
  {
  
    this.dialog.open(postuler,{ width: '700px',
    data:offre,
 
    panelClass: 'custom-dialog-container' })
  }
  offres:any[]=[]
  async ngOnInit()
  {
    await this.serviceOffre.getOffrePubliéFromServer();

await this.serviceOffre.offresPubliéSubject.subscribe(
      (offresPublié: any[]) => {
      
       this.offres=offresPublié})
}}
