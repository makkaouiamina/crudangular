import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../User.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  action: string
  state: string

  bid:number
  busername:string
  bpassword:string
  bnom:string
  bprenom:string
  bemail:string

  constructor(private router:Router,private userService:UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params.id !== undefined){
      this.action = 'edit user'
      this.state= 'hidden'

      const user = this.userService.getUser(this.route.snapshot.params.id)
      this.bid= user.id
      this.busername= user.username
      this.bpassword=user.password
      this.bnom=user.nom
      this.bprenom=user.prenom
      this.bemail=user.email
      
    }else{
      this.action='add user'

      this.bid= null
      this.busername= ''
      this.bpassword=''
      this.bnom=''
      this.bprenom=''
      this.bemail=''
    }
  }

  onSubmit(id,username, password, nom, prenom, email){
    if(this.action = 'edit user'){
      let iid=this.route.snapshot.params.id
      this.userService.updateUser(iid, username,password,nom,prenom,email)
    }else{
      this.userService.addUser(new User(id, password, username, nom, prenom, email)).subscribe(
        data=>{
          this.router.navigate(["list"])
        }
      )
    }
  
  }

}
