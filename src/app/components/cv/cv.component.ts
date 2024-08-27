import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { BaseInfoComponent } from '../base-info/base-info.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { LayoutsComponent } from '../layouts/layouts.component';
import { ExportComponent } from '../export/export.component';
import { ItKnowledgeComponent } from '../it-knowledge/it-knowledge.component';
import { LinkedinCallbackComponent } from '../linkedin-callback/linkedin-callback.component';
import { OtherSkillsCategoryComponent } from '../other-skills-category/other-skills-category.component';
import { ExportContentComponent } from '../export-content/export-content.component';
@Component({
  selector: 'app-cv',
  standalone: true,
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
  imports: [
    BaseInfoComponent,
    ProjectsComponent,
    SkillsComponent,
    LayoutsComponent,
    ExportComponent,
    ItKnowledgeComponent,
    LinkedinCallbackComponent,
    OtherSkillsCategoryComponent,
    ExportContentComponent,
  ],
})
export class CVComponent implements AfterViewInit {
  @ViewChild('exportContent', { static: false })
  exportContent!: ElementRef<any>;
  @Output() exportCV = new EventEmitter<void>();

  clientId = '783sd9od1azet2';
  client_secret = 'WPL_AP0.6EQ2kDPT1n5nU4mU.MjczOTE2ODA3MA==';
  redirectUri = 'http://localhost:4200/callback';
  scope = 'profile email openid';
  response_type = 'code';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const exportContentElement: HTMLElement =
      this.elementRef.nativeElement.querySelector('.cv');
    if (!this.exportContent) {
      console.error('exportContent not found.');
      return;
    }
  }

  onExportCV() {
    this.exportCV.emit();
  }

  loginWithLinkedIn() {
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?client_id=${this.clientId}&client_secret=${this.client_secret}&redirect_uri=${this.redirectUri}&scope=${this.scope}&response_type=${this.response_type}`;
    window.location.href = authUrl;
  }
}
