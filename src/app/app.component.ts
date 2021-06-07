import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result = 0;
  actionBarNumber1 = 0;
  actionBarNumber2 = 10;
  actionBarNumber3 = 200;
  ngOnInit(): void {
    this.sumResult();
  }
  sumResult(){
    this.result = this.actionBarNumber1 + this.actionBarNumber2 + this.actionBarNumber3;
  }
}
