import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* ROUTING COMPONENTS */
import { AddRequestComponent } from './add-request/add-request.component';
import { AddFavourComponent } from './add-favour/add-favour.component';
import { ReturnFavourComponent } from './return-favour/return-favour.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import {FavoursGivenComponent} from './favours-given/favours-given.component';
import {FavoursOwingComponent} from './favours-owing/favours-owing.component';

const routes: Routes = [
  { path: 'viewPublic', component: ViewRequestComponent },
  { path: 'addRequest', component: AddRequestComponent },
  { path: 'addFavour', component: AddFavourComponent },
  { path: 'returnFavour', component: ReturnFavourComponent },
  { path: 'favoursGiven', component: FavoursGivenComponent },
  { path: 'favoursOwing', component: FavoursOwingComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
