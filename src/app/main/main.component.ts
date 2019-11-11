import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentDocComponent } from './content-doc/content-doc.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { DownloadDocsOptionsComponent } from './download-docs-options/download-docs-options.component';

@Component({
  selector: 'it-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild(ContentDocComponent) contentDocComponentRef: ContentDocComponent;
  selectedDoc;
  checkThis;
  docs = [
    {
      label: 'Carteira de identidade',
      details: [
        {
          label: 'Nome',
          value: ['Allison Julio de Oliveira Nunes'],
        },
        {
          label: 'Filiação',
          value: ['Elizabet Dias de Oliveira Nunes', 'Adson Nunes de Souza']
        },
        {
          label: 'Naturalidade',
          value: ['Vitória - ES']
        }
      ]
    },
    {
      label: 'Carteira de trabalho'
    },
    {
      label: 'Título de eleitor'
    }
  ]
  constructor(private bottomSheet: MatBottomSheet) { }

  public ngOnInit() {
    this.contentDocComponentRef.docs = this.docs[0]
    this.selectedDoc = this.docs[0];
  }
  public openDocument(doc) {
    this.selectedDoc = doc;
  }
  public checkThisDoc(doc) {
    if (this.checkThis == doc)
      this.checkThis = null
    else
      this.checkThis = doc;
  }
  public openBottomSheet(): void {
    this.bottomSheet.open(DownloadDocsOptionsComponent);
  }

}
