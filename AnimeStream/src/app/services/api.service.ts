import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  HOST = 'https://jsonplaceholder.typicode.com/todos/';
 // BASE_ENDPOINT = '/api/quiz/';
  BASE_URL = this.HOST //+ this.BASE_ENDPOINT;

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    
  }

  getAll(): Observable<any>{
    console.log(this.BASE_URL);
    return this.http.get(this.BASE_URL);
   }

   getById(id): Observable<any>{
    return this.http.get(this.BASE_URL + id);
   }


}
