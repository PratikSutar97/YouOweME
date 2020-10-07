import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MemberFavoursComponent } from './member-favours/member-favours.component';
import { AppRoutingModule } from './app-routing.module';
import { AddRequestComponent } from './add-request/add-request.component';

/* Animations Material */
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { AddFavourComponent } from './add-favour/add-favour.component';
import { ReturnFavourComponent } from './return-favour/return-favour.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';

/* DATABASE SERVICES */
import { UsersServicesService } from './_serviceModels/usersServices/users-services.service';
import { FavorsServicesService } from './_serviceModels/favorsServices/favors-services.service';
import { RequestsServicesService } from './_serviceModels/requestsServices/requests-services.service';
import { FavoursOwingComponent } from './favours-owing/favours-owing.component';
import { FavoursGivenComponent } from './favours-given/favours-given.component';


@NgModule({
  exports: [
    MatSlideToggleModule,

  ],
  declarations: [
    AppComponent,
    MemberFavoursComponent,
    AddRequestComponent,
    AddFavourComponent,
    ReturnFavourComponent,
    ViewRequestComponent,
    FavoursOwingComponent,
    FavoursGivenComponent,
  ],
  imports: [
    MatPaginatorModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
  ],
  providers: [
    UsersServicesService,
    FavorsServicesService,
    RequestsServicesService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
