import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js'
import {GraphBuilders} from '../../app/graph-builders';

@Component({
  selector: 'page-g16c',
  templateUrl: 'g16c.html'
})
export class G16cPage {
  @ViewChild('fillChart') fillChart;
  private builder:GraphBuilders = new GraphBuilders();
  colorArray: any;
  inputdata: number[] = [25, 50, 25];
  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    this.colorArray = [];
    for (let i = 0; i < 3; i++) {
    this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
    this.builder.createPieChart(this.colorArray, this.inputdata, this.fillChart);
  }
}
