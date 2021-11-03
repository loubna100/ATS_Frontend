import { Component, Inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.scss']
})
export class postuler implements OnInit {


    _postuler:boolean=false;
    formatLabel(value: number) {
        if (value >= 1000) {
          return Math.round(value / 1000) + 'k';
        }
    
        return value;
      }
    offre:any=''
    ngOnInit(): void {
       
       this.offre=this.data;
    }
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
        
    }

    postuler(target:MatButton)
    {
      
this._postuler=true;
let e=target._elementRef.nativeElement;

e.innerText="Envoyer"
    }
}
