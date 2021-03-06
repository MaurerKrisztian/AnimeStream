import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  HOST = 'https://anime-stream-api.herokuapp.com' //"https://anime-stream-api.herokuapp.com" //'http://localhost:3000';
  BASE_ENDPOINT = '/api/anime/';
  JIKAN_ENDPOINT = '/api/jikan';
  BASE_URL = this.HOST + this.BASE_ENDPOINT;

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

   create(anime): Observable<any>{
    return this.http.post(this.BASE_URL, anime);
  }
  delete(id){
    return this.http.delete(this.BASE_URL +  id);
  }
  update(updatedFields){
    return this.http.patch(this.BASE_URL, updatedFields);
  }


  getJikanAnime(search){
    return this.http.get(this.HOST + this.JIKAN_ENDPOINT + '?search=' + search);
  }


  //crud
  
  get(endpoint){
    return this.http.get(this.HOST + endpoint);
  }

  post(endpoint, data){
    return this.http.post(this.HOST + endpoint, data);
  }

  put(endpoint, data){
    return this.http.put(this.HOST + endpoint, data);
  }

  del(endpoint){
    return this.http.delete(this.HOST + endpoint);
  }

  patch(endpoint, body){
    return this.http.patch(this.HOST + endpoint, body);
  }

}
