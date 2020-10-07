import { Component, OnInit, ViewChild, ChangeDetectorRef, Inject } from '@angular/core';
import { Requests } from './requests';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css'],
})

export class ViewRequestComponent implements OnInit {
  constructor(private changeDetectedRef: ChangeDetectorRef) { }
  breakpoint: number;
  requests = [new Requests(1, "Tony", "Office Work", ["Pizza"], [1], "Clean My Desk"),
  new Requests(2, "Stark", "Home Work", ["Burgers"], [2], "Clean my fridge"),
  new Requests(3, "Natasha", "College Work", ["Pizzas"], [2], "Assist in Packing"),
  new Requests(4, "Steve", "Office Work", ["Chocolates", "Burgers"], [2, 3], "Clean my office"),
  new Requests(6, "Waldo", "School Work", ["Pizzas", "Burger"], [2, 1], "Assist in Homework "),
  new Requests(5, "Jobs", "College Work", ["Burger"], [1], "Paint my walls"),
  new Requests(7, "Rogers", "Office Work", ["Pizzas", "Dessert"], [2, 1], "Clean my Desk"),
  new Requests(8, "Nick", "Shop Work", ["Pizza", "Chocolates"], [1, 3], "Organise Shelves"),
  new Requests(9, "Fury", "Shop Work", ["Pizzas", "Burgers"], [2, 3], "Clean my Cupboards"),
  new Requests(10, "Chadwick", "Kitchen Work", ["Pizza", "Chips"], [1, 3], "Wash Plates"),
  new Requests(11, "Challa", "House Work", ["Pizza", "Nuggets"], [1, 2], "Laundry")];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Requests> = new MatTableDataSource<Requests>(this.requests);
  isShow = false;
  id = "";
  title = "";
  desc = "";
  name = "";
  quantity = [];
  rewards = [];
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    this.changeDetectedRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
  toggleDisplay(id, title, desc, name, quantity, reward) {
    this.isShow = !this.isShow;
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.name = name;
    this.quantity = quantity;
    this.rewards = reward;
    this.changeDetectedRef.detectChanges();
    this.dataSource.paginator = this.paginator;
  }
}
