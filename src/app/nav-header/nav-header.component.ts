import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalSearchComponent } from './../main/modal-search/modal-search.component';

export interface DialogData {
  cpf: number;
  password: string;
}

@Component({
  selector: 'it-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  cpf: number;
  password: string;
  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalSearchComponent, {
      width: '550px',
      minWidth: '60%',
      height: '350px',
      panelClass: 'search-user',
      data: { cpf: this.cpf, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cpf = result;
      console.log('Busca', { cpf: result?.cpf, password: result?.password });

    });
  }
}
