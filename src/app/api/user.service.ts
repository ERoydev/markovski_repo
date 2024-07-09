import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://668d78f1099db4c579f31308.mockapi.io/api/users'

  constructor() {}

  async getAllUsers() {
    const allUsers = await fetch(this.baseUrl)
    return await allUsers.json() ?? [];
  }
}
