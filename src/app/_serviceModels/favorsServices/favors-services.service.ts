import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavorsServicesService {
  
  constructor(
    private http: HttpClient,
    ) {}

  async getTotalFavorsTaken(): Promise<number> {
    const total = await fetch('http://localhost:3000/api/favors/taken/total');
    const jsonTotal = await total.json();
    return jsonTotal.total;
  }

  async getTotalFavorsGivenBack(): Promise<number> {
    const total = await fetch('http://localhost:3000/api/favors/given/total');
    const jsonTotal = await total.json();
    return jsonTotal.total;
  }
}
