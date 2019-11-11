import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'it-content-doc',
  templateUrl: './content-doc.component.html',
  styleUrls: ['./content-doc.component.scss']
})
export class ContentDocComponent implements OnInit {
  docs;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  public setDoc(doc) {
    this.docs = doc;
  }

  public copyLabel(value){
    let message = `copiado para a área de transferência! `
    this.openSnackBar(message, '');
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
