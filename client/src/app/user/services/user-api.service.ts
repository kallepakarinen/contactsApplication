import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class UserApiService {
  private url: string = environment.endpointUrl + '/login';

  constructor(private http: HttpService) {
  }

  login() {
    return this.http.put(this.url, null);
  }
}
