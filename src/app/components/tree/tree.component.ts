import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


import { GeneralService } from 'src/app/services/general.service';
import { Result } from '../WeatherDetails/Models/result.model';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}



@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  treeData: Result[];

  // private _transformer = (node: FoodNode, level: number) => {
  //   return {
  //     expandable: !!node.children && node.children.length > 0,
  //     name: node.name,
  //     level: level,
  //   };
  // }

  // treeControl = new FlatTreeControl<ExampleFlatNode>(
  //     node => node.level, node => node.expandable);

  // treeFlattener = new MatTreeFlattener(
  //     this._transformer, node => node.level, node => node.expandable, node => node.children);


  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor(private gService : GeneralService) {
    //this.dataSource.data = TREE_DATA;

  }

  //hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit() {
    //TEST
    this.createTree();
    console.log('client treeData:' + JSON.stringify(this.treeData));

  }

  //createTree():void {

  //}

  public createTree(){
    try {
      this.gService.getTreeData().subscribe(data => {
        console.log('getTreeData client response data:' + JSON.stringify(data)); 
        this.treeData = data;
      //this.latitude = results[0].geometry.location.lat
      //this.longitude = results[0].geometry.location.lng;
      //this.zoom = 12;
  
    });
   }
   catch(e)
   {
    //this.message = 'Find Location Obs Service error ! ' + e;
  
     console.log('getTreeData client failed ! exception :' + e);
   }
  }
  
  


}




