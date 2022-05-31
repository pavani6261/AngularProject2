import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FireBaseDataService } from 'src/app/fire-base-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
 username='';
  constructor(public loginService:FireBaseDataService,private router:Router) { }

  ngOnInit(): void {
    this.loginService.currentUser$.subscribe((res:any) => {

      this.currentUser = res;
      this.username=this.currentUser.username;
    })
  }

  onLogIn() {

    this.router.navigate(['/']);

  }



  onLogOut() {

    this.loginService.logout();

    this.router.navigate(['/']);

  }

  
  @Input() titleName:any = '';
  @Output() updateTitleChild = new EventEmitter<string>();
  updateTitle(value: string) {
    this.updateTitleChild.emit(value)
  }


  @Input() caseType:string='';
  

  
  // Type ='';
  // UpdateType(name : string)
  // {
    
  //   this.Type ='name'
  // }
  // updateTitle() {
  //   this.titleName = 'JK Tech'
  // }
}
