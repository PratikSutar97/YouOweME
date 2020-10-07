import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsServicesService {
  
  constructor(
    private http: HttpClient,
    ) {}

  async getTotalRequestsPublished(): Promise<number> {
    const total = await fetch('http://localhost:3000/api/requests/published/total');
    const jsonTotal = await total.json();
    return jsonTotal.total;
  }

  async getTotalRequestsFulfilled(): Promise<number> {
    const total = await fetch('http://localhost:3000/api/requests/fulfilled/total');
    const jsonTotal = await total.json();
    return jsonTotal.total;
  }
}
