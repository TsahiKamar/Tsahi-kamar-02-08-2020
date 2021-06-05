
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { Deposit } from 'src/app/models/deposit.model';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-deposit-report',
  templateUrl: './deposit-report.component.html',
  styleUrls: ['./deposit-report.component.css']
})
export class DepositReportComponent implements OnInit {
  displayedColumns: string[] = ['_id','date','amount','account'];


  dataSource: Deposit[];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  

  constructor(private http: HttpClient,private generalService: GeneralService) { }

  ngOnInit() {
    this.GetDeposits(); 
  }

onRowClicked(row) {
    console.log('Row clicked: ', row);
}


public GetDeposits(){
  try {
    this.generalService.GetDeposits().subscribe(results => {
     this.dataSource = results["deposits"];
  });
 }
 catch(e)
 {
   console.log('GetDeposits failed ! exception :' + e);
 }
}


}



