import { Injectable } from '@angular/core';
// service http
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  URL = "http://localhost/angular-login-mysql-php-json/";
  constructor(private httpClienteModule: HttpClient) { }

  loginUsuario(login){
    return this.httpClienteModule.post(`${this.URL}login.php`,JSON.stringify(login));
  }
}
