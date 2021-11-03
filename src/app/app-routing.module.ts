import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { EquipesComponent } from './equipes/equipes.component';
import { HomeComponent } from './home/home.component';
import { ListeEmploisComponent } from './liste-emplois/liste-emplois.component';
import { OffresComponent } from './offres/offres.component';
import { SearchJobComponent } from './search-job/search-job.component';

const routes: Routes = [
  {path: '',component:HomeComponent,children:[{path:'offres',component:SearchJobComponent},{path:'Liste',component:ListeEmploisComponent}]},

  {path: 'offres', redirectTo:'/offres', pathMatch: 'full'},
  {path: 'admin', redirectTo:'/admin/offres', pathMatch: 'full'},
  {path:'admin',component:AdminComponent,
children:[{path:'offres',component:OffresComponent},
{path:'candidatures',component:CandidaturesComponent},
{path:'equipe',component:EquipesComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
