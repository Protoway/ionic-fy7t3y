import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js'
import { G16cPage } from '../g16c/g16c'
import { G16ncPage } from '../g16nc/g16nc'
import { G16sPage } from '../g16s/g16s'

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
  g16nc(){
  this.navCtrl.push(G16ncPage);
  }
  g16s(){
  this.navCtrl.push(G16sPage);
  }
}
