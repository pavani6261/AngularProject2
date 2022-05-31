import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { FireBaseDataService } from 'src/app/fire-base-data.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  articles: any;

  constructor(private http:HttpClient,public fireBaseDataService:FireBaseDataService) { }

  dataItem:any =[];
  ngOnInit(): void {
    
    
  }

  // getHttpHandler(){
  //   this.dataItem = this.fireBaseDataService.getHttpHandlerTemp();
  // }
  
  formData:any={
    name:"",
  city:"",
  //connection:string="";
  jobtitle:"",
  leavetype:"",
  status:"Pending"

  }
  addLeave()
  {
    this.http.post('https://angular2-e588d-default-rtdb.firebaseio.com/leaves.json',this.formData).subscribe(x => {
        console.log(x);
        this.formData = {
          name:"",
  city:"",
  //connection:string="";
  jobtitle:"",
  leavetype:"",
  status:"Pending"
          
        }
      });
}

}
