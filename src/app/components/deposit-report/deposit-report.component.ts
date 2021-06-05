
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { Deposit } from 'src/app/models/deposit.model';
import { GeneralService } from 'src/app/services/general.service';

// export interface PeriodicElement {

// _id: string;//number;
// date: Date;
// amount: number;
// account: string;

// }
// const ELEMENT_DATA: PeriodicElement[] = [

// {_id: "1", date: new Date("2019-01-16"), amount: 100000, account: '214515'},
// {_id: "2", date: new Date("2019-01-17"), amount: 120000, account: '43634734'}
// ];
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-deposit-report',
  templateUrl: './deposit-report.component.html',
  styleUrls: ['./deposit-report.component.css']
})
export class DepositReportComponent implements OnInit {

  //payments: Payment[] = [];   
  //payment: Payment;
  displayedColumns: string[] = ['_id','date','amount','account'];//['num','date', 'amount','type','method','status','idNum','action'];


  dataSource: Deposit[];//ELEMENT_DATA;//Payment[];//Orig new  this.payments ;//ORIG ELEMENT_DATA; // Payments array assignment
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  

  constructor(private http: HttpClient,private generalService: GeneralService) { }

  ngOnInit() {
    //this.dataSource = this.generalService.GetDeposits().subscribe{};//ELEMENT_DATA;
    this.GetDeposits(); 
  }

onRowClicked(row) {
    console.log('Row clicked: ', row);
}


public GetDeposits(){
  try {
    this.generalService.GetDeposits().subscribe(results => {
     this.dataSource = results["deposits"];
    //this.latitude = results[0].geometry.location.lat
    //this.longitude = results[0].geometry.location.lng;
    //this.zoom = 12;

  });
 }
 catch(e)
 {
  //this.message = 'Find Location Obs Service error ! ' + e;

   console.log('GetDeposits failed ! exception :' + e);
 }
}


}



