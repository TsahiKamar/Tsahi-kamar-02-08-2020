import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { Balance } from 'src/app/models/balance.model';
import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'app-balanceReport',
  templateUrl: './balanceReport.component.html',
  styleUrls: ['./balanceReport.component.css']
})
export class BalanceReportComponent implements OnInit { 
   
  displayedColumns: string[] = ['_id','date','amount','dc'];


  dataSource: Balance[];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  

  constructor(private http: HttpClient,private generalService: GeneralService) { }

  ngOnInit() {
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

  });
 }
 catch(e)
 {
   console.log('GetBalance failed ! exception :' + e);
 }
}


}
