
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { Deposit } from 'src/app/models/deposit.model';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-withdrawl-report',
  templateUrl: './withdrawl-report.component.html',
  styleUrls: ['./withdrawl-report.component.css']
})
export class WithdrawlReportComponent implements OnInit {

displayedColumns: string[] = ['_id','date','amount','account'];


  dataSource: Deposit[];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  

  constructor(private http: HttpClient,private generalService: GeneralService) { }

  ngOnInit() {
  
    this.GetWithdrawls(); 
  }
  
  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  public GetWithdrawls(){
    try {
      this.generalService.GetWithdrawls().subscribe(results => {
      this.dataSource = results["withdrawls"];
    });
    }
    catch(e)
    {
       console.log('GetBalance failed ! exception :' + e);
    }
  }
}




