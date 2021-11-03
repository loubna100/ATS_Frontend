import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links = [{nom:'Home',destination:'/'}, {nom:'Nos services',destination:'/services'},{nom:"Offres d'emploi",destination:'/offres'},{nom:'Contacts',destination:'/contact'}];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

}
