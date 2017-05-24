import { Injectable } from '@angular/core';
import {UserApiService} from "./user-api.service";

@Injectable()
export class UserService {
  constructor(public httpService: UserApiService) { }

  public findUsers() {
    return this.httpService.findUsers();
  }

  public findUser(Username: string) {
    return this.httpService.findUserByUsername(Username);
  }
}
