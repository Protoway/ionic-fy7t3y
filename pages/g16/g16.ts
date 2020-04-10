import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js'
import { G16cPage } from '../g16c/g16c'

@Component({
  selector: 'page-g16',
  templateUrl: 'g16.html'
})
export class G16Page {
  @ViewChild('fillChart') fillChart;
  pie: any;
  colorArray: any;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    this.createBarChart();
  }

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
  g16c(){
  this.navCtrl.push(G16cPage);
  }
}
