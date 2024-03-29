import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1');
  }

  getFakeData(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todoooooos/1');
  }
}
