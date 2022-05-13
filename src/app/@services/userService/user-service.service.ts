import { UserModel } from './../../@models/User';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  createEmptyUser(): Observable<UserModel> {
    const user: UserModel = {
      id: null,
      firstname: '',
      lastname: '',
    };
    return of(user);
  }
}
