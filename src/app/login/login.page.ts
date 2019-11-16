import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms';
import { LogingService } from '../loging.service';
import { element } from 'protractor';


// tslint:disable-next-line: label-position

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [FormBuilder, LogingService]
})
@ViewChild('pass', {static: false})
export class LoginPage implements OnInit {
  
   // tslint:disable-next-line: no-inferrable-types
   passwordTypeInput  =  'password';
   cancelButon: boolean = true;
   cancelButon2 = true;
   names: string;
   password: string;
  constructor(public formBuilder: FormBuilder, public loginServicee: LogingService) {

  }

  logForm() {
    const resPuesta = {
      name: this.names,
      pass: this.password
    };
    this.loginServicee.auth(resPuesta.name, resPuesta.pass, resPuesta);
    console.log(resPuesta);
  }

  cambioEnv(event) {
    if (event.detail.value) {
      this.cancelButon = false;
    } else {
      this.cancelButon = true;
    }
    console.log(event.detail.value);
  }
  cambioEnvent(event) {
    if (event.detail.value) {
      this.cancelButon2 = false;
    } else {
      this.cancelButon2 = true;
    }
    console.log(event.detail.value);
  }

  changeLogo() {
    this.passwordTypeInput  =  this.passwordTypeInput  ===  'text'  ?  'password'  :  'text';
    }


  isTrueAll() {
    // tslint:disable-next-line: triple-equals
    if (this.cancelButon == false && this.cancelButon2 == false) {
      return true;
    } else {
      return false;
    }
  }



  ngOnInit() {
  }

}
