import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilityService } from '../utility/utility.service';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  responseStatus: number = 0;
  token = '';
  private dataResponse;


  constructor(private http: HttpClient, private utility: UtilityService) { }


  callHttpSeverPost(usernameParam: string,passwordParam:string){
    let body = JSON.stringify({ username: usernameParam, password: passwordParam });
    let url = 'https://demo-ropandi-backend.herokuapp.com/login'
    return this.http.post(url, body, httpOptions).
        pipe(map((response: any) => {
          //this.responseStatus = response.status;
          //console.log('response code : ' + this.responseStatus);
          return response;
        }
         ));


  }

}
