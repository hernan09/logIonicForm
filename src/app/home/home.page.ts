import { Component, OnInit } from '@angular/core';
import {  LogingService } from '../loging.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JSEncrypt } from 'jsencrypt';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [LogingService]
})
export class HomePage {
 body: any;
 private pem = `your_key`;
  constructor(public loginServicee: LogingService, public activatedRouter: ActivatedRoute , public router: Router) {
   this.body = this.activatedRouter.snapshot.paramMap.get('body');
   this.verify();

   console.log(window.location.hash);

  }


verify() {
  if (this.body != 'raptor') {
    this.router.navigateByUrl('/login');
  } else {

  }
}


}
