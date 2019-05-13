import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalSearchComponent } from './../modal-search/modal-search.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'it-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public router : Router, public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalSearchComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); 
    });
  }
}
