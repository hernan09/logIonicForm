import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from './home/home.page';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LogingService {

  constructor( public router: Router) { }

auth(name, password , body) {
  body = {
    namee: name,
    pass: password
  };
   // tslint:disable-next-line: triple-equals
  if ( name == 'hernan' && password == 'raptor') {
       this.router.navigate(['/home', { body:body.pass}]);
       console.log('se ah logueado correctamente');
       return true;
   } else {
     this.router.navigateByUrl('/login');
     console.log('se a logueado de forma incorrecta');
     return false;
   }
}



}
