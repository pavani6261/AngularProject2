import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
