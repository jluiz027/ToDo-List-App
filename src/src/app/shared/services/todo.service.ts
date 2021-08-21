import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  
  constructor(private http: HttpClient) {

   }
   private serviceUrl: string = `http://localhost:3000`;

   public getUserRoles(): Observable<any> {
    const userRoles = this.http.get<any>(`${this.serviceUrl}`);
    return userRoles;
  }
}
