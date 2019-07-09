import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-simple-pop-up',
  templateUrl: './simple-pop-up.component.html',
  styleUrls: ['./simple-pop-up.component.css']
})
export class SimplePopUpComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SimplePopUpComponent>) { }

  ngOnInit() {
  }

  onOk(){
    this.dialogRef.close();
  }
}
