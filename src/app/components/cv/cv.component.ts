import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { BaseInfoComponent } from "../base-info/base-info.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
    selector: 'app-cv',
    standalone: true,
    templateUrl: './cv.component.html',
    styleUrl: './cv.component.scss',
    imports: [BaseInfoComponent, ProjectsComponent, SkillsComponent]
})
export class CVComponent implements AfterViewInit {

    @ViewChild('exportContent', { static: false }) exportContent!: ElementRef<any>;

    constructor() { }

    ngAfterViewInit() {
        if (!this.exportContent) {
            console.error('exportContent not found.');
            return;
        }
    }

    exportToPDF() {
      if (!this.exportContent) {
        console.error('exportContent not found.');
        return;
      }
    
      const doc = new jspdf.jsPDF();
      const contentElement = this.exportContent.nativeElement;
    
      const originalBorderStyle = contentElement.style.border;
      contentElement.style.border = 'none'; 
    
      html2canvas(contentElement, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
        doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        doc.save('cv_data.pdf');
        contentElement.style.border = originalBorderStyle;
      });
    }
}