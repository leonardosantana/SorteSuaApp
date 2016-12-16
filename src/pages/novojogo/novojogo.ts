import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'novojogo.html'
})
export class NovoJogo {

  dataHj: Date;
  public event = {
    month: new Date().toISOString(),
    timeStarts: '10:00',

  }
  constructor(public navCtrl: NavController) {
  }

}
