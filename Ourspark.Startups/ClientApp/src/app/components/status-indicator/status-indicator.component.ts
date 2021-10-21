import { Component, Input, OnInit } from '@angular/core';
import { ControlMode } from '../../../enum/control-mode';
import { ResponseSubStatus } from '../../../enum/Response';

@Component({
  selector: 'ourspark-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.css']
})
export class StatusIndicatorComponent implements OnInit {

  @Input() ControlMode : ControlMode;
  @Input() Status : ResponseSubStatus;

  EnumControlMode = ControlMode;
  EnumStatus = ResponseSubStatus;

  constructor() { }

  ngOnInit() {
  }

}
