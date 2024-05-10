import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
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

    constructor() { }

    ngAfterViewInit() {
        if (!this.exportContent) {
            console.error('exportContent not found.');
            return;
        }
    }


}