import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: String = "http://localhost:8082/api";
  private endpoint: String = "gebruiker";

  constructor(private httpClient: HttpClient) { 

  }

  //show list of all user in database
  list(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/${this.endpoint}`);
  }

  //create user in database
  create (user: User): Observable<User>{ 
    return this.httpClient.post<User>(`${this.url}/${this.endpoint}`, user);
  }

  //return user based on id
  findById(id:Number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${this.endpoint}/${id}`);
  }

  //edit user based on id
  update(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.url}/${this.endpoint}/${user.id}`, user);
  }

  //delete user from db
  delete(id:Number): Observable<User> {
    return this.httpClient.delete<User>(`${this.url}/${this.endpoint}/${id}`);
  }
  
}
