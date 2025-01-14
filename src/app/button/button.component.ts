import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output('getData') sendData = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleClick(event) {
    this.sendData.emit(event);
  }
}
