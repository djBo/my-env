import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Environment } from '../environment';

@Component({
  selector: 'app-environment-detail',
  templateUrl: './environment-detail.component.html',
  styleUrls: ['./environment-detail.component.css']
})
export class EnvironmentDetailComponent implements OnInit {
  
  @Input() env: Environment;

  constructor(public dialogRef: MatDialogRef<EnvironmentDetailComponent>) { }

  ngOnInit() {
  }

  base64_decode (s: string) {
    console.log(this.env['installed-at']);
    console.log(this.env['stopped-at']);
    try {
      return atob(s);
    } catch (e) {
      return s;
    }
  }
}
