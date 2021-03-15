import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users:Observable<User[]>

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users= this.userService.findAll();
  }

  getUser(id){
    this.userService.getUser(id);
  }

  onDelete(id){
    //console.log(id);
    this.userService.deleteUser(id)
  }

}
