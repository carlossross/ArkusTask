import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = 'http://localhost:3000/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getData(name: string) {
    return this.http.get(`${this.apiUrl}search/${name}`);
  }

  addData(body: any) {
    return this.http.post(this.apiUrl, JSON.stringify(body), this.httpOptions);
  }
}
