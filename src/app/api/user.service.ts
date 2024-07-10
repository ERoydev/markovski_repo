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

  async create(data: any) {
    const data_prepare = {
      first_name: data.firstName,
      last_name: data.lastName,
      role: data.role,
      gender: data.gender,
      birth_date: data.birthDate
    }

    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data_prepare)
    })

    if (response.ok) {
      const result = await response.json()
      return result
    }
  }
}
