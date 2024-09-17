import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { User } from 'src/app/types/user';
import calculateAge from 'src/app/utils/calculateAge';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  isDialogOpen = false;
  currUser = {} as User;

  paginatedUsers: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(
    private UserService: UserService,
    private dialogService: DialogService,
  ) {}

  // Main functionalities
  ngOnInit(): void {
    // Here i load all the users using Observable syntax instead of Promises
    this.UserService.getAllUsers().subscribe((allUsers: User[]) => {
      this.users = allUsers;
      this.paginateUsers();
    })
  }
  
  deleteUserHandler(user: User) {
    this.UserService.deleteUser(user.id).subscribe((response) => {
      
      // I need to update the local state to display the latests changes
      this.users = this.users.filter((u) => u.id !== user.id)
      this.paginateUsers()
    })
  }

  openDialog(event: Event, user: User) {
    event.preventDefault();
    this.isDialogOpen = true;
    this.currUser = user;
  }

  // Here i create two functions which i pass inside user-list.component.html as an Event
  // The parent component can subscribe to these events using event binding like (close)="closeDialog()", (submit)="submitDialog()"
  closeDialog() {
    this.isDialogOpen = false;
  }

  submitDialog() {
    this.deleteUserHandler(this.currUser);
    this.closeDialog();
  }
  // END Dialog functions

  // Pagination
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
  // End of Pagination

  getAge(birthDate: string): number | null {
    return calculateAge(birthDate);
  }
}
