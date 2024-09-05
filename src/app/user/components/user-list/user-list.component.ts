import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  isDialogOpen = false;

  paginatedUsers: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(
    private UserService: UserService
  ) {}

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  ngOnInit(): void {
    // Here i load all the users using Observable syntax instead of Promises
    this.UserService.getAllUsers().subscribe((allUsers: User[]) => {
      this.users = allUsers;
      this.paginateUsers();
    })
  }


  deleteUserHandler(event: Event, user: User) {
    event.preventDefault()
    this.openDialog();
    // console.log(user.id)

    // this.UserService.deleteUser(user.id).subscribe((response) => {
      
    //   // I need to update the local state to display the latests changes
    //   this.users = this.users.filter((u) => u.id !== user.id)
    //   this.paginateUsers()
    // })
  }

  paginateUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedUsers = this.users.slice(startIndex, endIndex);
  }

  nextPage = () => {
    if (this.currentPage * this.pageSize < this.users.length) {
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

  calculateAge(birthDate: string): number {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();

    return age;
  }

}
