import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:number
  password:String
  username:String
  nom:String
  prenom: String
  email: String

  constructor(private userService:UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    const user = this.userService.getUser(this.id)
    this.username = user.username
    this.password = user.password
    this.nom = user.nom
    this.prenom = user.prenom
    this.email = user.email
  }

  

}
