import { SelectionModel } from "@angular/cdk/collections";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { CopyClipboardService } from "src/app/copy-clipboard.service";
import { ContentDocComponent } from "./../content-doc/content-doc.component";

export interface Documents {
  description: string;
  value: string;
  last_modify: string;
  icons: string;
  fields: Array<any>;
}

const docsArr: Documents[] = [
  {
    description: "Carteira de identidade",
    value: "90090999",
    last_modify: "29/08/2001",
    icons: "",
    fields: [
      {
        description: "Nome completo",
        value: "Allison julio",
      },
      {
        description: "Nome completo",
        value: "Allison",
      },
    ],
  },
];

@Component({
  selector: "it-edit-docs",
  templateUrl: "./edit-docs.component.html",
  styleUrls: ["./edit-docs.component.scss"],
})
export class EditDocsComponent implements OnInit {
  displayedColumns: string[] = [
    "select",
    "description",
    "value",
    "last_modify",
    "icons",
  ];
  dataSource = new MatTableDataSource<Documents>(docsArr);
  selection = new SelectionModel<Documents>(true, []);

  docs = docsArr;
  selectedDoc;
  checkThisDoc;
  doc;
  constructor(public dialog: MatDialog, public copy: CopyClipboardService) {}
  ngOnInit() {}
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  checkboxLabel(row?: Documents): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.value + 1
    }`;
  }

  public selectedDocument(doc) {
    this.selectedDoc = doc;
    this.addNewDoc(doc);
  }
  public clearSelected() {
    this.selectedDoc = null;
  }
  public addNewDoc(data?) {
    const dialogRef = this.dialog.open(ContentDocComponent, {
      width: "80%",
      maxWidth: "1280px",
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
