
import { HttpClient } from '@angular/common/http';
import { Component, ComponentRef, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OffreService } from '../services/offre.service';

interface departement
{
  id:number,
  nom:string
}
interface equipe
{
  id:number,
  nom:string
}

interface skill
{
  id:any,
  type:any,
  nom:any

}

@Component({
  selector: 'app-form-offre',
  templateUrl: './form-offre.component.html',
  styleUrls: ['./form-offre.component.scss']
})
export class FormOffreComponent implements OnInit {



 
equipes:equipe[]=[]
 

Departments:departement[]=[]
 

formOffre:FormGroup;

ListedSoftSkills:String[]=[]
  selectable = true;
  removable = true;
  softSkills: String[] = [];
  allsoftSkills: skill[] = [];

  @ViewChild('softSkillInput') softSkillInput: ElementRef<HTMLInputElement>;

  ListedhardSkills:String[]=[]
  
  hardSkills: string[] = [];
  allhardSkills: skill[] = [];

  @ViewChild('hardSkillInput') hardSkillInput: ElementRef<HTMLInputElement>;
  constructor(private httpClient:HttpClient,private router: Router,private serviceOffre:OffreService,public dialogRef: MatDialogRef<FormOffreComponent>) {

    this.formOffre=new FormGroup({titre:new FormControl(),
      description:new FormControl(),remuneration:new FormControl(), competences:new FormControl(),
      departement:new FormControl(),equipe:new FormControl(),status:new FormControl()})

  }
 async save(target0:MatButton,target2:any,target3:any)

  {
    
    let e=target0._elementRef.nativeElement;
    if(e.innerText=="Suivant")
    {
  e.innerText="Enregistrer"


    this.onNext(target2,target3)}
    else
    {
      this.formOffre.value.status="publié"
  
      
  let array1=this.allsoftSkills.filter((e)=> this.softSkills.includes(e.nom)).concat()

  this.formOffre.value.competences=array1.concat(this.allhardSkills.filter((e)=> this.hardSkills.includes(e.nom)))
      this.formOffre.value.departement=this.Departments.find((d)=>{ return d.id==this.formOffre.value.departement});
      this.formOffre.value.equipe=this.equipes.find((d)=>{ return d.id==this.formOffre.value.equipe});

await this.serviceOffre.saveOffreToServer(this.formOffre.value)
this.dialogRef.close()
    }
  
  }

  

  async ngOnInit() {

 
  


    await this.httpClient.get('http://localhost:8082/departements').toPromise().then(data=> {let values=Object.values(data);  
    for(let i=0;i<values.length;i++)
    {   this.Departments.push(values[i])  ; } ; } ).catch(err => { console.log ('error');
   }); 
   await this.httpClient.get('http://localhost:8082/equipes').toPromise().then(data=> {let values=Object.values(data);  
   for(let i=0;i<values.length;i++)
   {   this.equipes.push(values[i])  ; } ; } ).catch(err => { console.log ('error');
  }); 
 
  await this.httpClient.get('http://localhost:8082/competences').toPromise().then(data=> {let values=Object.values(data);  
  for(let i=0;i<values.length;i++)
  { 
    if(values[i].type=="savoir-etre") {this.allsoftSkills.push({nom:values[i].nom,id:values[i].id,type:values[i].type}) }else {this.allhardSkills.push({nom:values[i].nom,id:values[i].id,type:values[i].type}) } } ;  } ).catch(err => { console.log ('error');
 }); 


}




  chercherSoft(input:any):void
  {
    this.ListedSoftSkills=[]

    if(input.target.value)
    {
 let temp=this.allsoftSkills.filter(softSkill => softSkill.nom.startsWith(input.target.value))

 temp.forEach(element => {
   
  this.ListedSoftSkills.push(element.nom+'')
 });
   
    }
    else
    {
     
   this.allsoftSkills.forEach(element => {
   
        this.ListedSoftSkills.push(element.nom)
       });;

    }


  }



  





  chercherHard(input:any):void
  {
    this.ListedhardSkills=[]

    if(input.target.value)
    {
 let temp=this.allhardSkills.filter(hardSkill => hardSkill.nom.startsWith(input.target.value))

 temp.forEach(element => {
   
  this.ListedhardSkills.push(element.nom+'')
 });
   
    }
    else
    {
     
   this.allhardSkills.forEach(element => {
   
        this.ListedhardSkills.push(element.nom)
       });;

    }


  }









  removeSoft(softSkill: string): void {

    const index = this.softSkills.indexOf(softSkill);

    if (index >= 0) {
      this.softSkills.splice(index, 1);
    }
  }
  
  removeHard(hardSkill: string): void {

    const index = this.hardSkills.indexOf(hardSkill);

    if (index >= 0) {
      this.hardSkills.splice(index, 1);
    }
  }
  initialiserListeSoft()
  {
    this.ListedSoftSkills=[]
  this.allsoftSkills.forEach((skill)=>{this.ListedSoftSkills.push(skill.nom+'')});
  }



  initialiserListeHard()
  {
    this.ListedhardSkills=[]
  this.allhardSkills.forEach((skill)=>{this.ListedhardSkills.push(skill.nom+'')});
  }

  selectedSoft(event: MatAutocompleteSelectedEvent): void {

    this.softSkills.push(event.option.viewValue);
    this.softSkillInput.nativeElement.value = '';
 //   this.softSkillCtrl.setValue(null);
  }

  
  selectedHard(event: MatAutocompleteSelectedEvent): void {

    this.hardSkills.push(event.option.viewValue);
    this.hardSkillInput.nativeElement.value = '';
 //   this.hardSkillCtrl.setValue(null);
  }

  
  

  
  onPrevious(target0:MatButton, target1:any,target2:any) {
    // target3.setAttribute("style","bottom:91vh")
 
    let e=target0._elementRef.nativeElement;
    e.innerText="Suivant"
      target1.setAttribute("style","display:normal");
   
 
      target2.setAttribute("style","display:none");
  
  }

  onNext( target1:any,target2:any) {
   // target3.setAttribute("style","bottom:91vh")


     target1.setAttribute("style","display:none");
  

     target2.setAttribute("style","display:normal");
   }




















   
}
