import { Component, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { BaseInfoComponent } from "../base-info/base-info.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";
import { LayoutsComponent } from "../layouts/layouts.component";
import { ExportComponent} from '../export/export.component';
@Component({
    selector: 'app-cv',
    standalone: true,
    templateUrl: './cv.component.html',
    styleUrl: './cv.component.scss',
    imports: [BaseInfoComponent, ProjectsComponent, SkillsComponent, LayoutsComponent, ExportComponent]
})
export class CVComponent implements AfterViewInit {

    @ViewChild('exportContent', { static: false }) exportContent!: ElementRef<any>;
    @Output() exportCV = new EventEmitter<void>();

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit() {
      const exportContentElement: HTMLElement = this.elementRef.nativeElement.querySelector('.cv');
        if (!this.exportContent) {
            console.error('exportContent not found.');
            return;
        }

        this.insertPageBreaks(exportContentElement);
    }

    onExportCV() {
      this.exportCV.emit();
    }


    //does not work yet
    insertPageBreaks(exportContentElement: HTMLElement) {
      const sections: NodeListOf<HTMLElement> = exportContentElement.querySelectorAll('.section');
      const pageHeight: number = 800; 
  
      let currentPosition: number = 0;
      console.log('Number of sections:', sections.length);
      sections.forEach((section: HTMLElement) => {
        const sectionHeight: number = section.offsetHeight;
  
        if (currentPosition + sectionHeight > pageHeight) {
          const pageBreak: HTMLDivElement = document.createElement('div');
          pageBreak.className = 'page-break';
          exportContentElement.appendChild(pageBreak);
  
          currentPosition = 0; 
        }
  
        currentPosition += sectionHeight;
      });
    }
   

}