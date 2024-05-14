import { Component, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { BaseInfoComponent } from "../base-info/base-info.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";
import { LayoutsComponent } from "../layouts/layouts.component";
import { ExportComponent} from '../export/export.component';
import { ItKnowledgeComponent } from '../it-knowledge/it-knowledge.component';
@Component({
    selector: 'app-cv',
    standalone: true,
    templateUrl: './cv.component.html',
    styleUrl: './cv.component.scss',
    imports: [BaseInfoComponent, ProjectsComponent, SkillsComponent, LayoutsComponent, ExportComponent, ItKnowledgeComponent]
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


    }

    onExportCV() {
      this.exportCV.emit();
    }




}