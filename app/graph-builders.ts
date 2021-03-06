import { Chart } from 'chart.js'

export class GraphBuilders {
  public createPieChart(carr:number[], inputdata:number[], ctx){
    var pie = new Chart(ctx.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Empty', 'Taken', 'Closed'],
        datasets: [{
          label: 'Viewers in millions',
          data: inputdata,
          backgroundColor: carr, // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      }
    });
  }
}