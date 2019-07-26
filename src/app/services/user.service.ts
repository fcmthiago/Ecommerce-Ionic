import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url = 'https://nestjs-ecommerce.herokuapp.com/users';
  constructor(private http:HttpClient) { }

  listaPessoas: User[];

  getAllUsers(){
    return this.http.get<User[]>(this.url);
  }
  
  postUser(newUser: User ){
    console.log("Service: "+newUser.username);
    return this.http.post<User>(this.url, newUser);
  }

  deleteUser(newUser: User ){
    console.log("Service: "+newUser.username);
    return this.http.delete(`${this.url}/${newUser.id}`);
  }
}