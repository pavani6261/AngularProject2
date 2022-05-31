import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { FireBaseDataService } from 'src/app/fire-base-data.service';
//import { TableServiceService } from 'src/app/table-service.service';
@Component({
  selector: 'app-dashboard-c',
  templateUrl: './dashboard-c.component.html',
  styleUrls: ['./dashboard-c.component.css']
})
export class DashboardCComponent implements OnInit {
  item2: any;


  
  constructor(private fireBaseDataService:FireBaseDataService,private router:Router,private http:HttpClient) { }
  items:any=[];
  ngOnInit(): void {
   this.item2 = this.getleaves();
   console.log(this.item2);
    this.items .push(this.getleaves());
    console.log(this.items);
    this.getCards();
  }

  tempItems:any=[];
  getleaves(){
    this.fireBaseDataService.getLeavesdata().subscribe((res:any)=>{
      this.tempItems=res
    })
    return this.tempItems;
  }
  
  pcount=0;
  acount=0;
  tcount=0;
  rcount:number =0;
  getCards(){
    // for(let item in this.items)
    // {
    //   if(item.status==='Pending')
    //   {
    //     this.pcount++;
    //   }
    //   else if(item.status == 'Approved')
    //   {
    //     this.acount++;
    //   }
    //   else
    //   {
    //     this.rcount++;
    //   }
    // }
    this.tcount = this.pcount +this.acount+this.rcount;
    return this.tcount,this.pcount,this.rcount,this.acount;
  }

  @Input() caseType:string='';
  @Output() UpdateTypehandler = new EventEmitter<string>();
  updateType(value: string) {
    this.UpdateTypehandler.emit(value)
  }
  // num=0;
  // count(valstring:string)
  // {
    
  //   for(var i=0;i<this.items.length;i++)
  //   {
  //     if(this.items[i].status===valstring)
  //     {
  //       this.num++;
  //     }
  //   }
  // }

  goToTable() {
    //debugger;
    //this.brand = this.activatedRoute.snapshot.params['brand'];
   // type === 'user' ? this.router.navigate(['/leave-manegment']) : this.router.navigate(['/dashboard-c']);
   // if(type === 'user') {
    //   console.log('called');
    //   this.router.navigate(['/user'])
    // } else {
    //   this.router.navigate(['/jk'])

    // }
    this.router.navigateByUrl("leave-manegment");
 }

}
