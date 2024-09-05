import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  private apiUrl = 'http://localhost:3000/get-contact-data';

  constructor(private http: HttpClient) {}

  getContactData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
