import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  constructor() { }
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
    name:'Varun',
    jobtitle:'Designer',
    city:'Hyderabad',
    connection:'Good',
    status:'Rejected'
  },
  {
    name:'Shyam',
    jobtitle:'Front-end engineer',
    city:'Hyderabad',
    connection:'very weak',
    status:'Pending'
  }];
}
