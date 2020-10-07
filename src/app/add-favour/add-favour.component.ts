import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-favour',
  templateUrl: './add-favour.component.html',
  styleUrls: ['./add-favour.component.css']
})
export class AddFavourComponent implements OnInit {
  userList: string [] = ['Ben(You)', 'Alice', 'Bob', 'Mike'];
  favorList: string[] = ['Buy a Chocolate', 'Buy a Pizza', 'Buy a Coffee'];
  fileControl: FormControl;
  public files;

  constructor() {
  }

  ngOnInit(): void {
  }

}
