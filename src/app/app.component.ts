import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';

import { UsersServicesService } from './_serviceModels/usersServices/users-services.service';
import { FavorsServicesService } from './_serviceModels/favorsServices/favors-services.service';
import { RequestsServicesService } from './_serviceModels/requestsServices/requests-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private http: HttpClient,
    private usersServices: UsersServicesService,
    private favorsServices: FavorsServicesService,
    private requestsServices: RequestsServicesService
    ) {
  }

  title = 'Favornix';
  currentTheme = '';
  themeIcon = '';
  isDarkTheme = false;
  time = new Date();
  timer;
  isMobile = false;
  totalUsers = -1;
  totalFavorsTaken = -1;
  totalFavorsGivenBack = -1;
  totalRequestsPublished = -1;
  totalRequestsFulfilled = -1;

  async ngOnInit(): Promise<void> {
    this.timer = setInterval(() => {this.time = new Date();}, 1000);
    this.currentTheme = localStorage.getItem('theme');
    this.isDarkTheme = this.currentTheme === 'Dark';
    this.setThemeIcon();
    this.totalUsers = await this.getTotalUsers();
    this.totalFavorsTaken = await this.getTotalFavorsTaken();
    this.totalFavorsGivenBack = await this.getTotalFavorsGivenBack();
    this.totalRequestsPublished = await this.getTotalRequestsPublished();
    this.totalRequestsFulfilled = await this.getTotalRequestsFulfilled();

    if (window.screen.width <= 599) { // If mobile width
      this.isMobile = true;
    }
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }

  saveSelectedTheme() {
    localStorage.setItem('theme', this.isDarkTheme ? 'Dark' : 'Light');
    this.setThemeIcon();
  }

  setThemeIcon() {
    this.themeIcon = this.isDarkTheme ? 'bedtime' : 'wb_sunny';
  }

  /* USERS SERVICES API CALLS */
  async getTotalUsers(): Promise<number> {
    return await this.usersServices.getUsersTotalCount();
  }

  /* FAVORS & FAVOR TYPES API CALLS */
  async getTotalFavorsTaken(): Promise<number> {
    return await this.favorsServices.getTotalFavorsTaken();
  }

  async getTotalFavorsGivenBack(): Promise<number> {
    return await this.favorsServices.getTotalFavorsGivenBack();
  }

  /* REQUESTS & REQUEST TYPES API CALLS */
  async getTotalRequestsPublished(): Promise<number> {
    return await this.requestsServices.getTotalRequestsPublished();
  }
  
  async getTotalRequestsFulfilled(): Promise<number> {
    return await this.requestsServices.getTotalRequestsFulfilled();
  }
}
