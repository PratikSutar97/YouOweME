import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  
  constructor(
    private http: HttpClient,
    ) {}

  async getUsersTotalCount(): Promise<number> {
    const total = await fetch('http://localhost:3000/api/users/total');
    const jsonTotal = await total.json();
    return jsonTotal.total;
  }
}
