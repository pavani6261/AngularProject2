import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireBaseDataService } from '../fire-base-data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginData:any ={UserName:'',Password:''}
  user: any = {};
  constructor(private router:Router,public loginservice:FireBaseDataService) { }

 
  ngOnInit(): void {

    this.isUserPresent();
  }
addLogIn() {
   console.log(this.loginData);
    this.loginservice.getLogIn(this.loginData).subscribe(
      (res) => {if (!res) {
         console.log('Invalid Credentials');
         return;
         } // subscribing the current user object         
         this.isUserPresent();
         },
          (err) => console.log(err) );
         }

isUserPresent(){

    this.loginservice.currentUser$.subscribe((user:any) => {

      this.user = user;

      if(user.isAdmin){

        this.router.navigateByUrl("dashboard-c");

      } else{

        this.router.navigateByUrl("applyleave");

      }

    })

  }

}
  // roleType="";
  // userName="";
  // password="";
  // logindata(data:any){
  //   console.log(data);
  //   this.userName=data.userName;
  //   this.password=data.password;
  //   this.userName=data.roleType;
  // }

  // loginStatus(){
  //   this.fireBaseDataService.loginValue="true";
  //   this.router.navigate(['/dashboard-c']);
  // }


