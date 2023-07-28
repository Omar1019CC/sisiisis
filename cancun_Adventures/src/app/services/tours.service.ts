import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TourCategory } from '../tour.enum';
import { api } from 'src/environments/api';


@Injectable({
  providedIn: 'root',
})
export class TourService {
  private apiUrl = api.apiUrl + '/tours';

  constructor(private http: HttpClient) {}

  getTours() {
    return this.http.get(this.apiUrl);
  }

  getTourById(id: number) {
    const url = this.apiUrl + '/' + id;
    return this.http.get(url);
  }
  getImageName(): Observable<string> {
    const url = `${this.apiUrl}`;

    return this.http.get<any>(url).pipe(map((response) => response.img));
  }

  getToursByCategory(category: TourCategory): Observable<any[]> {
    const url = `${this.apiUrl}?category=${category}`;
    return this.http.get<any[]>(url);
  }
}
