import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: any[] = [];

  paginatedUsers: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  async loadUsers() {
    try {
      this.users = await this.UserService.getAllUsers();
      this.paginateUsers();
    } catch(error) {
      console.error('Error loading users:', error);
    }
  }

  paginateUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedUsers = this.users[0].slice(startIndex, endIndex)
  }

  nextPage = () => {
    if (this.currentPage * this.pageSize < this.users[0].length) {
      this.currentPage += 1;
      this.paginateUsers();
    }
  }

  previousPage = () => {
    if (this.currentPage > 1) {
      this.currentPage-= 1;
      this.paginateUsers();
    }
  }

}
