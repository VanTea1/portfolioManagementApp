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
  redirectUri = 'http://localhost:4200/auth/linkedin/callback';

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
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=liteprofile%20emailaddress%20w_member_social`;
    window.location.href = authUrl;
  }
}
