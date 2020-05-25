import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.css']
})
export class DashboardChartsComponent implements OnInit {
  public highcharts;
  public chartOptions;
  public chartOptionsForNumOfPlanets;
  public chartOptionsForCharInSpecies;
  constructor(private service: UserServiceService) { 
  }

  ngOnInit(): void {
 let listOfFilms;
 this.highcharts = Highcharts;
 listOfFilms = this.service.Users[1].listOfFilms;
 this.chartOptions = {   
     chart : {
         plotBorderWidth: null,
         plotShadow: false
     },
     title : {
         text: 'Number of characters appearing in each film.'   
     },
     tooltip : {
         pointFormat: '{series.name}: <b>{point.NumOfChars:.1f}</b>'
     },
     plotOptions : {
         pie: {
           allowPointSelect: true,
           cursor: 'pointer',
           dataLabels: {
               enabled: true,
               format: '<b>{point.name}</b>: {point.percentage:.1f} ',
               style: {
                 color: (Highcharts["theme"] && Highcharts["theme"].contrastTextColor)||
                 'black'
               }
           }
         }
     },
     series : [{
         type: 'pie',
         name: 'Name of the film',
         data: (function () {
          let data=[];
          for (var i = 0; i < listOfFilms.length; i++) {
            data.push([
              listOfFilms[i].film,
              parseInt(listOfFilms[i].NumOfChars)]
            );
          }
          return data;
        }())    
          
          }]
   };
   this.chartOptionsForNumOfPlanets = {   
     chart : {
       plotBorderWidth: null,
       plotShadow: false
     },
     title : {
       text: 'Number of planets appearing in each film.'   
     },
     tooltip : {
       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     },
     plotOptions : {
       pie: {
           allowPointSelect: true,
           cursor: 'pointer',
           dataLabels: {
             enabled: true,
             format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
             style: {
                 color: (Highcharts["theme"] && Highcharts["theme"].contrastTextColor)||
                 'black'
             }
           }
       }
     },
     series : [{
       type: 'pie',
       name: 'Number of planets',
       data:  (function () {
        let data=[];
        for (var i = 0; i < listOfFilms.length; i++) {
          data.push([
            listOfFilms[i].NumOfChars,
            parseInt(listOfFilms[i].NumOfChars)]
          );
        }
        return data;
      }())  
     }]
 };
 this.chartOptionsForCharInSpecies = {   
   chart : {
     plotBorderWidth: null,
     plotShadow: false
   },
   title : {
     text: 'Number of characters of each species'   
   },
   tooltip : {
     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   },
   plotOptions : {
     pie: {
         allowPointSelect: true,
         cursor: 'pointer',
         dataLabels: {
           enabled: true,
           format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
           style: {
               color: (Highcharts["theme"] && Highcharts["theme"].contrastTextColor)||
               'black'
           }
         }
     }
   },
   series : [{
     type: 'pie',
     name: 'Browser share',
     data: (function () {
      let data=[];
      for (var i = 0; i < listOfFilms.length; i++) {
        data.push([
          listOfFilms[i].NumOfChars,
          parseInt(listOfFilms[i].NumOfCharsSpecies)]
        );
      }
      return data;
    }()) 
   }]
 }




}

}
