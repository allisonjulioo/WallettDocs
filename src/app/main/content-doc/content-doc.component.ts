import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  description: string;
  fields: Array<any>;
}
export interface Documents {
  description: string;
  value: string;
  last_modify: string;
  pdf: string;
  fields: Array<any>;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'it-content-doc',
  templateUrl: './content-doc.component.html',
  styleUrls: ['./content-doc.component.scss']
})
export class ContentDocComponent implements OnInit {
  checkThisDoc;
  new_doc: any = {
    description: '',
    value: '',
  };
  pdfSrc;
  docs: any;
  zoom: number;
  constructor(
    public dialogRef: MatDialogRef<ContentDocComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.zoom = 0.2;
    this.docs = this.data;
    this.new_doc.label = this.data.description;
  }
  public setDoc(doc) {
    this.docs = doc;
  }
  public addNewField() {
    if (this.new_doc.description && this.new_doc.value) {
      if (this.docs.fields && this.docs.fields.length > 0) {
        this.docs.fields.push(this.new_doc);
      } else {
        this.docs = {
          description: this.docs.description,
          fields: [this.new_doc]
        };
      }
      this.new_doc = {};
    }
  }
  closeModal(): void {
    const data = {
      description: this.docs.description,
      fields: [this.new_doc]
    };
    this.data = data;
    this.dialogRef.close();
  }
  public onFileSelected() {
    const img: any = document.querySelector('#file');
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
      reader.readAsArrayBuffer(img.files[0]);
    }
  }
  public deleteField(index) {
    this.docs.fields.splice(index, 1);
  }
}
