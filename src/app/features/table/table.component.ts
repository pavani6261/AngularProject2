import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  StatusResult:boolean = true;
 items = [{
    name:'Ram',
    jobtitle:'UI Designer',
    city:'Hyderabad',
    connection:'very strong',
    status:'Approved'
  },
  {
  name:'Sam',
  jobtitle:'Design Lead',
  city:'Hyderabad',
  connection:'Good',
  status:'Pending'
  },

  {
    name:'Davin',
    jobtitle:'Designer',
    city:'Hyderabad',
    connection:'Good',
    status:'Approved'
  },
  {
    name:'Shyam',
    jobtitle:'Front-end engineer',
    city:'Hyderabad',
    connection:'very weak',
    status:'Pending'
  }];
}
