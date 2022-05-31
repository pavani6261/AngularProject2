import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireBaseDataService } from '../fire-base-data.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  signupdata:any={username:'',password:'',confirmpassword:'',isAdmin:''}
  constructor(private router:Router, private loginservice:FireBaseDataService) { }

  ngOnInit(): void {
  }

  adminFun(){
    this.signupdata.isAdmin =true;
    console.log(this.signupdata.isAdmin);
  }

signupFun(){
  console.log(this.signupdata);

  if(this.signupdata.password === this.signupdata.confirmpassword ){

  let {confirmpassword, ...otherData} = this.signupdata;

  this.loginservice.postSignupdata(otherData).subscribe((res:any) => {

    console.log(res);

    this.signupdata = {username:'', password:'', confirmpassword:'',isAdmin:''};

  },

  (err) => console.log(err)

  ,

  () => {

  this.router.navigateByUrl("/")

  }

  )



}
}


  temp:any=[];
  // signup(data: any){
  //   console.log(data);
  //   debugger;
  //   this.http.post('https://angular2-e588d-default-rtdb.firebaseio.com/leaves.json'
  //     ).subscribe((x: any) => {
  //       console.log(x);
        
  //     });
  // }
  signupStatus(){
    this.router.navigate(['']);
  }

//   postAccountHandler()
//   {
    
// }
}
