import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Router} from "@angular/router";


@Injectable()
export class HttpService extends Http {
  private token: string;
  private storageKey = 'authentication-token';

  constructor(backend: XHRBackend, options: RequestOptions, private router: Router) {
    super(backend, options);
  }

  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', `Bearer ${this.getToken()}`);
    }
    else {
      url.headers.set('Authorization', `Bearer ${this.getToken()}`);
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }

  private catchAuthError (self: HttpService) {
    return (res: Response) => {
      if (res.status === 401) {
        self.router.navigate(['/login']);
      }
      return Observable.throw(res);
    };
  }

  private getToken() {
    return sessionStorage.getItem(this.storageKey) || this.token;
  }

  public setToken(token: string) {
    sessionStorage.setItem(this.storageKey, token);
    this.token = token;
  }

  public destroyToken() {
    sessionStorage.clear();
    this.token = null;
  }

}

