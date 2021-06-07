import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  cost = 0;
  @Input() step = 1;
  @Input() notBelow = 0;
  @Input() notMore = 0;
  
  @Output() numberChange = new EventEmitter();
  @Input() get number(){
    return this.cost;
  }
  set number(value: number){
    this.cost = value;
  }
  // _componentName = "action-bar"
  // get componentName(){
  //   return this._componentName;
  // }
  // set componentName(value:string){
  //   this._componentName = value;
  // }
  constructor() { }

  ngOnInit(): void {
    this.cost = this.number;
    // console.log(this.componentName);
    // this.componentName = 'none';
  }
  increase(){
    if(this.cost + this.step <= this.notMore){
      this.cost = this.cost + this.step;
    }
    this.numberChange.emit(this.cost);
  }
  decrease(){
    if(this.cost - this.step >= this.notBelow){
      this.cost = this.cost - this.step;
    }
    this.numberChange.emit(this.cost);
  }
}
