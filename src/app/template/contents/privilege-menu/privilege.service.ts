import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PrivilegeModel } from './privilege-menu.component';
//const url = 'http://demo-ropandi-backend.herokuapp.com/';
const url ='http://localhost:7899/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {
  constructor(private http: HttpClient) { }


  callData() {
    return this.http.get(url +'privileges').pipe(
      map((response: any) => {
        console.log('call privilege ' + response);
        return response;
      }
      ));
  }

  findOneDataById(idParam:string){
    return this.http.get(url +'privilege/'+idParam).pipe(
      map((response: any) => {
        console.log('call privilege ' + response);
        return response;
      }
      ));
  }

  deletePrivilege(idParam:string){
    let params = new HttpParams();
    params = params.append('id', idParam);
    let httpOptions2  ={
      headers: new HttpHeaders({
      }
      ),
      params: params
    }

    return this.http.get(url + '/privilege/delete', httpOptions2).pipe(
        map((response: any) => {
          console.log('call privilege ' + response);
          return response;
        }
        ));
  }

  savePrivilege(privilege: PrivilegeModel) {
    /*
   "id": "82ccf7e1-e3cb-4382-80cd-aac55b0a5353",
        "role_code": "admin",
        "flag_add": "1",
        "flag_edit": "1",
        "flag_view": "1",
        "flag_delete": "1"

    */

    let body = JSON.stringify({
      role_code: privilege.role_code,
      flag_add: privilege.flag_add,
      flag_edit: privilege.flag_edit,
      flag_view : privilege.flag_view,
      flag_delete :privilege.flag_delete
    });
    return this.http.post(url + 'privilege/save', body, httpOptions).
      pipe(map((response: any) => {
        //this.responseStatus = response.status;
        //console.log('response code : ' + this.responseStatus);
        return response;
      }
      ));

  }


}
