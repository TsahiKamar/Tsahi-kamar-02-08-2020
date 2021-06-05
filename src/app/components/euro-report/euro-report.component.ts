
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { Euro } from 'src/app/models/euro.model';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-euro-report',
  templateUrl: './euro-report.component.html',
  styleUrls: ['./euro-report.component.css']
})
export class EuroReportComponent implements OnInit {

  displayedColumns: string[] = ['_id','date','amount','account','dc'];

  dataSource: Euro[];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  constructor(private http: HttpClient,private generalService: GeneralService) { }

  ngOnInit() { 
    this.GetEuro(); 
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  public GetEuro(){
  try {
    this.generalService.GetEuros().subscribe(results => {
     this.dataSource = results["euro"];
     console.log('client results:' + results);
  });
 }
 catch(e)
 {
   console.log('GetEuro failed ! exception :' + e);
 }
}

}



