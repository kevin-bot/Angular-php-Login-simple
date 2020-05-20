import { Component } from '@angular/core';

//service 
import {LoginServiceService} from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login = {user:null,
          pass:null};  
  constructor (private loginService: LoginServiceService) {};

  loginUsuario(){
    this.loginService.loginUsuario(this.login).subscribe(
      datos => {
        if (datos ['resultado'] == 'OK') {
            alert(datos['mensaje']);
        } else {
            alert(datos['mensaje']);
        }
      }
    );
  }
}
