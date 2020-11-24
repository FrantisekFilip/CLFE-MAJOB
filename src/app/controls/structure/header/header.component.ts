import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../../../common-controls/dialogs/confirmation-dialog/confirmation-dialog.service';
import { ErrorDialogService } from '../../../common-controls/dialogs/error-dialog/error-dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private confirmationDialogService: ConfirmationDialogService, private errorDialogService: ErrorDialogService) {
  }

  ngOnInit(): void {
  }

  public confirmationDialog(): void {
    this.confirmationDialogService.confirmDialog('Opravdu si přejete pokračovat?').subscribe(data => {
      if (data === true) {
        alert('ano');
      } else {
        alert('ne');
      }
    });
  }

  public errorDialog(): void {
    this.errorDialogService.displayError('Nastala neznámá chyba!');
  }
}
