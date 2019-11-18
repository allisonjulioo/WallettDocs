import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { DownloadDocsOptionsComponent } from './download-docs-options/download-docs-options.component';
import { CopyClipboardService } from '../copy-clipboard.service';

export interface Documents {
  description: string;
  value: string;
  last_modify: string;
  pdf: string;
  fields: Array<any>;
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'it-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  displayedColumns: string[] = ['description', 'value',];
  selectedDoc;
  checkThis;
  checkAll;
  file;
  zoom = .6;
  docs: Documents[] = [
    {
      description: 'Titulo de eleitor',
      value: '15909394',
      last_modify: '29/08/1992',
      pdf: './assets/xerox/titulo de eleitor.pdf',
      fields: [
        {
          description: 'Nome completo',
          value: 'Allison julio'
        },
        {
          description: 'Nome completo',
          value: 'Allison julio'
        }
      ]
    },
    {
      description: 'Carteira de trabalho',
      value: '1601153936-0',
      last_modify: '29/08/1992',
      pdf: './assets/xerox/carteira de trabalho frente.pdf',
      fields: [
        {
          description: 'Número',
          value: '12142413'
        }
      ]
    },
  ];
  constructor(private bottomSheet: MatBottomSheet, public copy: CopyClipboardService) { }

  public ngOnInit() {
    this.selectedDoc = this.docs[0];
  }
  upload(event) {
    console.log(event);
    this.file = event.target.files[0];
  }

  public openDocument(doc, evt, key) {
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
  public changeZoom(type){
    type == 'remove' ? (this.zoom <= 1 ? this.zoom = .6 : this.zoom --) : this.zoom ++ ;
  }

}
