import { Component } from '@angular/core';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {
  selectedLayout: string | null = null;

  //currently only changing the color of the picked layout and saving it in a variable
  
  toggleLayout(layoutId: string) {
      if (this.selectedLayout === layoutId) {
          this.selectedLayout = null;
      } else {
          this.selectedLayout = layoutId;
      }
  }

  isLayoutSelected(layoutId: string): boolean {
    return this.selectedLayout === layoutId;
}
}
