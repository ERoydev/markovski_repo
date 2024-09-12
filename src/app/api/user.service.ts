import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://668d78f1099db4c579f31308.mockapi.io/api/users'

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(this.baseUrl)
  }

  getUser(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }

  createUser(data: any) {
    const data_prepare = {
      first_name: data.firstName,
      last_name: data.lastName,
      role: data.role,
      gender: data.gender,
      birth_date: data.birthDate
    } as User;

    const response = this.http.post<User>(this.baseUrl, data_prepare)
    return response;
  };

  deleteUser(userId: number) {
    const response = this.http.delete<User>(`${this.baseUrl}/${userId}/`)
    return response;
  }

  editUser(userId: number, updatedUser: User) {
    const response = this.http.put<User>(`${this.baseUrl}/${userId}/`, updatedUser)
    return response;
  }
}
