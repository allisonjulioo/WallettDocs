import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from './../../nav-header/nav-header.component';

@Component({
  selector: 'it-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.scss']
})
export class ModalSearchComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  public ngOnInit() {
  }
  public onNoClick(): void {
    this.dialogRef.close();
  }

}
