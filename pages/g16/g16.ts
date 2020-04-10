import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js'
import { G16cPage } from '../g16c/g16c'

@Component({
  selector: 'page-g16',
  templateUrl: 'g16.html'
})
export class G16Page {

  constructor(public navCtrl: NavController) {

  }

  g16c(){
  this.navCtrl.push(G16cPage);
  }
}
