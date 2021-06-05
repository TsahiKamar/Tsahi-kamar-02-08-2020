import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { Balance } from 'src/app/models/balance.model';
import { GeneralService } from 'src/app/services/general.service';

export interface PeriodicElement {
 //n:number;
 _id: string;//number;
 date: Date;
 amount: number;
 dc: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {_id: "143643", date: new Date("2019-01-16"), amount: 100000, dc: 'd'},
//   {_id: "254646", date: new Date("2019-01-17"), amount: 120000, dc: 'c'}
  
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//];


@Component({
  selector: 'app-balanceReport',
  templateUrl: './balanceReport.component.html',
  styleUrls: ['./balanceReport.component.css']
})
export class BalanceReportComponent implements OnInit { 
   
  //payments: Payment[] = [];   
  //payment: Payment;
  displayedColumns: string[] = ['_id','date','amount','dc'];


  dataSource: Balance[];//ELEMENT_DATA;//Payment[];//Orig new  this.payments ;//ORIG ELEMENT_DATA; // Payments array assignment
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  

  constructor(private http: HttpClient,private generalService: GeneralService) { }

  ngOnInit() {
    //this.dataSource = this.generalService.GetDeposits().subscribe{};//ELEMENT_DATA;
    this.GetBalance(); 
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
}


public GetBalance(){
  try {
    this.generalService.GetBalances().subscribe(results => {
     this.dataSource = results["balances"];
     console.log('client results:' + results);
    //this.latitude = results[0].geometry.location.lat
    //this.longitude = results[0].geometry.location.lng;
    //this.zoom = 12;

  });
 }
 catch(e)
 {
  //this.message = 'Find Location Obs Service error ! ' + e;

   console.log('GetBalance failed ! exception :' + e);
 }
}


}
