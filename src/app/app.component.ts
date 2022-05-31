import { Component} from '@angular/core';

import {Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router , private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {

  }
  title = 'AngularProject2';


  updateTitle(title:any) {
    // debugger;
    this.title = title;
  }
  Type ='';
  updateType(name:any) {
    // debugger;
    this.Type = name;
  }
  // userStatus:string ='';
  // updatHandler(value:any) {
  //   this.userStatus = value;
  // }

 goToUserModule() {
    //debugger;
    //this.brand = this.activatedRoute.snapshot.params['brand'];
   // type === 'user' ? this.router.navigate(['/leave-manegment']) : this.router.navigate(['/dashboard-c']);
   // if(type === 'user') {
    //   console.log('called');
    //   this.router.navigate(['/user'])
    // } else {
    //   this.router.navigate(['/jk'])

    // }
 }

}

