import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
//import { TableServiceService } from 'src/app/table-service.service';
import { FireBaseDataService } from 'src/app/fire-base-data.service';
import { HttpClient } from '@angular/common/http';

//import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  getWeather: any;
  users: any[] | undefined;

  constructor(private http:HttpClient,
    private fireBaseDataService:FireBaseDataService) { }

  tempItems:any=[];

  ngOnInit(): void {
   this.getleaves();
  }
  searchtext:string = '';
  getleaves(){
    this.fireBaseDataService.getLeavesdata().subscribe((res:any)=>{
      this.tempItems=res
    })
  }
 
  viewStatus =false;
  temparr:any={ name:'',job:'',city:'',leavetype:'',status:''};
  viewFn(item: any)
  {
    this.temparr.push(item);
    this.viewStatus=true;
    return this.temparr;
  }
  
}
  // getHttpHandler(){
  //   this.tempItems = this.fireBaseDataService.getHttpHandlerTemp();
  // }

  // getUsers() {
  //   this.getWeather.getUsers().subscribe(
  //     (res: any) => {
  //       this.users = Object.keys(res).map((key) => { return res[key] });
  //   console.log(this.users);
  //     }
  //   )
  //   }

  // StatusResult:boolean = true;

  // statusHandler(value:any) {
  //   debugger;
  //   console.log(value);
  // }
//   dup:any=[{}]
 
  

// approve(searchTerm:string) 
// {
//    let emp:any=[];
//     if(searchTerm === "") return;
//      this.items.forEach((element:any) => {
//        if(element.status.includes(searchTerm)) emp.push(element)
//        });
//        this.tempData=this.items;
//         this.items=emp;
//          console.log(this.items) 
// }
// backB(){ this.items=this.tempData; }

// tempData : any=[]; 
// hasDuplicates(items:any) {
//   return (new Set(items)).size !== items.length;
// }

  // reduce(){
  //   debugger
  //   let res: any[]=[];
  //   this.items.map(function(item: { status: any; }){
  //     var existItem = res.find(x=>x.status==item.status);
  //     // if(existItem)
  //     //  console.log("item already exist");
  //     // else
  //     if(!existItem)
  //      res.push(item);
  //   });
  //   this.tempData.push(res);
  //   //return res;
  //   // console.log(res);
  // }
  
//   ForStatus(temp:any[],)
// {
// }


// function getHttpHandler() {
//   throw new Error('Function not implemented.');
// }

