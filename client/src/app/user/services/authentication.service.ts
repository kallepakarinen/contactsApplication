import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpService} from "./http.service";

@Injectable()
export class AuthenticationService {
  url = environment.endpointUrl + '/authentication';

  constructor(private http: HttpService) {
  }

  authenticate(userName: string, password: string) {
    return this.http.post(this.url, {
      userName: userName,
      password: password
    }).map((response) => {
      let data = response.json();
      this.http.setToken(data.token);
    });
  }
}
