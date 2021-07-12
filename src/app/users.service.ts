import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users =[
    {id:1, username: 'aminamk', password:'123456',nom:'makkaoui',prenom:'amina',email:'amina.makkaoui@gmail.com'},
    {id:2, username: 'ghizlannk', password:'123456',nom:'nakouti',prenom:'ghizlan',email:'ghizlan.nakouti@gmail.com'},
    {id:3, username: 'dinajd', password:'123456',nom:'jouied',prenom:'dina',email:'dina.jouied@gmail.com'}
  ]

  backendUrl="http://localhost:8080/users"

  constructor(private http: HttpClient) { }

  getUser(id){
    return this.users.find(e=>e.id === +id);
  }

  findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.backendUrl)
  }

  deleteUser(id: number){
    this.users.splice(this.users.findIndex(e=>e.id === +id), 1)
  }



  

  addUser(user: User):Observable<User>{
    return this.http.post<User>(this.backendUrl, user);
  }
  updateUser(id, username,password,nom,prenom,email){
    this.users.splice(this.users.findIndex(e=>e.id === +id), 1,{id, username,password,nom,prenom,email})
  
    //this.users[this.users.findIndex(e=>e.id === +id)]={id, username,password,nom,prenom,email}
  }
  
}
