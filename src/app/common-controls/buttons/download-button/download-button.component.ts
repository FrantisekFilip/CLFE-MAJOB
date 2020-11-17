import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RefButtonDirective } from '../ref-button.directive';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent extends RefButtonDirective implements OnInit {
  public hasContent: boolean;

  @ViewChild('')
  public set content(value: any) {
    this.hasContent = (value) ? true : false;
  }

  protected OnConstruct(): { defaultIcon: string } {
    return { defaultIcon: 'get_app' };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
