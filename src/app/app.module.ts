import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field'
import {  MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { OffresComponent } from './offres/offres.component';
import { EquipesComponent } from './equipes/equipes.component';
import {MatMenuModule} from '@angular/material/menu';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { HeaderComponent } from './header/header.component';
import { MdcButtonModule, MdcChipsModule, MDCDataTableModule, MdcFabModule, MdcIcon, MdcIconModule, MdcListModule, MdcMenuModule, MdcSelectModule, MdcTabBarModule, MdcTextFieldModule } from '@angular-mdc/web';
import { HttpClientModule } from '@angular/common/http';
import { FormOffreComponent } from './form-offre/form-offre.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import { PageOffreComponent } from './page-offre/page-offre.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { ListeEmploisComponent } from './liste-emplois/liste-emplois.component';
import { postuler } from './liste-emplois/postuler/postuler.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    OffresComponent,
    EquipesComponent,
    CandidaturesComponent,
    HeaderComponent,
    FormOffreComponent,
    HomeComponent,
    PageOffreComponent,
    SearchJobComponent,
    ListeEmploisComponent,
    postuler
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatMenuModule,
  MatIconModule,
  MatDialogModule,
    MatAutocompleteModule,
  MatFormFieldModule,
  MatSelectModule,
  MdcChipsModule,
  MatPaginatorModule,
 MdcTabBarModule,
 MdcIconModule,
 MdcFabModule,
 MatBadgeModule,
 MatTabsModule,
 MatSliderModule,
    MdcTextFieldModule,
    MdcButtonModule,
    MdcSelectModule,
    MdcListModule,
    MDCDataTableModule,
    MdcMenuModule,
    MdcSelectModule,
  ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
