import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'it-edit-docs',
  templateUrl: './edit-docs.component.html',
  styleUrls: ['./edit-docs.component.scss']
})
export class EditDocsComponent implements OnInit {
  selectedDoc;
  docs =
    [
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
  constructor() { }

  ngOnInit() {
  }
  public selectedDocument(doc) { 
    this.selectedDoc = doc;
    console.log(this.selectedDoc)
  }
  public clearSelected(){
    console.log('Entrou')
    this.selectedDoc = null;
  }
  public addNewCamp(){
    this.docs[0].details.push(
      {
        label: 'Nome do campo',
        value: ['valor do campo'],
      },
      )
  }
}
