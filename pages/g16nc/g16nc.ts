import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import {GraphBuilders} from '../../app/graph-builders';

@Component({
  selector: 'page-g16nc',
  templateUrl: 'g16nc.html'
})
export class G16ncPage {
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
  /*
  createBarChart() {
    this.colorArray = [];
    for (let i = 0; i < 3; i++) {
    this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
  }
    this.pie = new Chart(this.fillChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Empty', 'Taken', 'Closed'],
        datasets: [{
          label: 'Viewers in millions',
          data: [33, 33, 34],
          backgroundColor: this.colorArray, // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      }
    });
  }
  */
}
