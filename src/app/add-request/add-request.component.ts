import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css'],
})
export class AddRequestComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  onclick() {
    alert('Your Request Posted.');
    this.router.navigate(['./viewPublic']);
  }
}
