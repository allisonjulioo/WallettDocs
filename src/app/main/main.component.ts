import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  selectedDoc;
  docs = [
    {
      label: 'Carteira de identidade'
    },
    {
      label: 'Carteira de trabalho'
    },
    {
      label: 'Título de eleitor'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  public openDocument(doc){
    console.log(doc);
    this.selectedDoc = doc;
  }

}
