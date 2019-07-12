import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
const url = 'http://demo-ropandi-backend.herokuapp.com/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }
  callDataUsers(){
    return this.http.get(url).pipe(
      map((response: any) => {
        console.log('call from users service ' + response);
        return response;
      }
    ));
  }
}
