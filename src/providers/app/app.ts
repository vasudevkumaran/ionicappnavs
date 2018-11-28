import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AppProvider Provider');
  }

  public sendToServer(url: string, payload: any): Observable<any> {
    var headerParams: HttpHeaders = new HttpHeaders();
    headerParams.append('Content-Type', 'application/json');
    return this.http.post(url, payload, { headers: headerParams })

  }

  public saveLogin(loginObj:any){
    console.log(loginObj)
      localStorage.setItem("user_full_name",loginObj.user_full_name);
      localStorage.setItem("user_last_name",loginObj.user_last_name)
      localStorage.setItem("is_business",loginObj.is_business)
      localStorage.setItem("is_holidays",loginObj.is_holidays)
      localStorage.setItem("is_travel",loginObj.is_travel)
      localStorage.setItem("user_id",loginObj.user_id)
      localStorage.setItem("user_name",loginObj.user_name)
      localStorage.setItem("user_password",loginObj.user_password)

  }

}
