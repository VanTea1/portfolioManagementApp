import { Component } from '@angular/core';
//import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-export',
  standalone: true,
  imports: [],
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss'
})
export class ExportComponent {


  exportAsPDF() {
    const element = document.documentElement;
    const options = {
      filename: 'website.pdf'
    };
  
    //html2pdf().set(options).from(element).save();
  }
}
