import { Component } from '@angular/core';
import {  LogingService } from '../loging.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [LogingService]
})
export class HomePage {

  constructor(public loginServicee: LogingService) {

  }


}
