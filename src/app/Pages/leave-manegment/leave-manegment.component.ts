import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leave-manegment',
  templateUrl: './leave-manegment.component.html',
  styleUrls: ['./leave-manegment.component.css']
})
export class LeaveManegmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() updateTitleChild = new EventEmitter<string>();
  updateTitle(value: string) {
    this.updateTitleChild.emit(value)
  }
  title = '';
  updateTitlehandler(response : any) {
    debugger;
    console.log(response.target.value);
    this.title = response.target.value;
  }

  @Output() UpdateTypehandler = new EventEmitter<string>();
  updateType(value: string) {
    this.UpdateTypehandler.emit(value)
  }
  // case ='';
  // UpdateTypehandler(result : string)
  // {
  //   this. case= result;
  // }
}
