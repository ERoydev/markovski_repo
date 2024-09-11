import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../types/user';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userData = {} as User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(v => {
      const id = v['id']
      
      this.userService.getUser(id).subscribe(user => {
        this.userData = user;
        console.log(this.userData)
      })

    })
  }
}
