import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-export',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss'
})
export class ExportComponent {

  @Input() cvContent!: HTMLElement;

  exportAsPDF() {
    const options = {
      filename: 'cv.pdf'
    };

    html2pdf().set(options).from(this.cvContent).save();
  }
}
