import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'it-download-docs-options',
  templateUrl: './download-docs-options.component.html',
  styleUrls: ['./download-docs-options.component.scss']
})
export class DownloadDocsOptionsComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<DownloadDocsOptionsComponent>) { }

  public ngOnInit() {
  }
  public openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
